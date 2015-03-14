$(function() {
    var count = 0;
    $("#linkin").bind("paste cut keydown",function(e){
        var element = this;
        setTimeout(function (){
            var data = $(element).val();
            var id = ytVidId(data);
            if (id !== false){
                $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=jsonc',function(data,status,xhr){
                    var title = data.data.title;
                    $("#titlein").val(title);
                });
                $("#linkin").val(data);
                $(".cc").hide();
                $('#thumbnail').css('background-image', 'url(http://img.youtube.com/vi/'+id+'/0.jpg)');
            }
        }, 500);
    })
});
function ytVidId(url) {
    var p = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    return (url.match(p)) ? RegExp.$1 : false;
}
function youtubeLinkParser(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11){
        return match[2];
    } else {
        return null;
    }
}