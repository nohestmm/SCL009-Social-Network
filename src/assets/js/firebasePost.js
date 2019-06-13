//Read usersData

// export const createPost = (uid, msj) => {
//     let db = firebase.firestore();
//     let user = firebase.auth().currentUser;
//       let marico = user.uid;
//      // let data = [] pk onSnapshot pide 4 argumentos. -.-
//      db.collection("users").doc(marico).onSnapshot((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             db.collection("post").add({
//                // data,
//                // id,
//                 uid,
//                 msj: msj
//             })
//             console.log(`${doc.id} => ${doc.data()}`);
//         });
//     });
// }




export const createPost = () =>{ //funciona pero se duplican los post por user
    let db = firebase.firestore();
let user = firebase.auth().currentUser;
    let userSignIn = user.uid;
    let msj = document.getElementById("post").value;
    //let data = []
    //not working with currentUser... trying with frog observer!
    firebase.auth().onAuthStateChanged(user=> {
        db.collection("users").doc(userSignIn).get().then(doc=> {
            db.collection("post").add({
               userSignIn,
              msj
            
            }); 
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}