<?php
$connection = mysql_connect("localhost", "root", "");
$db = mysql_select_db("listar", $connection);
$id=$_POST['id'];
//Insert query
$query = mysql_query("UPDATE tracks SET karma = karma - 1 WHERE id = ".$id);
mysql_close($connection); // Connection Closed
?>