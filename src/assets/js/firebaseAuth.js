import { templateHome, userInvalid } from "../views/templateHome.js";
export let name, email;
<<<<<<< HEAD
=======


>>>>>>> 99e999cb3b81e1166787ec90a4cd366d0212dc76

//Todas las funciones de registro e inicio de sesión de firebase

//Registro de usuario
export const register = (name, email, password) => {
  db.collection("users").add({
    name: name,
    email: email
 })
       .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
          console.error("Error adding document: ", error);
    });
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(() =>{
  //userData();
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

//Iniciar sesión
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
  
  });
}

//Verificar cuenta
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

//Resetear contraseña
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

//Inicio de sesión con Google
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


//Observer
export const observer = () => {

  firebase.auth().onAuthStateChanged( user=> {

    if (user) { 
      console.log(user);
      name = user.displayName;
      console.log(name);
      email = user.email;
      console.log(email);
     emailVerified = user.emailVerified;
     console.log(emailVerified);


      window.location.hash = '#/project'; 
// User is signed in.
    

    } 
 
    
   else{
    
// User is signed out.
window.location.hash="";
}
    });
}

//Cerrar sesión
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

//  const userData = () => {
//   let db = firebase.firestore();
//   let namew = document.getElementById('name').value;
//   let emailw = document.getElementById('email').value;

  db.collection("users").add({
     name: name,
     email: email
  })
        .then(function(docRef) {
           console.log("Document written with ID: ", docRef.id);
     })
     .catch(function(error) {
           console.error("Error adding document: ", error);
     });
const frog = () => {
 let user = firebase.auth().currentUser;
let name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
}