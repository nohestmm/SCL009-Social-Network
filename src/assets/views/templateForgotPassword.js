import { templateHome } from './templateHome.js';
import { resetPassword } from '/assets/js/firebaseAuth.js'; // const reset password
import { validateForgotPassword } from '/assets/js/validate/validateForgotPassword.js';

export const templateForgotPassword= () => {
    document.getElementById('root').innerHTML = `
    <div class="first-screen">
    <div class="container-login">
    <h1>Recupera tu contraseña :)</h1>
    <p>No te preocupes amiga, puedes hacerlo aquí!<p>
    <input class="form" type="text" id="email-reset" name="email" placeholder="Ingresa tu correo" required>
    <p id="error-message"></p>
  <a id="btn-send" href='#/home'>Enviar</a>
  <button id ="btn-back"> Regresar</button>
  
    <div>

     <div>
                                                `
  //enlace a registro
   /* document.getElementById('btn-send').addEventListener('click', () => {
      templateHome();
      window.location.hash = '#/home';
    })*/
   
document.getElementById('btn-send').addEventListener('click', () => {
  let email = document.getElementById('email-reset').value;

  if (validateForgotPassword(email)) {
    document.getElementById('error-message').innerHTML="Ingresa el email"
   document.getElementById('email-reset').value='';
  
  } else {
  resetPassword(email); 
  templateHome();
  window.location.hash = '#/home';
  }
  });

  document.getElementById('btn-back').addEventListener('click',()=>{
    templateHome();
    window.location.hash = '#/home';
    });

  }
  