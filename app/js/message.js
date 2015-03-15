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