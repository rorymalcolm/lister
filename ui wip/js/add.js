$("#addlink").click(function(){ 
    $("#add").toggleClass("active");
    if ($("#add").hasClass("active")){
        $("#addlink").text("close");
    }
    else{
        $("#addlink").text("add");
    }
});
$("#editlink").click(function(){ 
    $("#login").toggleClass("active");
    if ($("#login").hasClass("active")){
        $("#editlink").text("close");
    }
    else{
        $("#editlink").text("edit");
    }
});
$("#addbutt").hover(function (){
    $('#thumbnail').css('background-image', 'url()');
    $(".cc").show();
    $("#linkin").val("");
    $("#titlein").val("");
});