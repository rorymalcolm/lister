<?php
$connection = mysql_connect("localhost", "root", "");
$db = mysql_select_db("listar", $connection);
$playlistref=$_GET['playlist_id'];
//Insert query  
mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM user WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);
while($row = mysqli_fetch_array($result)) {
}
mysql_close($connection);
?>