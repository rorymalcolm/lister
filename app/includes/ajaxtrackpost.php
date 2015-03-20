<?php
$title=$_POST['title'];
$url=$_POST['url'];
$karma=$_POST['karma'];
$db = new PDO('mysql:host=localhost;dbname=listar;charset=utf8', 'root', 'root');
try{
    $db->query("insert into tracks(title, url) values ('$title', '$url ')");
}
catch(PDOException $ex) {
    echo "An Error occured!";
    some_logging_function($ex->getMessage());
}
?>