$(".keybutt").click(function(){
    login();
});
function login(){
    var x = $("#keyin").val();
    if (x == "banana"){
        $("#keyin").attr({'disabled': 'disabled'});
        $(".keybutt").attr({'disabled': 'disabled'});
        loginmessage("keyword correct. fetching list");
        $(".deletebutt").show();
        $(".upvote").hide();
        $(".downvote").hide();
        $("#keyin").val("");
    }
    else {
        if (x == ""){
            loginmessage("you need to enter something");
        }
        else{
            loginmessage("wrong keyword");
        }
    }
}
$('#tracklist').on('click','.deletebutt',function(){
    $(this).closest('.trackwrap').addClass("down");
    var dataString = 'id=' + $(this).closest('.trackwrap').attr("id");
    $.ajax({
        type: "POST",
        url: "includes/delete.php",
        data: dataString,
        cache: false,
        success: function(result){
        }
    });
});