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
        getYtData(data, id);
    } else {
        addmessage("bad link");
    }
};
var zone = document.getElementById('add');
var dropMask = document.getElementById('dropmessage');

zone.addEventListener('dragover', drag_over, false);
dropMask.addEventListener('dragleave', drag_leave, false);
dropMask.addEventListener('drop', drag_drop, false);