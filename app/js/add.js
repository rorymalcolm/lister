$(document).ready(function(){
    $("#addbutt").click(function(){
        var url = $("#linkin").val();
        var title = $("#titlein").val();
// Returns successful data submission message when the entered information is stored in database.
        var dataString = 'title='+ title + '&url='+ url;
        if(title==''||url==''){
            addmessage("please fill in all fields");
        }
        else{
            $.ajax({
                type: "POST",
                url: "includes/ajaxtrackpost.php",
                data: dataString,
                cache: false,
                success: function(result){
                    addmessage("added");
                    clearform();
                    loadPosts();
                }
            });
        }
        return false;
    });
});