<template>

<div data-dial-init class="fixed z-40 end-6 top-20 group">
  <button @click="toggleMenu"
    class="fixed end-3 top-3 md:end-6 md:top-6 w-14 h-14 flex items-center justify-center text-white bg-black hover:bg-gray-950 rounded-full cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    <span class="sr-only">Open actions menu</span>
  </button>
  <div :class="{ 'hidden': !isMenuOpen }" class="flex flex-col items-end mt-0 md:mt-2 space-y-2">
    <a href="#home" @click="closeMenu"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      #1 {{ $t('navbar.home-title') }}
    </a>
    <a href="#about" @click="closeMenu"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      2# {{ $t('navbar.about-title') }}
    </a>
    <a href="#portfolio" @click="closeMenu"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      3# {{ $t('navbar.portfolio-title') }}
    </a>
    <a href="#customers" @click="closeMenu"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      4# {{ $t('navbar.customers-title') }}
    </a>
    <a href="#skills" @click="closeMenu"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      5# {{ $t('navbar.skills-title') }}
    </a>
    <div class="relative flex justify-end items-end py-1 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      <button @click="handleLanguageChange('ca')"
        class="flex justify-center items-center w-full px-3 py-3 text-sm font-medium text-white rounded-full bg-transparent cursor-pointer">
        <img src="/flag/flag-cat.svg" class="opacity-75 size-4 mr-2" />
        Cat
      </button>
      <button @click="handleLanguageChange('es')"  
        class="flex justify-center items-center w-full px-3 py-3 text-sm font-medium text-white rounded-full bg-transparent cursor-pointer">
        <img src="/flag/flag-es.svg" class="opacity-75 size-4 mr-2" />
          Es
      </button>
      <button @click="handleLanguageChange('en')"
        class="flex justify-center items-center w-full px-3 py-3 text-sm font-medium text-white rounded-full bg-transparent cursor-pointer">
        <img src="/flag/flag-en.svg" class="opacity-75 size-4 mr-2" />
        En
      </button>
    </div>
  </div>
</div>

</template>

<script setup>
  import { useI18n } from 'vue-i18n';
  import { ref } from "vue";

  const { locale } = useI18n();
  const isMenuOpen = ref(false);

  function changeLanguage(language) {
    locale.value = language;
  }

  function closeMenu() {
    isMenuOpen.value = false;
  }

  function handleLanguageChange(language) {
    changeLanguage(language);
    closeMenu();
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

</script>

