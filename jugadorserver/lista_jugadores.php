<?php

	//error_reporting(E_ALL);
	ini_set('display_errors', 0);
	header("Access-Control-Allow-Origin: http://localhost:4200");
	
	function removeInvalidChars( $text) { 
		$regex = '/( [\x00-\x7F] | [\xC0-\xDF][\x80-\xBF] | [\xE0-\xEF][\x80-\xBF]{2} | [\xF0-\xF7][\x80-\xBF]{3} ) | ./x'; 
		return preg_replace($regex, '$1', $text); 
	}
	
	$servername = "localhost";
	if($_REQUEST["servidor"]){
		$servername = $_REQUEST["servidor"];
	}
	$username = "root";
	if($_REQUEST["usuario"]){
		$username = $_REQUEST["usuario"];
	}
	
	$password = "";
	$dbname = "angularJ";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	$sql = "SELECT * FROM jugadores";
	$result = $conn->query($sql);

	$array = array();
	if ($result->num_rows > 0) {
		while($jugador = $result->fetch_assoc()) {
			$arrayJugador = array("id" => utf8_encode ($jugador["id"]), 
								"nombre" => utf8_encode ($jugador["nombre"]), 
								"nacionalidad" => utf8_encode ($jugador["nacionalidad"]), 
								"fechaNacimiento" => utf8_encode ($jugador["fechaNacimiento"]), 
								"posicion" => utf8_encode ($jugador["posicion"]), 
								"biografia" => utf8_encode ($jugador["biografia"]));
			array_push($array, removeInvalidChars($arrayJugador)); //uso esta funcion para eliminar cualquier caracter raro que me rompa el JSON     
		}
	} else {
		echo "0 results";
	}
	$conn->close();
	echo json_encode($array);
?>