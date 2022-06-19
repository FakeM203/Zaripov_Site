<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];


$mail->isSMTP();                                     
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                         
$mail->Username = 'vzd.11@mail.ru'; 
$mail->Password = '9524FMGreat;'
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465; 

$mail->setFrom('sendermailtest123@gmail.com'); 
$mail->addAddress('fakem203@gmail.com');     
$mail->isHTML(true);                                  

$mail->Subject = 'Заявка с cайта';
$mail->Body    = '' .$name . ' оставил заявку<br>Сообщение письма:<br>' .$msg. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
   
} else {
    alert("Successfully sent");
}
?>