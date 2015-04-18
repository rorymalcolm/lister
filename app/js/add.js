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
var addfocustimer;
$("#addlink").click(function(){ 
    $("#add").toggleClass("active");
    if ($("#add").hasClass("active")){
        $("#addlink").text("close");
        addfocustimer = setTimeout(
            function(){
                $("#linkin").focus();
            }, 500);
    }
    else{
        $("#addlink").text("add");
        clearTimeout(addfocustimer);
    }
});
var editfocustimer;
$("#editlink").click(function(){ 
    $("#login").toggleClass("active");
    if ($("#login").hasClass("active")){
        $("#editlink").text("close");
        editfocustimer = setTimeout(
            function(){
                $("#keyin").focus();
            }, 1000);
    }
    else{
        $(".deletebutt").hide();
        $(".upvote").show();
        $(".downvote").show();
        $("#editlink").text("edit");
        clearTimeout(editfocustimer);
    }
});
$("#clearbutt").click(function(){
    //clearposts();
    clearform();
    //loadPosts();
});
function clearform(){
    $('#thumbnail').css('background-image', 'none');
    $(".cc").show();
    $("#linkin").val("");
    $("#titlein").val("");
}
function clearposts(){
    $('#tracklist').empty();
}