let string = document.getElementById('entrada').value.toUpperCase();
let offset = parseInt(document.getElementById('saltos').value);
let button = document.getElementById('botonentrada3');

button.addEventListener('click', event =>{
  window.cipher.encode(
    offset.value,
    string.value
  )
});

//let mensajeDecifrar = document.getElementById('entrada2').value.toUpperCase();
//let saltosDos = parseInt(document.getElementById('saltos2').value);
