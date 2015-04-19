function clearposts(){
    $('#tracklist').empty();
}
function loadPosts(){
    $("#tracklist").load("includes/ajaxloadposts.php");
}