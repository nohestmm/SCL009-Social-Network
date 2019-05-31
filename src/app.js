const firebaseConfig = {
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
let btnRegister= document.getElementById("register");
    btnRegister.addEventListener("click", () => {
        let emailOne = document.getElementById("email").value;
        let passwordOne = document.getElementById("password").value;
        firebase.auth().createUserWithEmailAndPassword(emailOne, passwordOne).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
           
          });     
  })

  let btnSignIn= document.getElementById("sign-in");
    btnSignIn.addEventListener("click", () => {
        let emailTwo = document.getElementById("email2").value;
        let passwordTwo = document.getElementById("password2").value;
        firebase.auth().signInWithEmailAndPassword(emailTwo, passwordTwo).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode)                                                                                                                                                          
            console.log(errorMessage)
            // ...
          });
           
          });  
function observer() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          show()
            console.log("existe este user")
          // User is signed in.
          let displayName = user.displayName;
          let email = user.email;
          let emailVerified = user.emailVerified;
          console.log(emailVerified)
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log("NO existe este user")
        }
      });
}
observer();

//Logout
let btnSignOut = document.getElementById("sign-out");
btnSignOut.addEventListener("Click", () => {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
})

function show(){
  let content= document.getElementById("testing");
  content.innerHTML= "Bienvenido, esto es un test!!!!!"
}

///////////// testing
