//Read usersData

export const createPost = (uid, msj) => {
    let db = firebase.firestore();
    let user = firebase.auth().currentUser;
      let uid = user.uid;
    db.collection("users").doc(user.uid).onSnapshot().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            db.collection("post").add({
                uid,
                msj: msj
            })
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}
