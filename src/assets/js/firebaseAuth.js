/*Todas las funciones que autoricen el inicio/cierre de sesión*/
/*
//Registro de usuario
  export const registerUser = (email, password) => {
      
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
      
//Inicio de sesión con correo electrónico y contraseña
  export const signWithMail = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
       
  }
  //Cierre de sesión
  export const logout = () => {
return firebase.auth().signOut()
  } 
*/
//Global de firebase
/*const firebaseConfig = {
    apiKey: "AIzaSyA7ctYRP7x6WBe_PwZCUnYYe2ahkL7b6l4",
    authDomain: "nomorecommunity-2cfdd.firebaseapp.com",
    databaseURL: "https://nomorecommunity-2cfdd.firebaseio.com",
    projectId: "nomorecommunity-2cfdd",
    storageBucket: "nomorecommunity-2cfdd.appspot.com",
    messagingSenderId: "108376578479",
    appId: "1:108376578479:web:da6682d105a33503"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
/*import { registerUser } from './assets/js/auth'
import { signWithMail } from './assets/js/auth'
import { logout } from './assets/js/auth'*/

//let result="";

  /*Btn Register*/
/*let btnRegister= document.getElementById("register");
    btnRegister.addEventListener("click", () => {
        let emailOne = document.getElementById("email").value;
        let passwordOne = document.getElementById("password").value;
       registerUser(emailOne, passwordOne)
    firebase.auth().createUserWithEmailAndPassword(emailOne, passwordOne).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
           
          });     
         
        })
  
  /*Btn Sign In*/
  /*let btnSignIn= document.getElementById("sign-in");
    btnSignIn.addEventListener("click", () => {
        let emailTwo = document.getElementById("email2").value;
        let passwordTwo = document.getElementById("password2").value;
       signWithMail(emailTwo, passwordTwo);
    firebase.auth().signInWithEmailAndPassword(emailTwo, passwordTwo).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode)                                                                                                                                                          
            console.log(errorMessage)
            // ...
          });
         
          });  
    /*Observador de inicio de sesión*/
/*function observer() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         
            //alert("existe este user")
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
         //alert("NO existe este user")
        }
      });
}
observer();
/*Btn Logout*/
/*let btnSignOut = document.getElementById("sign-out");
btnSignOut.addEventListener("Click", () => {
    logout();
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
})*/