//import { name, email } from '../js/firebaseAuth.js';
import { templateHome } from './templateHome.js';
import { observer } from '../js/firebaseAuth.js';
import { signOut } from '../js/firebaseAuth.js';






export const templateProject = () => {
  observer();
  document.getElementById('root').innerHTML = `<p>Template Project</p>
  
  <p id="message"></p>
                                              
  
                                              <button id="btn-home">Ir a Home</button>
                                              <button id="sign-out">Cerrar sesión</button>
                                              `
                            
  /*document.getElementById('btn-home').addEventListener('click', () => {
    templateHome();
    window.location.hash = '#/home';
  })*/

  // btn sign out
  document.getElementById('sign-out').addEventListener('click', () => {
signOut();
templateHome();
window.location.hash = '#/home';
  });
}