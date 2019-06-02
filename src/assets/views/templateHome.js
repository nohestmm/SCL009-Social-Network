import { templateAbout } from './templateAbout.js';
import { register } from '/assets/js/firebaseAuth.js';

export const templateHome = () => {
  document.getElementById('root').innerHTML = `
  <div class="first-screen">
  <h1>Regístrate en nuestra comunidad</h1>

  <input class="form" type="text" id="name" name="name" placeholder="Alias">
  <input class="form" type="text" id="email" name="email" placeholder="Ingresa tu correo" required>
   <input class="form" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>
   <button id="register-here" type="submit">Registrar Usuario</button>
   <button id="btn-about">Ir a About</button>
   <div>
                                              `

  document.getElementById('btn-about').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
  })

  //btn register
  document.getElementById('register-here').addEventListener('click', ()=> {
 let emailValue = document.getElementById('email').value;
 let passwordValue = document.getElementById('password').value;
 register(emailValue, passwordValue);
  })
}
