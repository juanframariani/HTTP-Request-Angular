<?php

	//error_reporting(E_ALL);
	ini_set('display_errors', 0);
	header("Access-Control-Allow-Origin: http://localhost:4200");
	
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
	$operacion = $_REQUEST["operacion"];
	if($operacion == "delete"){
		$idJugador = $_REQUEST["id"];
		if($idJugador != "0"){
			$sql = "DELETE FROM jugadores WHERE id = ". $idJugador;
			$result = $conn->query($sql);
			if ($result) {
				$arrayRespuesta = array("respuesta" => "OK");
				echo json_encode($arrayRespuesta);
			}else{
				$arrayRespuesta = array("respuesta" => "ERROR");
				echo json_encode($arrayRespuesta);
			}
		}
	}else{
		$idJugador =  ($_REQUEST["id"]);
		$nombre =  ($_REQUEST["nombre"]);
		$nacionalidad =  ($_REQUEST["nacionalidad"]);
		$fechaNacimiento =  ($_REQUEST["fechaNacimiento"]);
		$posicion =  ($_REQUEST["posicion"]);
		$biografia =  ($_REQUEST["biografia"]);
		
		$ultimoId = 0;
		if($idJugador != "0"){
			$sql = "UPDATE jugadores SET nombre='".$nombre."', nacionalidad='".$nacionalidad."', fechaNacimiento='".$fechaNacimiento."', posicion='".$posicion."', biografia='".$biografia."' WHERE id = ". $idJugador;
			$result = $conn->query($sql);
			if ($result) {
				$ultimoId = $idJugador; // asigno el mismo ID
			}
		}else{
			$sql = "INSERT INTO jugadores (nombre, nacionalidad, fechaNacimiento, posicion, biografia) VALUES ('".$nombre."', '".$nacionalidad."', '".$fechaNacimiento."', '".$posicion."', '".$biografia."')";
			$result = $conn->query($sql);
			if ($result) {
				$ultimoId = $conn->insert_id; // obtengo el id insertado.
			}
		}
		
		$sql = "SELECT * FROM jugadores WHERE id = " . $ultimoId;
		$result = $conn->query($sql);
		$arrayJugador = array();
		if ($result->num_rows > 0) {
			while($jugador = $result->fetch_assoc()) {
				$arrayJugador = array("id" =>   ($jugador["id"]), 
								"nombre" =>   ($jugador["nombre"]), 
								"nacionalidad" =>   ($jugador["nacionalidad"]), 
								"fechaNacimiento" =>   ($jugador["fechaNacimiento"]), 
								"posicion" =>   ($jugador["posicion"]), 
								"biografia" =>   ($jugador["biografia"]));
				$arrayJugador = removeInvalidChars($arrayJugador);
			}
		} 
		$conn->close();
		echo json_encode($arrayJugador);
	}
	
	
?>