<?php
$connection = mysql_connect("localhost", "root", "");
$db = mysql_select_db("listar", $connection);
$title=$_POST['title'];
$url=$_POST['url'];
$karma=$_POST['karma'];
//Insert query
$query = mysql_query("insert into tracks(title, url) values ('$title', '$url ')");
echo "Form Submitted Succesfully";
mysql_close($connection); // Connection Closed
?>
