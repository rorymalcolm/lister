//clicking "go"
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
//clicking "add"
var addfocustimer;
$("#addlink").click(function(){ 
    $("#add").toggleClass("active");
    //open add
    if ($("#add").hasClass("active")){
        $("#addlink").text("close");
        addfocustimer = setTimeout(
            function(){
                $("#linkin").focus();
            }, 500);
    }
    //close add
    else{
        clearTimeout(addfocustimer);
        $("#addlink").text("add");
    }
});
function clearform(){
    $('#thumbnail').css('background-image', 'none');
    $(".cc").show();
    $("#linkin").val("");
    $("#titlein").val("");
}
//clicking "edit"
var editfocustimer;
$("#editlink").click(function(){ 
    //open edit
    if (!($("#login").hasClass("active"))){
        $("#login").addClass("active");
        $("#editlink").text("close");
        editfocustimer = setTimeout(
            function(){
                $("#keyin").focus();
            }, 700);
    }
    //close edit
    else{
        clearTimeout(editfocustimer);
        if (datastring !== ""){
            rundelete();
        }
        
        $("#login").removeClass("active");
        setTimeout(function(){
            $("#login").removeClass("loggedin");
        }, 1000);
        $(".deletebutt").hide();
        $(".upvote").show();
        $(".downvote").show();
        $("#editlink").text("edit");
        if ($("#keyin").attr('disabled')){
            loadPosts();
            $("#keyin").removeAttr('disabled');
            $(".keybutt").removeAttr('disabled');
        }
    }
});