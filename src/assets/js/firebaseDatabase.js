//TESTING 
   // Get a reference to the database service
   const database = firebase.database();
   console.log(database);
   const refText = database.ref().child('post');
   console.log(refText)
   refText.on('value', data => {
      
     
   })