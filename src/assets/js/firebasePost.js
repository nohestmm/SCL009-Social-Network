//import { templateProject } from "../views/templateProject.js";

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
    //firebase.auth().onAuthStateChanged(user=> {
        db.collection("users").doc(userSignIn).get().then(doc=> {
            db.collection("post").add({
                //name: doc.data().name,
               userSignIn,
              msj
            
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            console.log(`${doc.id} => ${doc.data()}`);
            //showPost()
        });
       
    //});
}

// export const showPost = () => {
//     let db = firebase.firestore();
//     db.collection("users").get().then((querySnapshot) => {
//         let posts = db.collection("post")
//         console.log(posts)
//         posts.orderBy("name", "desc").limit(2);
//         querySnapshot.forEach((doc) => {
//             doc.data().post
// //templateProject()
// //window.location.hash = '#/project';
//             //console.log(`${doc.id} => ${doc.data()}`);
//         });
//     });
// }