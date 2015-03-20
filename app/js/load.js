function loadPosts(){
    var dataString = "playlist_id=0";
    $.ajax({
    type: "GET",
    url: "includes/ajaxloadposts.php",
    data: dataString,
    cache: false,
    success: function(result){
        clearform();
    }
    });
}