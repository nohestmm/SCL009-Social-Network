import { templateLogin } from './templateLogin.js'; // login
import { register } from '../js/firebaseAuth.js';
import { validateRegister } from '../js/validate/validateRegister.js'; // const validate
import { validateMail } from '../js/validate/validateRegister.js';


//event =0;

export const templateRegister = () => {
  document.getElementById('root').innerHTML = `
  <div class="first-screen">
  <div class="container-login">
      <div class= "content-login">
    <h1>¡Crea tu cuenta ahora!</h1>
    <p id = "password-error"></p>
  <input class="form" type="text" id="name" name="name" placeholder="Alias" required>
  <input class="form" type="text" id="email" name="email" placeholder="Ingresa tu correo" required>
   <input class="form" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>
   <input type="hidden" id="id">
  <button class="btn-register" id="register-here" type = "button">Registrar Usuario</button>
   <button class="btn-back" id ="btn-back"> Regresar</button>
  </div>
   </div>
   </div>
                                              `

 
   document.getElementById('register-here').addEventListener('click', ()=> {
    let nameValue= document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;
    let uidValue = document.getElementById('id').value;
    
if (validateRegister(nameValue, emailValue, passwordValue)) {
  if (passwordValue.length <6 && passwordValue.length >0){
    document.getElementById("password-error").innerHTML = "Contrasena de minimo 6 caracteres"; 
    }
  
    else {
      document.getElementById("password-error").innerHTML = "Completa todos los campos requeridos"; 
  
   }
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('password').value='';

 } 
 else if (validateMail(emailValue)) {
  document.getElementById('password-error').innerHTML="Formato de correo inválido";
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('password').value='';

}
else {
  register(nameValue,emailValue, passwordValue,uidValue);
  
}
    
    //templateLogin();
    //window.location.hash = '#/login';
     });
  document.getElementById('btn-back').addEventListener('click',()=>{
    templateLogin();
    window.location.hash = '#/login';

  });
}

