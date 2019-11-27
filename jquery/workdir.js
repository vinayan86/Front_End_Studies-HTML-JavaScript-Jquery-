

$(document).ready(function(){

  $( "#add" ).click(function( ) {

var s=$("input:first").val();
if(s.length>1)
{
  $("#menu").append('<li class="list-group-item">'+s+'</li>');
$("input:first").val(" ");
var c=$('#menu li').length;
$("#counter").html("Items in list "+c);
$('.list-group').slideUp(1000).slideDown(1000);
}
else {
    $( "#Error" ).css("color","red").html( "Not valid!" ).show().fadeOut( 2000 );

}


  });
});

$(document).ready(function(){

  $( "#rem" ).click(function( ) {
$("li:last").remove();
var c=$('#menu li').length;
$("#counter").html("Items in list "+c);
$('.list-group').slideUp(1000).slideDown(1000);
  });

 var c=$('#menu li').length;
 $("#counter").html("Items in list "+c);
 $('.list-group').slideUp(1000).slideDown(1000);

});
