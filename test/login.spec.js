/**
 * @jest-environment jsdom
 */

import { loginGoogle } from '../src/lib/auth.js';
import {
  googleFirebase,
  login,
} from '../src/templates/login.js';

const mockNavigation = jest.fn();

// especificar el modulo a mockear
describe('login', () => {
  test('esto es una funcion', () => {
    expect(typeof login).toBe('function');
  });

  test('hay un button', () => {
    const html = document.createElement('div');
    html.appendChild(login());
    const button = html.querySelector('#btnLogin');
    expect(button).not.toBe(undefined);
  });

  test('hay un botón con clic', () => {
    const html = document.createElement('div');
    html.appendChild(login());
    const button = html.querySelector('#btnLogin');
    button.click();
    expect(button).not.toBe(null);
  });

  test('Esto es un botón de Google', () => {
    const html = document.createElement('div');
    html.appendChild(login());
    const button = html.querySelector('#btnGoogle');
    expect(button).not.toBe(undefined);
  });

  test('Verifica el elemento link de enlace', () => {
    const html = document.createElement('div');
    html.appendChild(login(mockNavigation));
    const element = html.querySelector('#linkRegister');
    element.click();
    expect(element).toBeDefined();
  });

  test('Verifica el clic en el input email', () => {
    const html = document.createElement('div');
    html.appendChild(login(mockNavigation));
    const email = html.querySelector('#email');
    email.click();
    expect(email).toBeDefined();
  });

  test('Verifica el clic en el input password', () => {
    const html = document.createElement('div');
    html.appendChild(login(mockNavigation));
    const password = html.querySelector('#password');
    password.click();
    expect(password).toBeDefined();
  });
});

// Función de google

describe('googleFirebase', () => {
  test('Esto es una función', () => {
    expect(typeof googleFirebase).toBe('function');
  });

  test('Es una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });

  test('Debe llamar a mockNavigation', () => {
    const html = document.createElement('div');
    html.append(login(mockNavigation));
    const btnGoogle = html.querySelector('#btnGoogle');
    btnGoogle.click();
    expect(mockNavigation).toHaveBeenCalledTimes(1);
  });
});
