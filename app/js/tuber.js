$(function() {
    var count = 0;
    $("#linkin").bind("paste cut keydown",function(e){
        var element = this;
        setTimeout(function (){
            var data = $(element).val();
            var id = ytVidId(data);
            if (id !== false){
                getYtData(id);
            }
        }, 500);
    })
});
function ytVidId(url) {
    var p = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    return (url.match(p)) ? RegExp.$1 : false;
}
function getYtData(id){
    $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=jsonc',function(data,status,xhr){
        var title = data.data.title;
        $("#titlein").val(title);
    });
    $("#linkin").val(data);
    $(".cc").hide();
    $('#thumbnail').css('background-image', 'url(http://img.youtube.com/vi/'+id+'/0.jpg)');
}