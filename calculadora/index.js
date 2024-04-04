function agregar (x){
    document.getElementById("pantalla").value += x
}
/*
function limpiar(){
    document.getElementById("pantalla").value = ""
}
*/
const limpiar = () => document.getElementById("pantalla").value = "";
let contador = document.getElementById('contador')
function resultado (){
    const a = document.getElementById("pantalla");
    const resul = eval(a.value);
        a.value = ""
    
     contador.innerHTML += `<li>El resultado de la operacion realizada anteriormente fue : ${resul} </li>`

          
}

