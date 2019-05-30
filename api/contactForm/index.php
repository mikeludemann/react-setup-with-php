<?php

include_once('classes/mail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['firstName']) && empty($_POST['email']) ) {

	echo json_encode(
		[
			"sent" => false,
			"message" => $SendMailEmptyErrorMessage
		]
  ); 
  
  exit();
  
}

if ($_POST){
  
  http_response_code(200);
  
	$subject = 'Contact from: ' . $_POST['firstName'] . ' ' . $_POST['lastName'];
	$from = $_POST['email'];
  $message = $_POST['message']; 
  
	$sendEmail = new Sender($adminEmail, $from, $subject, $message);
  $sendEmail->send();
  
} else {
  
	echo json_encode(
		[
			"sent" => false,
			"message" => $SendMailFailedErrorMessage
		]
  );
  
}

?>
