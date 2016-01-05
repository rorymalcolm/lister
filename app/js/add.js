$(document).ready(function(){
    $("#addbutt").click(function(){
        var url = $("#linkin").val();
        var title = $("#titlein").val();
// Returns successful data submission message when the entered information is stored in database.
        var dataString = 'title='+ title + '&url='+ url;
        if(title==''||url==''){
            if(title!==''){
                addmessage("you need to add a link"); 
            }
            if(url!==''){
                addmessage("you need to add a title");
            }
            if(title==''&&url==''){
                addmessage("you need to add something");
            }
        }
        else{
            var id = ytVidId(url);
            if (id == false){
                addmessage("bad link");
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
        }
        return false;
    });
});