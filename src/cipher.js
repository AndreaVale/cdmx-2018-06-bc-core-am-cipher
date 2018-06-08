function cifrar(cifrar){
let mensajeSalida = "";
let mensajeCifrar = document.getElementById('entrada').value.toUpperCase();
let saltos = parseInt(document.getElementById('saltos').value);
//console.log('entrada');
//console.log('saltos');
for (let i = 0; i < mensajeCifrar.length; i++){
let mensajeEntrada = mensajeCifrar.charCodeAt(i);
//console.log(mensajeEntrada);
let mensajeBueno = (mensajeEntrada-65+saltos)%26+65;
mensajeSalida += String.fromCharCode(mensajeBueno);
console.log(mensajeSalida);
/*let mensajeSalida = String.fromCharCode(mensajeEntrada);
console.log(mensajeSalida);
let mensajeBueno = (mensajeSalida-65+saltos)%26+65;
console.log(mensajeBueno);*/
document.getElementById("resultado").innerHTML=mensajeSalida;
}

}
