import { templateAbout } from './templateAbout.js'; //registro
import { templateForgotPassword } from './templateForgotPassword.js'; //registro
import { validateLogin } from '/assets/js/validate/validateLogin.js'; // const validate

import { login } from '/assets/js/firebaseAuth.js'; // const login



//import { observer } from '/assets/js/firebaseAuth.js'; // Observador a ver si efectivamente loggea


export const templateHome = () => {
  document.getElementById('root').innerHTML = `
  <div class="first-screen">
  <div class="container-login">
  <h1>Iniciar sesión</h1>
  <input class="form" type="text" id="email2" name="email" placeholder="Ingresa tu correo" required>
  <input class="form" type="password" id="password2" name="password" placeholder="Ingresa tu contraseña" required>
  <button class="btn-login" id="sign-in" type="submit">INICIAR SESIÓN</button>
  <p id="error-message"></p>
  <h3>¿No tienes cuenta?</h3>
<a id="btn-about" href='#/about'>Regístrate aquí</a>
<h3>¿Olvidaste tu contraseña?</h3>
<a id="btn-reset" href='#/empty'>Pincha aquí</a>
  <div>

<div class="icons">
  <button id="btn-google"  ><img class = "icon" src='google.ico' alt="google">Inicia sesión con Google</button>
  <button id="btn-facebook"><img class = "icon" src='facebook.ico' alt="facebook">Inicia sesión con Facebook</button>
 
</div>
   
   <div>
                                              `
//enlace a registro
  document.getElementById('btn-about').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
  })
  //si se loggea con éxito, pasar a muro
document.getElementById('sign-in').addEventListener('click', () => {
let mailValue= document.getElementById('email2').value;
let passValue= document.getElementById('password2').value;
//condition validate
if (validateLogin(mailValue, passValue)) {
  document.getElementById('error-message').innerHTML="Usuario / contraseña inválido"
 document.getElementById('email2').value='';
 document.getElementById('password2').value='';
} else {
  login(mailValue, passValue)
}



});
 //
document.getElementById('btn-reset').addEventListener('click', () => {
  console.log("boton pincha aqui");
  templateForgotPassword();
window.location.hash = '#/forgotpassword';
})

//templateProject();
//window.location.hash = '#/project';



}
