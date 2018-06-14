function botonC(){
  cifrado.style.display="block";
  }
function cifrar(){
let mensajeSalida = " ";
let mensajeCifrar = document.getElementById('entrada').value.toUpperCase();<--van en el index.js
let saltos = parseInt(document.getElementById('saltos').value); <--va en el index.js
//console.log('entrada');
//console.log('saltos');
for (let i = 0; i < mensajeCifrar.length; i++){
let mensajeEntrada = mensajeCifrar.charCodeAt(i);

if (mensajeEntrada==32) {
  mensajeSalida+=String.fromCharCode(mensajeEntrada);
  document.getElementById('resultado').innerHTML = mensajeSalida;
  console.log(mensajeSalida);
} else {


//console.log(mensajeEntrada);
let mensajeBueno = (mensajeEntrada-65+saltos)%26+65;
//console.log(mensajeBueno);
mensajeSalida += String.fromCharCode(mensajeBueno);
console.log(mensajeSalida);
/*let mensajeSalida = String.fromCharCode(mensajeEntrada);
console.log(mensajeSalida);
let mensajeBueno = (mensajeSalida-65+saltos)%26+65;
console.log(mensajeBueno);*/
 cifradoRespuesta.style.display="block";
document.getElementById("resultado").innerHTML=mensajeSalida;
}
}
}
//toda la función del decifrado
function botonD(){
  decifrado.style.display="block";}
function cipher(decifrar){
  //Llamando del HTML al JS
let mensajeDecifrar = document.getElementById('entrada2').value.toUpperCase();
let saltosDos = parseInt(document.getElementById('saltos2').value);
let mensajeSalidaDos = "";
//Consologueando para ver si me da lo que le pido
//console.log(mensajeDecifrar);
//console.log(saltosDos);
//Este for es para el decifrado
for (var numb = 0; numb < mensajeDecifrar.length; numb++){
//Transformando el mensaje cifrado a ASCII
var mensajePerritos = mensajeDecifrar.charCodeAt(numb);
//Viendo si efectivamente me sale el mensaje en ASCII
//console.log(mensajePerritos);

if (mensajePerritos==32) {
  mensajeSalidaDos+=String.fromCharCode(mensajePerritos);
  document.getElementById('resultado-dos').innerHTML = mensajeSalidaDos;
  console.log(mensajeSalidaDos);
} else {

// Fórmula para descencriptar
var mensajeBuenoDos = (mensajePerritos-90-saltosDos)%26+90;
console.log(mensajeBuenoDos);
//Transformando el ASCII de nuevo a letras (con el mensaje decifrado)
mensajeSalidaDos += String.fromCharCode(mensajeBuenoDos);
console.log(mensajeSalidaDos);
//Imprimiendo en pantalla
decifradoRespuesta.style.display= "block";
document.getElementById('resultado-dos').innerHTML=mensajeSalidaDos;
}
}
}
