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

const i18n = createI18n({
  locale: 'en', // Default language
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
