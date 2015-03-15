var drag_over = function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    $('#dropmessage').show();
};

var drag_leave = function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#dropmessage').hide();
};

var drag_drop = function(e){
    e.stopPropagation();
    e.preventDefault();
    $('#dropmessage').hide();
    var data = e.dataTransfer.getData("text");
    var id = ytVidId(data);
    if (id !== false){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=jsonc',function(data,status,xhr){
            var title = data.data.title;
            $("#titlein").val(title);
        });
        $("#linkin").val(data);
        $(".cc").hide();
        $('#thumbnail').css('background-image', 'url(http://img.youtube.com/vi/'+id+'/0.jpg)');
    } else {
        $('#badlinkmessage').show();
        setTimeout(function(){
            $('#badlinkmessage').hide();
        }, 2000);
    }
};

var dropMask = document.getElementById('dropmessage');

document.addEventListener('dragover', drag_over, false);
dropMask.addEventListener('dragleave', drag_leave, false);
dropMask.addEventListener('drop', drag_drop, false);