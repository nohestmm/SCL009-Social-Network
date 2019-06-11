import { templateHome, userInvalid } from "../views/templateHome.js";
export let name, email;



//Todas las funciones de registro e inicio de sesión de firebase
export const register = (email, password) => {
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(() =>{
    verifyAccount();
    //observer();
    window.location.hash = '#/home'; 
    
})
.catch(error => {
// Handle Errors here.
let errorCode = error.code;
userInvalid(errorCode);
let errorMessage = error.message;
});
}

export const login = (mail, pass) => {
  firebase.auth().signInWithEmailAndPassword(mail, pass)
.then(() => { 
  observer();
  //document.getElementById("error-message").innerHTML= "usuario registrado ";
//templateProject()
  window.location.hash = '#/project'; 
})
.catch(error =>{
    // Handle Errors here.
   let errorCode = error.code;
    let errorMessage = error.message;
    templateHome();

    userInvalid(errorCode);
   // errorLogin();
   /*if (errorCode === 'auth/wrong-password') {
    document.getElementById('error-message').innerHTML="Contraseña inválida";
   } else if (errorCode === 'auth/invalid-email'  || errorCode === 'auth/user-not-found') {
     document.getElementById('error-message').innerHTML="Usuario no registrado";
   }*/
  //  if (errorCode === 'auth/wrong-password') {

  //   alert("Contraseña inválida! ¡vuelve a intentar!")
  //  } else if (errorCode === 'auth/invalid-email'  || errorCode === 'auth/user-not-found') {
  //    alert("Usuario no registrado")
  //  }
  //   console.log(errorCode)                                                                                                                                                          
  //   console.log(errorMessage)
  
   
  });
}

const verifyAccount = () => { //envía correo de verificación al user, funcionando OK
let user= firebase.auth().currentUser;

user.sendEmailVerification().then(() =>{
    //alert("revisa tu bandeja de entrada")
  // Email sent.
}).catch(error => {
  // An error happened.
 // alert("ya estás registrado")
});
}
//export const logGoogle
//export const logFacebook

export const resetPassword = (email) => {
  let auth = firebase.auth();
  let emailAddress = email;
  
  auth.sendPasswordResetEmail(emailAddress)
  .then(() =>{

    
  }).catch(error => {

let errorCode = error.code;
userInvalid(errorCode);

  });
}

/*export const errorLogin = (error) => {
  if (error === 'auth/wrong-password') {
    return "Contraseña inválida";
   } else if (error === 'auth/invalid-email'  || error === 'auth/user-not-found') {
     return "Usuario no registrado";
   }
}*/

export const googleAuth = () =>{

  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    console.log(token);
    // The signed-in user info.
    var user = result.user;
    console.log(user);

    window.location.hash = '#/project'; 
    // ...
  }).catch(error => {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(credential);
    // ...
  });

}

export const facebookAuth =() =>{

  let provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(result =>{
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(error => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

//Observer
export const observer = () => {

  firebase.auth().onAuthStateChanged( user=> {

    if (user) { 
      name = user.displayName;
      console.log(name);
      email = user.email;
      console.log(email);


      window.location.hash = '#/project'; 
// User is signed in.
    

    } 
 
    
   else{
// User is signed out.
window.location.hash="";
}
    });
}
export const signOut = () => {firebase.auth().signOut()
.then(() =>{
  templateHome();
  //document.getElementById("error-message").innerHTML= "Vuelve pronto ÑAÑAÑA";
 window.location.hash = '#/home';
    // Sign-out successful.
  }).catch(error => {
    // An error happened.
  });

}