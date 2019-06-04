import { templateProject } from "../views/templateProject.js";//importo  la const templeProject de la carpeta templateProject 
import { templateHome } from "../views/templateHome.js"; //importo la const templateHome de la carpeta templateHome.js
//import { templateAbout } from "../views/templateAbout.js";


//Todas las funciones de registro e inicio de sesión de firebase
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(){
    verifyAccount()//llamo a la funcion de verificacion de correo
    observer()//llamo a la funcion observar
  // firebase.auth (autentiucación para iniciar sesion)
  //createUserWithEmailAndPassword es para crear la cuenta... despues que el ususario relleno el formulario
  //.then (promise)
    
})
//catch es cuando hay error
.catch(function(error) {
// Handle Errors here.
let errorCode = error.code;
let errorMessage = error.message;

templateHome()
  window.location.hash = '#/home';
//llamo al hash home
});

export const login = (mail, pass) => firebase.auth().signInWithEmailAndPassword(mail, pass)
//signInWithEmailAndPassword para ingresar con ya una cuenta creada
.then(() => { 
  observer();//llamo al observador
  //document.getElementById("error-message").innerHTML= "usuario registrado ";
  templateProject()//llamo al template project
  window.location.hash = '#/project'; })
.catch(function(error) {
  templateHome()
  //document.getElementById("error-message").innerHTML= "usuario o contraseña inválida";
 window.location.hash = '#/home';

    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode)                                                                                                                                                          
    console.log(errorMessage)
  
    // ...
  });


export const signOut = () => firebase.auth().signOut()
.then(function() {
  templateHome()
  //document.getElementById("error-message").innerHTML= "Vuelve pronto ÑAÑAÑA";
 window.location.hash = '#/home';
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

//Observer
export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) { 
// User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...

    } else {
      // User is signed out.
      templateHome()
      window.location.hash = '#/home';
      
    }
  });

} 


const verifyAccount = () => { //envía correo de verificación al user, funcionando OK
let user= firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
    //alert("revisa tu bandeja de entrada")
  // Email sent.
}).catch(function(error) {
  // An error happened.
 // alert("ya estás registrado")
});
}
//export const logGoogle
//export const logFacebook

export const resetPassword = (email) => {
  let auth = firebase.auth();
  let emailAddress = email;
  
  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
}