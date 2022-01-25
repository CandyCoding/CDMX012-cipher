import cipher from './cipher.js';
// variables de botón, texto y  offset que ingrese el usuario, además del campo que imprimirá los resultados en pantalla 
let btnCifrar = document.getElementById("encodeBtn");
let btnDescifrar = document.getElementById("decodeBnt");
let texto = document.getElementById("plainText");
let offset = document.getElementById("offset");
let mensajeFinal = document.getElementById("tuMensajeCodificado");

// Evento para el botón codificar. 
btnCifrar.addEventListener("click",(event) =>{
    event.preventDefault();
    mensajeFinal.innerHTML= cipher.encode(offset.value,texto.value); 
});
//Evento para el botón decodificar.
btnDescifrar = addEventListener("dblclick",(event) =>{
    event.preventDefault(btnDescifrar);
    mensajeFinal.innerHTML= cipher.decode(offset.value,texto.value); 
});
