$("#golink").click(function(){
    $('#loadertext').text("generating playlist");
    $("#go").addClass("active");
    $("#loader").addClass("loading");
    $("#loaderwrap").removeClass("ready");
    $("#loaderwrap").removeClass("failed");
    clearform();
    handleAPILoaded();
    createPlaylist();
        $(this).delay(2000).queue(function(){
            $("#loader").removeClass("loading");
            $("#loaderwrap").addClass("ready");
            $('#loadertext').text("ready. click to play");
            $(this).dequeue();
        });
        $(this).delay(2000).queue(function(){
            $("#loader").removeClass("loading");
            $("#loaderwrap").removeClass("ready");
            $("#loaderwrap").addClass("failed");
            $('#loadertext').text("error... please retry");
            $(this).dequeue();
        });
});
$("#addlink").click(function(){ 
    $("#add").toggleClass("active");
    if ($("#add").hasClass("active")){
        $("#addlink").text("close");
        $("#linkin").focus();
    }
    else{
        $("#addlink").text("add");
    }
});
$("#editlink").click(function(){ 
    $("#login").toggleClass("active");
    if ($("#login").hasClass("active")){
        $("#editlink").text("close");
        $("#keyin").focus();
    }
    else{
        $(".scorewrap").show();
        $("#editlink").text("edit");
    }
});
$("#clearbutt").click(function(){
    clearposts();
    clearform();
    loadPosts();
});
function clearform(){
    $('#thumbnail').css('background-image', 'none');
    $(".cc").show();
    $("#linkin").val("");
    $("#titlein").val("");
}