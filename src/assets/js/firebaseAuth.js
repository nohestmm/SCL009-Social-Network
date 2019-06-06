//import { templateProject } from "../views/templateProject.js";
import { templateHome } from "../views/templateHome.js";
//import { event } from "../views/templateHome.js";
//import { templateAbout } from "../views/templateAbout.js";

//import { templateForgotPassword } from "../views/templateForgotPassword.js";


//Todas las funciones de registro e inicio de sesión de firebase
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(){
    verifyAccount();
    observer();
  
    
})
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

  firebase.auth().onAuthStateChanged(function(user) {

    if (user) { 
      window.location.hash = '#/project'; 
// User is signed in.
    

    } 
 
    
   else{
// User is signed out.
window.location.hash="";
templateHome();

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
    


  }).catch(function(error) {

  });
}