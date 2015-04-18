<?php
$db = new PDO('mysql:host=localhost;dbname=listar;charset=utf8', 'root', 'root');
$id=$_POST['id'];
//Insert query
$sql = "delete from tracks where id = ?";
$q=$db->prepare($sql);
$q->execute(array($id));
?>