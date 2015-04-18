<?php
$db = new PDO('mysql:host=localhost;dbname=listar;charset=utf8', 'root', 'root');
$id=$_POST['id'];
//Insert query
$sql = "UPDATE tracks SET karma = karma - 1 WHERE id = ?";
$q=$db->prepare($sql);
$q->execute(array($id));
?>