<?php
$db = new PDO('mysql:host=localhost;dbname=listar;charset=utf8', 'root', '');
$id=$_POST['id'];
//Insert query
$sql = "DELETE FROM `listar`.`tracks` WHERE `tracks`.`id` = ?";
$q=$db->prepare($sql);
$q->execute(array($id));
?>