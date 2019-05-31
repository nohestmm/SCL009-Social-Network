import { templateAbout } from './templateAbout.js';

export const templateHome = () => {
  document.getElementById('root').innerHTML = `<p>Template Home</p>
                                              <button id="btn-about">Ir a About</button>`

  document.getElementById('btn-about').addEventListener('click', () => {
    templateAbout();
    window.location.hash = '#/about';
  })
}