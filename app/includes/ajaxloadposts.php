<?php
$playlist_id = 0;
<<<<<<< HEAD
$db = new PDO('mysql:host=localhost;dbname=listar;charset=utf8', 'root', '');
=======
if($playlist_id == NULL){
    $playlist_id = 0;
}
$db = new PDO('mysql:host=localhost;dbname=listar;charset=utf8', 'root', 'root');
>>>>>>> 6b4675577aab133cb53b88e4eeca9edc432b809a
try{
    foreach($db->query('SELECT * FROM tracks WHERE playlist_id = '.$playlist_id.' ORDER BY karma DESC') as $row){
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