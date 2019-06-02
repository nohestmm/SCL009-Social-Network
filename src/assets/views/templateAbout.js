import { templateProject } from './templateProject.js';

export const templateAbout = () => {
  document.getElementById('root').innerHTML = `<p>Template About</p>
                                              <button id="btn-project">Ir a Project</button>`

  document.getElementById('btn-project').addEventListener('click', () => {
    // llamar a la función que carga el template project
    // cambiar el hash a #/project
    templateProject();
    window.location.hash = '#/project';
  })
}