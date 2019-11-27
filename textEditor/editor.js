
function compile()
{
var h=document.getElementById('htmledit');
var c=document.getElementById('cssedit');
var j=document.getElementById('jsedit');
var code=document.getElementById('frame').contentWindow.document;
console.log(code);
document.body.onkeyup = function(){
  code.open();
     code.writeln(h.value+"<style>"+c.value+"</style>"+"<script>"+j.value+"</script>");
     code.close();
};
};
compile();
