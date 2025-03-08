<template>

<div data-dial-init class="fixed z-40 end-6 top-20 group">
  <button type="button" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" 
    class="fixed end-6 top-6 w-14 h-14 flex items-center justify-center text-white bg-black hover:bg-gray-950 rounded-full">
    <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
    </svg>
    <span class="sr-only">Open actions menu</span>
  </button>
  <div id="speed-dial-menu-top-right" class="flex flex-col items-end hidden mt-4 space-y-2">
    <a href="#home"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      #1 {{ $t('navbar.home-title') }}
    </a>
    <a href="#about"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      2# {{ $t('navbar.about-title') }}
    </a>
    <a href="#portfolio"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      3# {{ $t('navbar.portfolio-title') }}
    </a>
    <a href="#customers"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      4# {{ $t('navbar.customers-title') }}
    </a>
    <a href="#skills"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      5# {{ $t('navbar.skills-title') }}
    </a>
    <div class="relative flex justify-end items-end py-1 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      <button @click="changeLanguage('ca')"  
        class="flex justify-center items-center w-full px-3 py-3 text-sm font-medium text-white rounded-full bg-transparent cursor-pointer">
        <img src="/flag/flag-cat.svg" class="opacity-75 size-4 mr-2" />
        Cat
      </button>
      <button @click="changeLanguage('es')"  
        class="flex justify-center items-center w-full px-3 py-3 text-sm font-medium text-white rounded-full bg-transparent cursor-pointer">
        <img src="/flag/flag-es.svg" class="opacity-75 size-4 mr-2" />
          Es
      </button>
      <button @click="changeLanguage('en')" 
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

  // change language
  const { locale } = useI18n();

  function changeLanguage(language) {
    locale.value = language;  // upload language
  }
</script>