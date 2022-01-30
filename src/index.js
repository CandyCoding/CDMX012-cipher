import cipher from './cipher.js';
// variables texto y  offset que ingrese el usuario, además del campo que imprimirá los resultados en pantalla 
let texto = document.getElementById("plainText");
let offset = document.getElementById("offset");
let mensajeFinal = document.getElementById("tuMensajeCodificado");
//Eventos para botones
 document.addEventListener("click",(event)=>{
    //console.log(event.target.id);
         if(event.target.id == "encodeBtn"){
            mensajeFinal.innerHTML= cipher.encode(offset.value,texto.value);      
        }else if  (event.target.id=="decodeBtn"){
            mensajeFinal.innerHTML= cipher.decode(offset.value,texto.value);
        } else if (event.target.id=="resetBtn"){
            mensajeFinal.innerHTML= offset.value="",texto.value="";
        }
})
