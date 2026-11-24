import { slugify } from './slugify.js';

const app = document.querySelector('#app');
app.innerHTML = `<h1>Мій перший сайт з CI/CD</h1>`;

const slugText = 'Мій перший сайт з CI';
const result = slugify(slugText);
app.insertAdjacentHTML('beforeend', `<p>Slug для "${slugText}": <code>${result}</code></p>`);

const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';
app.insertAdjacentHTML('beforeend', `<p>API URL: <code>${apiUrl}</code></p>`);