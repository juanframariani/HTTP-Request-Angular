<?php

	//error_reporting(E_ALL);
	ini_set('display_errors', 0);
	header("Access-Control-Allow-Origin: http://localhost:4200");
	
	//uso esta funcion para eliminar cualquier caracter raro que me rompa el JSON
	function removeInvalidChars( $text) { 
		$regex = '/( [\x00-\x7F] | [\xC0-\xDF][\x80-\xBF] | [\xE0-\xEF][\x80-\xBF]{2} | [\xF0-\xF7][\x80-\xBF]{3} ) | ./x'; 
		return preg_replace($regex, '$1', $text); 
	}
	
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "angularJ";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$arrayJugadores = array();
	if($_REQUEST["idJugador"]){
		$idJugador = $_REQUEST["idJugador"];
		$sql = "SELECT * FROM jugadores WHERE id = " . $idJugador;
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
			while($jugador = $result->fetch_assoc()) {
				$arrayJugadores = array("id" =>   ($jugador["id"]), 
								"nombre" =>   ($jugador["nombre"]), 
								"nacionalidad" =>   utf8_encode($jugador["nacionalidad"]), 
								"fechaNacimiento" =>   ($jugador["fechaNacimiento"]), 
								"posicion" =>   ($jugador["posicion"]), 
								"biografia" =>   ($jugador["biografia"]));
				$arrayJugadores = removeInvalidChars($arrayJugadores);//uso esta funcion para eliminar cualquier caracter raro que me rompa el JSON				
				break;
			}
		} 
	}else if($_REQUEST["denominacion"]){
		$denominacion = $_REQUEST["denominacion"];
		$sql = "SELECT * FROM jugadores WHERE nombre LIKE '%".$denominacion."%'";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
			while($jugador = $result->fetch_assoc()) {
				$arrayEquipo = array("id" =>   ($jugador["id"]), 
								"nombre" =>   ($jugador["nombre"]), 
								"nacionalidad" =>   utf8_encode($jugador["nacionalidad"]), 
								"fechaNacimiento" =>   ($jugador["fechaNacimiento"]), 
								"posicion" =>   ($jugador["posicion"]), 
								"biografia" =>   ($jugador["biografia"]));
				array_push($arrayJugadores, removeInvalidChars($arrayEquipo));//uso esta funcion para eliminar cualquier caracter raro que me rompa el JSON
			}
		} 
	}
	$conn->close();
	echo json_encode($arrayJugadores);
?>