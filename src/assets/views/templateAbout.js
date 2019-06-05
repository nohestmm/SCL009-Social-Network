import { templateHome } from './templateHome.js'; // login
import { register } from '/assets/js/firebaseAuth.js';//registro
import { validateUser } from '/assets/js/validate/validateRegister.js'; // const validate
//registro
export const templateAbout = () => {//campos que tiene que rellenar para crear cuenta 
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


   //btn register
   document.getElementById('register-here').addEventListener('click', ()=> {//tomar el valor del usuario
    let nameValue= document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;
    
if (validateUser(nameValue, emailValue, passwordValue)) {
  document.getElementById("password-error").innerHTML = "Completa todos los campos requeridos"; 
/*en caso de que no rellene todos los campos ..en caso de que la validacion no este correcta entonces le llega un mensajer diciendo que complete todos los campos*/
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('password').value='';
//si no relleno todo se borra todo lo que escribio el usuario
} else {
  register(emailValue, passwordValue);
}//si no se equivoca que se registre
    
    //templateHome();
    //window.location.hash = '#/home';
     })
  document.getElementById('btn-back').addEventListener('click',()=>{
  templateHome();//btn-bacak es para devolverse a home
  window.location.hash = '#/home';
  })
}