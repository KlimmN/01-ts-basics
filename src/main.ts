/*import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)*/
import "./task-1";
import "./task-2";
import "./task-3";
import "./task-4";
import "./task-5";
import "./task-6";
import "./task-7";
import "./task-8";


const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <div style="padding:16px;font-family:system-ui">
      <h1>01-ts-basics</h1>
      <p>Open DevTools → Console to see task results</p>
    </div>
  `;
}