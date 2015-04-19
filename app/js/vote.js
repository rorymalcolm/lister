$('#tracklist').on('click','.upvote',function(){
    event.preventDefault();
    var wrapperelement = $(this).closest('.trackwrap');
    var scoreelement = $(this).closest('.scorewrap').children('.trackscore');
    var dataString = 'id=' + wrapperelement.attr("id");
    $.ajax({
        type: "POST",
        url: "includes/upvote.php",
        data: dataString,
        cache: false,
        success: function(result){
            wrapperelement.removeClass("down");
            wrapperelement.addClass("up");
            var scorestring = scoreelement.text();
            var scoreup = getscore(scorestring);
            scoreup++;
            scoreelement.text(scoreup + " points");
        }
    });
    $(this).delay(700).queue(function(){
        wrapperelement.removeClass("up");
        $(this).dequeue();
    });
});
$('#tracklist').on('click','.downvote',function(){
    event.preventDefault();
    var wrapperelement = $(this).closest('.trackwrap');
    var scoreelement = $(this).closest('.scorewrap').children('.trackscore');
    var dataString = 'id=' + wrapperelement.attr("id");
    $.ajax({
        type: "POST",
        url: "includes/downvote.php",
        data: dataString,
        cache: false,
        success: function(result){
            wrapperelement.removeClass("up");
            wrapperelement.addClass("down");
            var scorestring = scoreelement.text();
            var scoredown = getscore(scorestring);
            scoredown--;
            scoreelement.text(scoredown + " points");
        }
    });
    $(this).delay(700).queue(function(){
        wrapperelement.removeClass("down");
        $(this).dequeue();
    });
});
function getscore(scorestring){
    var score = scorestring.split(" ");
    return parseInt(score[0]);
}