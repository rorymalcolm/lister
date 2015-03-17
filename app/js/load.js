function loadPosts(){
    var dataString = "";
    $(document).ready(function(){
    $.ajax({
    type: "GET",
    url: "includes/ajaxtrackpost.php",
    data: dataString,
    cache: false,
    success: function(result){
        clearform();
    }
    });
    return false;
    });
}