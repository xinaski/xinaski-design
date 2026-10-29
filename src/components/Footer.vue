<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<template>
  <footer class="editorial-footer">
    <div class="editorial-footer-inner">
      <p class="footer-copyright">© 2026 Marc Zamora. {{ t('editorial.rights') }}</p>
      <a class="footer-credit" href="https://diumenge.cat/" target="_blank" rel="noopener noreferrer" aria-label="Made by DIUMENGE — visit website">
        <span>{{ t('editorial.made') }}</span>
        <img src="/logos/logo-diumenge.svg" alt="DIUMENGE" loading="lazy">
      </a>
    </div>
  </footer>
</template>
