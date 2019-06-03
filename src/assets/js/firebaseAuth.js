import { templateProject } from "../views/templateProject.js";
import { templateHome } from "../views/templateHome.js";
import { templateAbout } from "../views/templateAbout.js";


//Todas las funciones de registro e inicio de sesión de firebase
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(){
    verifyAccount()
    observer()
  
    
})
.catch(function(error) {
// Handle Errors here.
let errorCode = error.code;
let errorMessage = error.message;
if (errorCode == 'auth/weak-password') { //error si la contraseña es débil
templateAbout();
document.getElementById("password-error").innerHTML= "Contraseña mayor a 6 caracteres";
window.location.hash = '#/about';

} else {
  templateHome()
  window.location.hash = '#/home';

console.log(errorMessage);
}
//console.log(errorCode);

});

export const login = (mail, pass) => firebase.auth().signInWithEmailAndPassword(mail, pass)
.then(() => { 
  document.getElementById("error-message").innerHTML= "usuario registrado ";
  templateProject()
  window.location.hash = '#/project'; })
.catch(function(error) {
  templateHome()
  document.getElementById("error-message").innerHTML= "usuario o contraseña inválida";
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
  document.getElementById("error-message").innerHTML= "Vuelve pronto ÑAÑAÑA";
 window.location.hash = '#/home';
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

//Observer
const observer = () => firebase.auth().onAuthStateChanged(function(user) {
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
          
        }
      });

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
