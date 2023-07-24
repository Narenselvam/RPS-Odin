const ele = document.getElementById("startb");

ele.addEventListener("click", myFunction);
var vada=10;

function myFunction() {
  document.getElementById("demo").innerHTML = "hello: "+vada;
}
