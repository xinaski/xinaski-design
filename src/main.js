import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import './index.css';
import { createI18n } from 'vue-i18n';

// Import translates
import ca from './locales/ca.json'; // Catala
import es from './locales/es.json'; // Spanish
import en from './locales/en.json'; // English

const supportedLocales = ['ca', 'es', 'en'];
const normalizeLocale = language => language?.toLowerCase().split('-')[0];
let savedLocale;
try { savedLocale = localStorage.getItem('xinaski-language'); } catch { /* Storage may be unavailable */ }
const browserLocale = (navigator.languages || [navigator.language])
  .map(normalizeLocale)
  .find(language => supportedLocales.includes(language));
const initialLocale = supportedLocales.includes(savedLocale) ? savedLocale : (browserLocale || 'en');

document.documentElement.lang = initialLocale;

const i18n = createI18n({
  locale: initialLocale,
  messages: {
    ca: ca,
    es: es,
    en: en
  }
});

const app = createApp(App);
app.use(router);
app.use(i18n)
app.mount('#app');
