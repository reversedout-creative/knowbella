<?php
if (!isset($_POST['submit'])) {
  # code...
}

$firstName = $_POST['first'];
$lastName = $_POST['last'];

$to = "alex@lamproslabs.com";

mail($to, $firstName, $lastName);
?>
