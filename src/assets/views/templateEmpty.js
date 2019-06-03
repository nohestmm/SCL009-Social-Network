import { templateHome } from './templateHome.js';
import { resetPassword } from '/assets/js/firebaseAuth.js'; // const reset password

export const templateEmpty= () => {
    document.getElementById('root').innerHTML = `
    <div class="first-screen">
    <div class="container-login">
    <h1>Recupera tu contraseña :)</h1>
    <p>No te preocupes amiga, puedes hacerlo aquí!<p>
    <input class="form" type="text" id="email-reset" name="email" placeholder="Ingresa tu correo" required>
  <a id="btn-send" href='#/home'>Enviar</a>
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
  resetPassword(email);
  templateHome();
  window.location.hash = '#/home';
})

  }
  