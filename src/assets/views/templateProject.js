import { readNameDB } from '../js/firebasePost.js';
import { nameUser } from '../js/firebasePost.js';
import { observer } from '../js/firebaseAuth.js';
import { signOut } from '../js/firebaseAuth.js';
import { createPost } from '../js/firebasePost.js';
import { templateLogin } from './templateLogin.js';

 


export const templateProject = () => {

  
   observer();
  
   
readNameDB();
  
  document.getElementById('root').innerHTML = `<p>Template Project</p>
  
  <p id="welcome">Hola  ${nameUser}</p>
                                              
  
  <textarea name="post" id="post" cols="30" rows="10"></textarea>
  <button id="posting">Publicar</button>
                                              <button id="sign-out">Cerrar sesión</button>
                                              `
                            

   
// btn posting

document.getElementById('posting').addEventListener('click', () => {
  let textPost = document.getElementById('post').value;
  let uid = firebase.auth().currentUser;
createPost(uid, textPost)
//showPost();
})


  // btn sign out
document.getElementById('sign-out').addEventListener('click', () => {

signOut();

templateLogin();
window.location.hash = '#/login';
  });

}

