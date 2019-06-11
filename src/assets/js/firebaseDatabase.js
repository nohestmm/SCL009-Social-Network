//import { firebaseInit } from 'app.js'
// Initialize Cloud Firestore through Firebase
// const db = firebase.firestore();

// })

// export const userData = () => {
//    let db = firebase.firestore();
//    let name = document.getElementById('name').value;
//    let email = document.getElementById('email').value;

//    db.collection("users").add({
//       name: name,
//       email: email
//    })
//          .then(function(docRef) {
//             console.log("Document written with ID: ", docRef.id);
//       })
//       .catch(function(error) {
//             console.error("Error adding document: ", error);
//       });
// }
let db = firebase.firestore();



db.collection("users").add({
   first: "Ada",
   last: "Lovelace",
   born: 1815
})
.then(function(docRef) {
   console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
   console.error("Error adding document: ", error);
});test.firestore.js