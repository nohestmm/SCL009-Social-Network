import { templateAbout } from './templateAbout.js';

export const templateEmpty= () => {
    document.getElementById('root').innerHTML = `
    <div class="first-screen">
    <div class="container-login">
    <h1>Oops! No estás registrada :)</h1>
    <p>No te preocupes amiga, puedes hacerlo aquí!<p>
  <a id="btn-about" href='#/about'>Regístrate aquí</a>
    <div>
     <div>
                                                `
  //enlace a registro
    document.getElementById('btn-about').addEventListener('click', () => {
      templateAbout();
      window.location.hash = '#/about';
    })
    //si se loggea con éxito, pasar a muro


  }