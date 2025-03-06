<script setup>
  import { useI18n } from 'vue-i18n';

  // change language
  const { locale } = useI18n();

  function changeLanguage(language) {
    locale.value = language;  // upload language
  }

</script>

<template>
  <footer class="w-full mx-auto max-w-screen-xl border-t border-dashed border-gray-900 py-6 mt-20">
    <div class="md:flex md:items-center md:justify-between text-center md:text-left">
      <p class="text-sm text-gray-950 sm:text-center">© 2025 
        <a href="" class="hover:underline font-bold hover:text-yellow-400">Marc Zamora</a>. 
        All Rights Reserved.
      </p>
      <div class="flex justify-start items-center gap-4">
        <button  @click="changeLanguage('ca')" 
          class="text-blue-700 border border-blue-300 rounded-full inline-flex items-center">
          <img src="/flag/flag-cat.svg" class="size-6" />
          <span class="sr-only">Català</span>
        </button>
        <button  @click="changeLanguage('es')" 
          class="text-blue-700 border border-blue-300 rounded-full inline-flex items-center">
          <img src="/flag/flag-es.svg" class="size-6" />
          <span class="sr-only">Castellano</span>
        </button>
        <button  @click="changeLanguage('en')" 
          class="text-blue-700 border border-blue-300 rounded-full inline-flex items-center">
          <img src="/flag/flag-en.svg" class="size-6" />
          <span class="sr-only">English</span>
        </button>
      </div>
    </div>
  </footer>
</template>