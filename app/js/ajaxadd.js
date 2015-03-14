$(document).ready(function(){
$("#addbutt").click(function(){
var url = $("#linkin").val();
var title = $("#titlein").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'title='+ title + '&url='+ url;
if(title==''||url=='')
{
alert("Please Fill All Fields");
}
else
{
$.ajax({
type: "POST",
url: "ajaxtrackpost.php",
data: dataString,
cache: false,
success: function(result){
alert(result);
}
});
}
return false;
});
});
