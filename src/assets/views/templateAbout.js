//import { templateHome } from './templateHome.js'; // muro
import { register } from '/assets/js/firebaseAuth.js';
import { validateUser } from '/assets/js/validate.js'; // const validate

export const templateAbout = () => {
  document.getElementById('root').innerHTML = `<div class="first-screen">
  <h1>¡Crea tu cuenta ahora!</h1>

  <input class="form" type="text" id="name" name="name" placeholder="Alias" required>
  <input class="form" type="text" id="email" name="email" placeholder="Ingresa tu correo" required>
   <input class="form" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>
   <p id = "password-error"></p>
   <button id="register-here" type="submit">Registrar Usuario</button>
  
   <div>
                                              `

  /*document.getElementById('btn-project').addEventListener('click', () => {
    // llamar a la función que carga el template project
    // cambiar el hash a #/project
    templateProject();
    window.location.hash = '#/project';
  })*/
   //btn register
   document.getElementById('register-here').addEventListener('click', ()=> {
    let nameValue= document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;
    const result = validateUser(nameValue, emailValue, passwordValue);
if (result !== true) {
  document.getElementById("password-error").innerHTML = "Completa todos los campos requeridos"; 

  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('password').value='';

} else {
  register(emailValue, passwordValue);
}
    
    //templateHome();
    //window.location.hash = '#/home';
     })
}