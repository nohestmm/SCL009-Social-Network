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
  <button id="btn-send">Enviar</button>
  <button id ="btn-back-password"> Regresar</button>
  
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
 
  
 
 if (validateForgotPassword(email)=== true) {
  document.getElementById('error-message').innerHTML="Ingresa el email"; 
  document.getElementById('email-reset').value='';
  
  
  } else {
  resetPassword(email); 
alert("Correo enviado exitosamente");
  templateHome();
window.location.hash = '#/home';
   
 
  }
  });

  document.getElementById('btn-back-password').addEventListener('click',()=>{
  templateHome();
    window.location.hash = '#/home';
   
    });

  }
  