<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { locale, t } = useI18n();
const route = useRoute();
const isOpen = ref(false);
const links = [
  { id: 'home', label: 'navbar.home-title' },
  { id: 'about', label: 'navbar.about-title' },
  { id: 'portfolio', label: 'navbar.portfolio-title' },
  { id: 'personal-projects', label: 'Personal projects', literal: true },
  { id: 'customers', label: 'navbar.customers-title' },
  { id: 'skills', label: 'navbar.skills-title' }
];
function closeMenu() { isOpen.value = false; }
function navigate(id) {
  closeMenu();
  if (route.path !== '/') {
    window.location.assign('/#' + id);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', '#' + id);
  }
}
function changeLanguage(lang) { locale.value = lang; }
function onKeydown(event) { if (event.key === 'Escape') closeMenu(); }
watch(isOpen, value => { document.body.classList.toggle('menu-open', value); });
onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => { window.removeEventListener('keydown', onKeydown); document.body.classList.remove('menu-open'); });
</script>

<template>
  <button class="menu-trigger" :class="{ 'is-active': isOpen }" type="button"
    :aria-expanded="isOpen" aria-controls="fullscreen-navigation"
    :aria-label="isOpen ? 'Close menu' : 'Open menu'" @click="isOpen = !isOpen">
    <span class="menu-trigger-label">{{ isOpen ? 'Close' : 'Menu' }}</span>
    <span class="menu-trigger-lines"><i></i><i></i></span>
  </button>

  <Transition name="nav-reveal">
    <div v-if="isOpen" id="fullscreen-navigation" class="fullscreen-nav" role="dialog" aria-modal="true" aria-label="Main navigation">
      <div class="fullscreen-nav-top"><span>XINASKI®</span><span>Independent design practice — 2026</span></div>
      <nav class="fullscreen-nav-links" aria-label="Sections">
        <button v-for="(link, index) in links" :key="link.id" type="button" @click="navigate(link.id)">
          <span class="nav-index">0{{ index + 1 }}</span>
          <span class="nav-name">{{ link.literal ? link.label : t(link.label) }}</span>
          <span class="nav-arrow" aria-hidden="true">↗</span>
        </button>
      </nav>
      <div class="fullscreen-nav-bottom">
        <div class="language-switch" aria-label="Language">
          <button v-for="lang in ['ca', 'es', 'en']" :key="lang" type="button" :class="{ selected: locale === lang }"
            :aria-pressed="locale === lang" @click="changeLanguage(lang)">{{ lang.toUpperCase() }}</button>
        </div>
        <a href="mailto:xinasking@gmail.com">LET'S TALK ↗</a>
      </div>
    </div>
  </Transition>
</template>
