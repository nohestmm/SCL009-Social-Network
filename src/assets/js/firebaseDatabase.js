//TESTING 
   // Get a reference to the database service
   const database = firebase.database();
   console.log(database);
   const refText = database.ref().child('post');
   console.log(refText)
   refText.on('value', data => {
   })
     
//    })
// Initialize Cloud Firestore through Firebase
// const db = firebase.firestore();
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });