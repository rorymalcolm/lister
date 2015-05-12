$( document ).ready(function() {
    loadPosts();
});
function loadPosts(){
    $.ajax({
        url: "includes/ajaxloadposts.php",
        cache: false,
        type: "GET",
        dataType: "html",
        success: function (data) {
            clearposts();
            $('#tracklist').append(data);
        },
    });
}
function clearposts(){
    $('#tracklist').empty();
}