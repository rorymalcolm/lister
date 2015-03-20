$(".keybutt").click(function(){
    login();
});
function login(){
    var x = $("#keyin").val();
    if (x == "banana"){
        loginmessage("keyword correct. fetching list");
        $(".scorewrap").hide();
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