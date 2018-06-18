// Variables de Cifrado
let mensajeCifrar = document.getElementById('entrada');
let saltos = document.getElementById('saltos');
let boton = document.getElementById('botonentrada');
let resultado = document.getElementById('resultado');
//variables de Decifrado
let mensajeDecifrar = document.getElementById('entrada2');
let saltosDos = document.getElementById('saltos2');
let boton2 = document.getElementById('boton-entrada2');
let resultado2 = document.getElementById('resultado-dos');
let compartir = document.getElementById('compartir');
boton.addEventListener("click", evento => {
resultado.innerHTML= window.cipher.encode(
    mensajeCifrar.value,
    saltos.value,

  )
  compartir.style.display = 'block';
});
boton2.addEventListener("click", evento => {
resultado2.innerHTML= window.cipher.decode(
    mensajeDecifrar.value,
    saltosDos.value
  )
  compartir.style.display = 'block';
});
