import { signInWithEmailAndPassword } from 'firebase/auth';
// import labels from "./labels";
import { auth } from "../lib/index.js";
import { navegacion } from '../main.js';

// Agregando la sección para html

// eslint-disable-next-line no-shadow
export function login(navegacion) {
  const section = document.createElement('section');
  if(sessionStorage.getItem("user")){
      navegacion("/home")
      return "<div></div>"
    }

  const html = `
  <section>
  <div class="contenedorLogo">
    <img class="imgLogo" src="img/logo.png" alt="logo">
  </div>
  </section>
  <main>
  <div class="contenedorIngreso">
    <form class="contenedorInput">
      <label>
        <span>Correo electrónico</span>
        <input type="email" autocomplete="off" name="email" class="email" id="email">
      </label>
      <label>
        <span>Contraseña</span>
        <input type="password" class="password" id="password">
      </label>  
      
    </form>   
      <button class="btnInicio" id="btnInicio">Iniciar sesión</button>
      <button class="btnGoogle" id="btnGoogle"> <img class="logoGoogle" src="./img/logogoogle.png" alt="Logo Google"></img>Continuar con google</button>
      <span class="textRegistro">Si no tienes cuenta <button class="btnRegistro" id="btnRegistro">Registrate</button></span>
  </div>
  </main>`;
  <div class='contenedor'>
      <div class="contenedorLogo">
        <img class="imgLogo" src="img/logo.png" alt="logo">
      </div>
    <main>
      <div class="contenedorIngreso">
        <form class="contenedorInput">
          <label>
            <span>Correo electrónico</span>
            <input type="email" autocomplete="off" name="correo" class="correo" id="correo">
          </label>
          <label>
            <span>Contraseña</span>
            <input type="password" class="clave" id="clave">
          </label>  
          
        </form>   
          <button class="btnInicio" id="btnInicio">Iniciar sesión</button>
          <button class="btnGoogle" id="btnGoogle"> <img class="logoGoogle" src="./img/logogoogle.png" alt="Logo Google"></img>Continuar con google</button>
          <span class="textRegistro">Si no tienes cuenta <button class="btnRegistro" id="btnRegistro">Regístrate</button></span>
      </div>
    </main>
  </div>`;

  section.innerHTML = html;

  // Labels dinámicos

  const inputs = section.querySelectorAll('input');

  inputs.forEach((input) => {
    input.onfocus = () => {
      input.previousElementSibling.classList.add('top');
      input.previousElementSibling.classList.add('focus');
      input.parentNode.classList.add('focus');
    };
    input.onblur = () => {
      input.value = input.value.trim();
      // eslint-disable-next-line eqeqeq
      if (input.value.trim().length == 0) {
        input.previousElementSibling.classList.remove('top');
      }

      input.previousElementSibling.classList.remove('focus');
      input.parentNode.classList.remove('focus');
    };
  });

  // Evento del botón Registrar
  const btnRegistrar = section.querySelector('#btnRegistro');

  btnRegistrar.addEventListener('click', () => {
    navegacion('/registro');
  });


  // Evento del botón Iniciar Sesiòn

  const btnInicio = section.querySelector('#btnInicio');

  btnInicio.addEventListener('click', async () => {
    
    const password = section.querySelector('#password').value;
    const email = section.querySelector('#email').value;
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      
      if(credentials.user) {
        sessionStorage.setItem("user", credentials.user.email)
        navegacion('/home');
      }

    } catch (e) {
      console.error(e)
    }
  });

  return section;
}
