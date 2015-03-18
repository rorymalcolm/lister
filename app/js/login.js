$(".keybutt").click(function(){
    login();
});
function login(){
    var x = $("#keyin").val();
    if (x == "banana"){
        loginmessage("keyword correct. fetching list");
        $(".scorewrap").hide();
    }
    else {
        loginmessage("wrong keyword");
    }
} 