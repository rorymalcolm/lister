$(".keybutt").click(function(){
    var x = $("#keyin").val();
    if (x == "banana"){
        loginmessage("keyword correct. fetching list");
    }
    else {
        loginmessage("wrong keyword");
    }
});