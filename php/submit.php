<?php
ini_set('display_errors',1);  error_reporting(E_ALL);
isset($_POST['valid']) or die("NO ACCESS!");
include 'PHPmailer/class.phpmailer.php';

function main(){
	if($_POST['name'] && $_POST['email']){
		foreach($_POST as $key => $value){
			$$key = htmlspecialchars(trim($value));
		}
	} else {
		echo "Something went wrong, refresh your page and try again.";
	}
	saveToCSV($name, $phone, $company, $email, $title, $zip_code);
	mailer($name, $phone, $company, $email, $title, $zip_code);
}

function mailer($name, $phone, $company, $email, $title, $zip_code){
	$to = "grant.w.waldrop@ftr.com";
	//$to = "vince.omega@gmail.com"; 
	$CC = array('stauffer@d4creative.com', 'stanfield@d4creative.com', 'fox@d4creative.com');
	$BBC = array();
	$link = "http://$_SERVER[SERVER_NAME]/erate/docs/form_results.csv";
	$upload = "../docs/form_results.csv";
	$mail = new PHPMailer();
	$mail->From = "noreply@dev.d4creative.com";
	$mail->FromName = "Frontier Erate Form";
	$mail->AddAddress($to);
	foreach($CC as $idx => $person ){ $mail->AddCC($person); }
	$mail->Subject = "Education Form Lead"." | Frontier.com";
	$mail->AddAttachment($upload, 'Submissions.csv');
	$body = "Name: ".$name."<br>";
	$body .= "Email: ".$email."<br>";
	$body .= "Phone: ".$phone."<br>";
	$body .= "Company: ".$company."<br>";
	$body .= "Title: ".$title."<br>";
	$body .= "Zip Code: ".$zip_code."<br>";
	$body .= "Link to file : ".$link." ";
	$mail->Body = $mail->MsgHTML($body);

	if(!$mail->Send()){
		echo 'Message not sent';
		echo 'Mailer error: '.$mail->ErrorInfo;
	}
}

function saveToCSV($name, $phone, $company, $email, $title, $zip_code){
	$record =  (string)$name.', '.(string)$phone.', '.(string)$company.', '.(string)$email.', '.(string)$title.', '.(string)$zip_code."\n";
	$file = fopen('../docs/form_results.csv','a+'); 
	if ($file){
		fwrite($file, $record);
		fclose($file);
	}
}

main();
?>