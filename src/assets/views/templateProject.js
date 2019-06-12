import { templateLogin } from './templateLogin.js';
import { observer } from '../js/firebaseAuth.js';
import { signOut } from '../js/firebaseAuth.js';


export const templateProject = () => {
  observer();
  document.getElementById('root').innerHTML = `<p>Template Project</p>
  
  <p id="message"></p>
                                              
  
                                              <button id="btn-home">Ir a Home</button>
                                              <button id="sign-out">Cerrar sesión</button>
                                              `
                            
  

  // btn sign out
  document.getElementById('sign-out').addEventListener('click', () => {
signOut();
templateLogin();
window.location.hash = '#/login';
  });
}