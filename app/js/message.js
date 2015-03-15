//will be extended to display actual nice looking
//messages. just using alert() as a temp thing
//dont sweat
function message(text){
    alert(text);
}
function loginmessage(text){
    $('.loginmessage').text(text);
    $('.loginmessage').show();
    setTimeout(function(){
        $('.loginmessage').hide();
    }, 2000);
}
function addmessage(text){
    $('.addmessage').text(text);
    $('.addmessage').show();
    setTimeout(function(){
        $('.addmessage').hide();
    }, 2000);
}

$(".upvote").click(function(){
    addmessage("fuck you too");
});
$(".downvote").click(function(){
    loginmessage("fuck you");
});
