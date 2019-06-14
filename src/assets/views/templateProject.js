import { observer } from '../js/firebaseAuth.js';
import { createPost, readNameDB } from '../js/firebasePost.js';
import { templateLogin } from './templateLogin.js';
import { signOut } from '../js/firebaseAuth.js';
 

export const showUserNameInProject = (nameUser) => {

  document.getElementById('welcome').innerHTML = "Bienvenido " + nameUser;
}

export const templateProject = () => {
 
  
  observer();

  readNameDB();
   

  
  document.getElementById('root').innerHTML = ` 
  <div class="first-screen"> 
   <div class="class="container-login">
   <div class="header-login">
   <img class = "icon-user" src="./assets/img/woma-user.png">
  <p id="welcome"></p></div>
  <div class="content-login">
    <button class ="btn-sign-out" id="sign-out">Cerrar sesión</button>  
  <textarea name="post" id="post" cols="30" rows="10" ></textarea>
  <button class ="btn-posting" id="posting">Publicar</button>
  </div>
  </div>
  </div>
                                              `
                            

   
// btn posting

document.getElementById('posting').addEventListener('click', () => {
  let textPost = document.getElementById('post').value;
  let uid = firebase.auth().currentUser;
createPost(uid, textPost)
//showPost();
});

 
  // btn sign out
document.getElementById('sign-out').addEventListener('click', () => {

signOut();

templateLogin();
window.location.hash = '#/login';
  });



}