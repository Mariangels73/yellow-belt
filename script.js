var imagenNormal= document.querySelector("#imagenes");
var cookies= document.querySelector("#btnCookies");
function carAlert(){
    alert("Car is Empty");
}
function cambio (){
imagenNormal.src = "img/succulents-2.jpg";
console.log("hola");
}
function normal (){
    imagenNormal.src = "img/succulents-1.jpg"
    console.log("hola");
}
function btn(){
    cookies.remove();
}