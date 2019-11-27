function addLi() {


  var newEl = document.createElement('li');

var a=["Apple","Guava","Grapes","Orange","Mango","Banana"];
var n = Math.floor(Math.random()*a.length);
  var position = document.getElementsByTagName('ul')[0];

  newEl.className="list-group-item";
  var lastItem = position.lastChild;
  if(lastItem.textContent!=a[n])
{
  var newText = document.createTextNode(a[n]);
}
else {
  var newText = document.createTextNode(a[n-1]);
}




newEl.appendChild(newText);


position.appendChild(newEl);

}


function remLi() {
  var startItem = document.getElementsByTagName('ul')[0];
  var lastItem = startItem.lastChild;
  startItem.removeChild(lastItem);
}
