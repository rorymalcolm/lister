<?php
$connection = mysql_connect("localhost", "root", "root");
$db = mysql_select_db("listar", $connection);
$title=$_POST['title'];
$url=$_POST['url'];
$karma=$_POST['karma'];
//Insert query
$query = mysql_query("insert into tracks(title, url) values ('$title', '$url ')");
mysql_close($connection); // Connection Closed
?>