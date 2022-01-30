const cipher = {
encode : (offset,texto) =>{
    if(offset == 0 || texto=="") // limitamos el funcionamiento de nuestra función si se busca invocar con un argumento erroneo.
        {   alert("Sigue la primera condición o no podré ayudarte 🙃")
            throw new TypeError("No se ingreso texto o dezplazamiento ");
        }
    else {if (offset == null|| texto == 0)
        {   alert("Sigue la primera condición o no podré ayudarte 🙃 ")
            throw new TypeError("Ingresa un texto y desplazamiento para cifrar");}
    else {
    let codedMsj= ""; // string vacía que contendra los resultados de nuestra fórmula. 
    for (let i = 0; i < texto.length; i++) { // el ciclo inicia revisando todas las letras 
            let plainLetters = texto.charAt(i);
        //sin esto sólo lee la primera letra del string y le aplica la formula a todo el string pero con el primer valor.
            let letraAscii = texto.charCodeAt(i);
        //cambiando de alfabeto latino a Ascii
                if ((letraAscii >= 65) && (letraAscii<=90)) { // parametro para que realice la formula con mayúsculas .
                 plainLetters= String.fromCharCode((letraAscii - 65 + parseInt(offset))%26+65);
                } // obtenemos el string en alfabeto latino derivado del resultado de la fórmula Mich
         else if ((letraAscii >= 97) && (letraAscii<=122)){ //parametro para que realice la fórmula con minúsculas.
                plainLetters= String.fromCharCode((letraAscii - 97 + parseInt(offset))%26+97);
         }
    codedMsj += plainLetters; //hacemos una concatenación en el string vacía 
    }
    return codedMsj; //cortamos el proceso del ciclo 
    // ya por fin funcionó ya no le muevas porfi !!!! 
        }
    }
}, 
    decode : (offset,texto) => {
        if(offset == 0 || texto=="")
            {  alert("Sigue la primera condición o no podré ayudarte 🙃")
                throw new TypeError("Ingresa un texto y desplazamiento para descifrar");}
        else{
                if (offset== null|| texto== 0)
             {   alert("Sigue la primera condición o no podré ayudarte 🙃")
                throw new TypeError("Ingresa un texto y desplazamento para descifrar")}

        let toDecodeMsj = "";
        for (let i = 0; i < texto.length; i ++) {       
                let codedLetters = texto.charAt(i);
                let letraAscii = texto.charCodeAt(i);
                    if ((letraAscii >= 65 ) && (letraAscii <= 90)){
                    codedLetters = String.fromCharCode((letraAscii- 90 - parseInt(offset))%26+90);
                    }
                    else if ((letraAscii >= 97) && (letraAscii <= 122)) {
                    codedLetters = String.fromCharCode((letraAscii - 122 - parseInt(offset))%26+122);
                    }
            toDecodeMsj += codedLetters;
         }
        return toDecodeMsj;
    }
// ya tampoco le muevas a esto!!! 
    }
};
export default cipher;
