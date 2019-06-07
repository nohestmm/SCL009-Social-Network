import { templateHome } from './templateHome.js'; // login
import { register } from '/assets/js/firebaseAuth.js';
import { validateRegister, validateMail } from '/assets/js/validate/validateRegister.js'; // const validate



//event =0;

export const templateAbout = () => {
  document.getElementById('root').innerHTML = `<div class="first-screen">
  <h1>¡Crea tu cuenta ahora!</h1>
  <input class="form" type="text" id="name" name="name" placeholder="Alias" required>
  <input class="form" type="text" id="email" name="email" placeholder="Ingresa tu correo" required>
   <input class="form" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>
   <p id = "password-error"></p>
   <button id="register-here" type="submit">Registrar Usuario</button>
   <button id ="btn-back"> Regresar</button>
  
   <div>
                                              `


   
   document.getElementById('register-here').addEventListener('click', ()=> {
    let nameValue= document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;
    
if (validateRegister(nameValue, emailValue, passwordValue)) {
  document.getElementById("password-error").innerHTML = "Completa todos los campos requeridos"; 

  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('password').value='';

 } else if (validateMail(emailValue)) {
  document.getElementById('password-error').innerHTML="Formato de correo inválido";
  document.getElementById('email').value='';
  document.getElementById('password').value='';

}
else {
  register(emailValue, passwordValue);
}
    
    //templateHome();
    //window.location.hash = '#/home';
     });
  document.getElementById('btn-back').addEventListener('click',()=>{
    templateHome();
    window.location.hash = '#/home';

  });
}