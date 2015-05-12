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
var datastring = [];
$('#tracklist').on('click','.deletebutt',function(){
    if ($(this).closest('.trackwrap').hasClass("down")){
        $(this).closest('.trackwrap').removeClass("down");
        $(this).text("delete");

        var toremove = ('id=' + $(this).closest('.trackwrap').attr("id"));
        for(var i = datastring.length - 1; i >= 0; i--) {
            if(datastring[i] === toremove) {
                datastring.splice(i, 1);
            }
        }
        console.log(datastring.toString());
        return;
    }
    if (!($(this).closest('.trackwrap').hasClass("down"))){
        $(this).closest('.trackwrap').addClass("down");
        $(this).text("cancel");
        datastring.push('id=' + $(this).closest('.trackwrap').attr("id"));
        console.log(datastring.toString());
        return;
    }
});
function rundelete(){
    for(var i = datastring.length - 1; i >= 0; i--) {
        ajaxdelete(datastring[i]);
    }
}
function ajaxdelete(id){
    console.log(id);
    $.ajax({
        type: "POST",
        url: "includes/delete.php",
        data: id,
        cache: false,
        success: function (result) {
            datastring = [];
        }
    });
}