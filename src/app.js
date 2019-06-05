import { initRouter } from './route.js';
import { observer } from './assets/js/firebaseAuth.js';

const firebaseInit = () => {
  // Initialize Firebase
  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyA7ctYRP7x6WBe_PwZCUnYYe2ahkL7b6l4",
    authDomain: "nomorecommunity-2cfdd.firebaseapp.com",
    databaseURL: "https://nomorecommunity-2cfdd.firebaseio.com",
    projectId: "nomorecommunity-2cfdd",
    storageBucket: "nomorecommunity-2cfdd.appspot.com",
    messagingSenderId: "108376578479",
    appId: "1:108376578479:web:da6682d105a33503"
  };
  firebase.initializeApp(firebaseConfig);
}

const init = () => {
 
  firebaseInit();
  initRouter();
}

window.addEventListener('load', init);




