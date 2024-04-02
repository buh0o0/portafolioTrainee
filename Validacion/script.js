
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBm3CE2pRjvCHOrmsS2c_zH1zJYccWF7S4",
    authDomain: "datosform-f7aea.firebaseapp.com",
    projectId: "datosform-f7aea",
    storageBucket: "datosform-f7aea.appspot.com",
    messagingSenderId: "986702266712",
    appId: "1:986702266712:web:4f4395cbae73259b6b252d",
    measurementId: "G-HSL8PSSK50"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();







document.getElementById('formulario').addEventListener('submit', (elem) => {
    elem.preventDefault()

    let Nombre = document.getElementById('name')
    let NombrErr = document.getElementById('nameError')


if(Nombre.value.trim() === ""){
    NombrErr.textContent='introduzca un nombre , pendejo'
    NombrErr.classList.add(`error-message`)
}else{
    NombrErr.textContent= ''
    NombrErr.classList.remove('error-message')
}



let Email = document.getElementById('email').value
let ErrEmail = document.getElementById(`emailError`)///\\\\\
let Pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

if (!Pattern.test(Email)){
    ErrEmail.textContent='introduzca un correo correcto pedejo el'
    ErrEmail.classList.add(`error-message`)
}else{
    ErrEmail.textContent=''
    ErrEmail.classList.remove('error-message')
}

let contrEntrada = document.getElementById('password')
let contrErr= document.getElementById('passwordError')
let contrPatt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
if(!contrPatt.test(contrEntrada.value)){
    contrErr.textContent='introduzca una contraseña  de minimo 8 digitos con numeros, letras mayusculas,minusculas y minimo un caracter especial '
    contrErr.classList.add(`error-message`)
}else {
    contrErr.textContent=''
    contrErr.classList.remove(`error-message`)
}

//


if(!NombrErr.textContent && !ErrEmail.textContent && !contrErr.textContent){
///backend reciba la inf
            db.collection("users").add({
                nombre: Nombre.value,
                mail: Email.value,
                password: contrEntrada.value
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });



            alert(`se envio  correctamente`)
            document.getElementById('formulario').reset();
}


})



    



