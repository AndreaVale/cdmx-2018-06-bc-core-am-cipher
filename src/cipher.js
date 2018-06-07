window.cipher = {
};

const cifrar= () => {
  let mensajeACifrar = document.getElementById("mensaje-cifrar").value;
  //document.getElementById("mensaje-cifrado").innerHTML = mensajeACifrar;
  for (let numb = 0; numb<mensajeACifrar.lenght; numb++){
  let menCifrado = mensajeACifrar.chartCodeAt(numb);
  let menChingon = (mensajeACifrar-65+33)%menCifrado+65;
  document.getElementById("mensaje-cifrado").innerHTML = menChingon;

  }
}
