var focustimer;
$("#addlink").click(function(){ 
    $("#add").toggleClass("active");
    if ($("#add").hasClass("active")){
        $("#addlink").text("close");
        focustimer = setTimeout(
            function(){
                $("#linkin").focus();
            }, 500);
    }
    else{
        $("#addlink").text("add");
        clearTimeout(focustimer);
    }
});