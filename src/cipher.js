//function botonC(){
  //cifrado.style.display="block";
  //}
  window.cipher ={

encode:(mensajeCifrar,saltos)=>{
console.log(saltos);
let mensajeSalida = " ";
//console.log('entrada');
//console.log('saltos');
mensajeCifrar = mensajeCifrar.toUpperCase();
saltos = parseInt(saltos)
for (let i = 0; i < mensajeCifrar.length; i++){
let mensajeEntrada = mensajeCifrar.charCodeAt(i);

if (mensajeEntrada==32|| mensajeEntrada == 165) {
  mensajeSalida+=String.fromCharCode(mensajeEntrada);

  console.log(mensajeSalida);
} else {

//console.log(mensajeEntrada);
let mensajeBueno = (mensajeEntrada-65+saltos)%26+65;
//console.log(mensajeBueno);
mensajeSalida += String.fromCharCode(mensajeBueno);
console.log(mensajeSalida);
 //cifradoRespuesta.style.display="block";

}
}
return mensajeSalida;
},
 decode:(mensajeDecifrar,saltosDos)=>{
  //Llamando del HTML al JS
mensajeDecifrar = mensajeDecifrar.toUpperCase();
saltosDos = parseInt(saltosDos);
mensajeSalidaDos = "";
//Consologueando para ver si me da lo que le pido
//console.log(mensajeDecifrar);
//console.log(saltosDos);
//Este for es para el decifrado
for (var numb = 0; numb < mensajeDecifrar.length; numb++){
//Transformando el mensaje cifrado a ASCII
var mensajePerritos = mensajeDecifrar.charCodeAt(numb);
//Viendo si efectivamente me sale el mensaje en ASCII
//console.log(mensajePerritos);

if (mensajePerritos==32 || mensajePerritos == 165) {
  mensajeSalidaDos+=String.fromCharCode(mensajePerritos);

  //console.log(mensajeSalidaDos);
} else {

// Fórmula para descencriptar
var mensajeBuenoDos = (mensajePerritos-90-saltosDos)%26+90;
console.log(mensajeBuenoDos);
//Transformando el ASCII de nuevo a letras (con el mensaje decifrado)
mensajeSalidaDos += String.fromCharCode(mensajeBuenoDos);
console.log(mensajeSalidaDos);
//Imprimiendo en pantalla
//decifradoRespuesta.style.display= "block";
}
}
return mensajeSalidaDos;
}

};
