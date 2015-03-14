$(".keybutt").click(function(){
    $('#login').removeClass("up");
    $('#login').removeClass("down");
    $('#login').addClass("waiting");
    $(this).delay(2000).queue(function(){
        $('#login').removeClass("waiting");
        $(this).dequeue();
    });
    var x = $("#keyin").val();
    if (x == "banana"){
        $('#login').removeClass("down");
        $('#login').removeClass("middle");
        $('#login').addClass("up");
        $(this).delay(2000).queue(function(){
            $('#login').removeClass("up");
            $('#login').addClass("success");
            $('#loginmask').addClass("success");
            $(this).dequeue();
        });
        $(this).delay(2000).queue(function(){
            $("#loginmask").hide();
            $(this).dequeue();
        });
    }
    else {
        $('#login').removeClass("up");
        $('#login').removeClass("middle");
        $('#login').addClass("down");
        $(this).delay(2000).queue(function(){
            $('#login').removeClass("down");
            $(this).dequeue();
        });
    }
});