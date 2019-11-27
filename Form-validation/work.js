$('document').ready(function () {
	
$("#dob").hide();

$("#spass").hide();


});
function emailval(e) {
if(e.length<5)
{
	$('#eval').html("Please Enter Valid Email ID").addClass("alert");
}

if(e.includes("@")&& e.includes("."))
{
	$('#eval').hide();
}	
else{
$('#eval').html("Please Enter Valid Email ID").addClass("alert");
}


}
function counters(e) {
var c=141-e.length;
// alert(e.length);

if(e.length>=140)
{
	e.value = e.value.substring(0,140);
	$("#texta").attr('disabled', 'disabled'	);
}
else{
$("#count").html(c);	
}
}

function nameval(e) {

if(e.length<5)
{


$('#nameval').html("Please Enter Valid Name");
}	
else{
		$('#nameval').hide();

}


}
function passval(jk) {


if(jk.length<8)
{
		$('#pw').removeClass("is-valid");
$('#pw').addClass("is-invalid");
}	
else{
	$('#pw').removeClass("is-invalid");
	$('#pw').addClass("is-valid");
	$("#spass").slideDown(1000).slideUp(2000);

}


}
function cpassval(e) {
	$("#spass").hide();
var p=$('#pw').val();
if(e.length==0)
{
$('#cpw').addClass("is-invalid");	
}

if(p!=e)
{
		$('#cpw').removeClass("is-valid");
$('#cpw').addClass("is-invalid");
}	
else{
	$('#cpw').removeClass("is-invalid");
	$('#cpw').addClass("is-valid");

}


}



function dateval(e) { 
	var now=new Date();
	var s=now.getFullYear();
	var k=new Date(e);
	var q=k.getFullYear();
	var dif=s-q;
if(dif<18)
{

	  $("#dob").show();
}
	
}

