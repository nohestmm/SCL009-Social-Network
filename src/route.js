//import todas las vistas
import { observer } from './assets/js/firebaseAuth.js';
import { templateAbout } from './assets/views/templateAbout.js';
import { templateProject } from './assets/views/templateProject.js';
import { templateHome } from './assets/views/templateHome.js';
import { templateForgotPassword } from './assets/views/templateForgotPassword.js';



export const changeRoute = (hash) => {
  if (hash === '#/about' || hash === '#/project' || hash === '#/home' || hash === '#/forgotpassword'|| hash === '' || hash === '#/' || hash === '/#') {
    return showTemplate(hash)
  }
  return showTemplate(hash)
}

// segunda función showTemplate(hash)
const showTemplate = (hash) => {//se le 
  // #/about
  const router = hash.substring(2); // home about project
  const containerRoot = document.getElementById('root');//llamo a mi div de html
  containerRoot.innerHTML = '';
//substring corta el string de la posicion que se le dice
//si el huash es tanto entonces se debe hacer la funcionde template....
  switch (router) {
    case 'about':
      templateAbout();
      break;//es el corte de la condicion
    case 'project':
      templateProject();
      break;
    case 'home':
      templateHome();
      break;
    case 'forgotpassword':
      templateForgotPassword();
    break;
    case '':
      templateHome();
      break;
    default://si no esta que tire error 404
      containerRoot.innerHTML = `<h1>Error 404</h1>`
  }
}
//funcion de escuchar el cambio de las rutas
export const initRouter = () => {
  window.addEventListener('load', changeRoute(window.location.hash));

  if ('onhashchange' in window) {
    window.onhashchange = () => {
      //observer();
    changeRoute(window.location.hash);
    
  }
}
}