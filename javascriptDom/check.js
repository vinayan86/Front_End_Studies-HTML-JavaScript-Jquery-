// function checkUsername() {
// var a=document.getElementById('errorMessage');
// var b=document.getElementById('username');
// if(b.value.length<5)
// {
//   a.textContent="username Must be more than 5 characters";
// }
// else {
//     a.textContent=" ";
// }
// }



//this Example


function checkUsername() {
var a=document.getElementById('errorMessage');

if(this.value.length<5)
{
  a.textContent="username Must be more than 5 characters";
}
else {
    a.textContent=" ";
}
}

function setup() {
    var b=document.getElementById('username');
    b.focus();
}

function changeStatus() {
  var a=document.getElementById('succcessMessage');
  a.textContent="Sucessfull Login";
}



function userName() {
  var b=document.getElementById('username');
  var k=b.value;
    var msg=document.getElementById('Message');
  if(k.length>5)
  {

        msg.className="succcessMessage";
        msg.textContent="Username Strong";
  }
  else {
    msg.className="errorMessage";
    msg.textContent="User name must contain 5 letters....";
  }
  var a=document.getElementById('uname');
  a.textContent=k;
}
