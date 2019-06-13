import { observer } from '../js/firebaseAuth.js';

export let nameUser = ''; 
//leer el alias
export const readNameDB = () => {
   
observer();
let db = firebase.firestore();
let user = firebase.auth().currentUser;


db.collection("users").where ("uid", "==" ,user.uid)
.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().name);
return nameUser = doc.data().name;

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });




}

  





//Read usersData

// export const createPost = (uid, msj) => {
//     let db = firebase.firestore();
//     let user = firebase.auth().currentUser;
     
//     db.collection("users").doc(user.uid).onSnapshot().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             db.collection("post").add({
//                 uid,
//                 msj: msj
//             })
//             console.log(`${doc.uid} => ${doc.data()}`);
//         });
//     });
// }
