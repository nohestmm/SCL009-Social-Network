<<<<<<< HEAD
import { templateProject } from "../views/templateProject.js";//importo  la const templeProject de la carpeta templateProject 
import { templateHome } from "../views/templateHome.js"; //importo la const templateHome de la carpeta templateHome.js
//import { templateAbout } from "../views/templateAbout.js";
=======
import { templateProject } from "../views/templateProject.js";
import { templateHome } from "../views/templateHome.js";
import { event } from "../views/templateHome.js";
import { templateAbout } from "../views/templateAbout.js";
>>>>>>> f311bdcbc317a9059ada149f0aa51b919e60012e

//import { templateForgotPassword } from "../views/templateForgotPassword.js";


//Todas las funciones de registro e inicio de sesión de firebase
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(){
<<<<<<< HEAD
    verifyAccount()//llamo a la funcion de verificacion de correo
    observer()//llamo a la funcion observar
  // firebase.auth (autentiucación para iniciar sesion)
  //createUserWithEmailAndPassword es para crear la cuenta... despues que el ususario relleno el formulario
  //.then (promise)
=======
    verifyAccount();
    observer();
  
>>>>>>> f311bdcbc317a9059ada149f0aa51b919e60012e
    
})
//catch es cuando hay error
.catch(function(error) {
// Handle Errors here.
let errorCode = error.code;
let errorMessage = error.message;

templateHome();
  window.location.hash = '#/home';

});

export const login = (mail, pass) => {firebase.auth().signInWithEmailAndPassword(mail, pass)
.then(() => { 
  observer();
  //document.getElementById("error-message").innerHTML= "usuario registrado ";
//templateProject()
  window.location.hash = '#/project'; 
})
.catch(function(error) {
  //templateHome();
 
  //document.getElementById("error-message").innerHTML= "usuario o contraseña inválida";
 //window.location.hash = '#/home';

    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
   // errorLogin();
    
    console.log(errorCode)                                                                                                                                                          
    console.log(errorMessage)
  
   
  });
}

export const signOut = () => {firebase.auth().signOut()
.then(function() {
  templateHome();
  //document.getElementById("error-message").innerHTML= "Vuelve pronto ÑAÑAÑA";
 window.location.hash = '#/home';
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

}

//Observer
export const observer = () => {
<<<<<<< HEAD
  firebase.auth().onAuthStateChanged(function(user) {
=======

  firebase.auth().onAuthStateChanged(function(user) {

>>>>>>> f311bdcbc317a9059ada149f0aa51b919e60012e
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

<<<<<<< HEAD
    } else {
      // User is signed out.
      templateHome()
      window.location.hash = '#/home';
      
    }
  });

} 
=======
    } 
 
    
   else{
// User is signed out.
window.location.hash="";
templateHome();

}


    
      
     
   
      
  });
}


>>>>>>> f311bdcbc317a9059ada149f0aa51b919e60012e


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
<<<<<<< HEAD
    // Email sent.
  }).catch(function(error) {
    // An error happened.
=======
    


  }).catch(function(error) {

>>>>>>> f311bdcbc317a9059ada149f0aa51b919e60012e
  });
}