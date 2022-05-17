<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  $subject = "=?utf-8?B?".base64_encode("Заявка с сайта")."?=";
  $headers = "From: Blanchard\r\nReply-to: none\r\nContent-type: text/html; charset=utf-8\r\n";

  $success = mail("just_v@inbox.ru", $subject, $phone, $name, $headers);
  echo $success;
?>
