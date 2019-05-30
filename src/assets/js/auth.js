/*Todas las funciones que autoricen el inicio/cierre de sesión*/



//Registro de usuario
  export const registerUser = (email, password) => {
      
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
       
      }); 
  }
      
//Inicio de sesión con correo electrónico y contraseña
  export const signWithMail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode)                                                                                                                                                          
        console.log(errorMessage)
        // ...
      });
       
  }

  //Cierre de sesión
  export const logout = firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });