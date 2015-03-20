$(".upvote").click(function(){
    event.preventDefault();
    $(this).closest('.trackwrap').removeClass("down");
    $(this).closest('.trackwrap').addClass("up");
    var dataString = 'id=' + $(this).closest('.trackwrap').attr("id");
    $.ajax({
        type: "POST",
        url: "includes/upvote.php",
        data: dataString,
        cache: false,
        success: function(result){
        }
    });
    loadPosts();
    $(this).delay(700).queue(function(){
        $(this).closest('.trackwrap').removeClass("up");
        $(this).dequeue();
    });
});
$(".downvote").click(function(){
    event.preventDefault();
    $(this).closest('.trackwrap').removeClass("up");
    $(this).closest('.trackwrap').addClass("down");
    var dataString = 'id=' + $(this).closest('.trackwrap').attr("id");
    $.ajax({
        type: "POST",
        url: "includes/downvote.php",
        data: dataString,
        cache: false,
        success: function(result){
        }
    });
    loadPost();
    $(this).delay(700).queue(function(){
        $(this).closest('.trackwrap').removeClass("down");
        $(this).dequeue();
    });
});