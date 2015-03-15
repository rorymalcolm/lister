<?php
$db = new PDO('mysql:host=localhost;dbname=listar;charset=utf8', 'root', '');
try{
    foreach($db->query('SELECT * FROM tracks ORDER BY karma DESC') as $row){
        echo '<li id="'.$row['id'].'" class = "trackwrap">';
        echo '<div class = "scorewrap">';
        echo '<p class = "trackscore">'.$row['karma'].' points</p>';
        echo '<button class = "upvote" type="button">+</button>';
        echo '<button class = "downvote" type="button">-</button>';
        echo '</div>';
        echo '<a  class = "tracklink" href="'.$row['url'].'">'.$row['title'].'</a>';
        echo '</li>';
    }
} 
catch(PDOException $ex) {
    echo "An Error occured!";
    some_logging_function($ex->getMessage());
}
?>