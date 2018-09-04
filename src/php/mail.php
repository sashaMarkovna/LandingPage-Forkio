<?php

$recepient = "sshmrkvn@gmail.com";
$siteName = "Site Name";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Name: $name \nPhone: $phone \nEmail: $email";
$pageTitle = "New request from \"$siteName\" ";

mail($recepient, $pageTitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");