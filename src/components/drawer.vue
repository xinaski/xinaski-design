<template>
  
  <div class="fixed top-4 right-4 md:top-8 md:right-8 z-40">
    <button class="flex justify-center items-center text-black bg-white rounded-2xl hover:bg-gray-50 size-16 cursor-pointer" 
      type="button" data-drawer-target="drawer-right-menu" data-drawer-show="drawer-right-menu" data-drawer-placement="right" aria-controls="drawer-right-menu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>

  <div id="drawer-right-menu" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-full md:w-1/4" tabindex="-1" aria-labelledby="drawer-right-label">
    <button type="button" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
      class="text-red-500 bg-transparent hover:bg-gray-50 hover:text-red-700 rounded-lg text-sm size-16 absolute top-4 right-4 md:top-8 md:right-8 inline-flex items-center justify-center" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="pt-16 px-4 grid gap-4">
      <a type="button" href="#home" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
        class="text-gray-900 text-left bg-white hover:bg-gray-100 font-medium rounded-lg text-md px-6 py-4">
        <span class="inline-block text-sm font-bold text-black font-stretch-extra-expanded">
          # {{ $t('navbar.home-title') }}
        </span>
      </a>
      <hr class="w-10 border-1 ml-6">
      <a type="button" href="#about" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
        class="text-gray-900 text-left bg-white hover:bg-gray-100 font-medium rounded-lg text-md px-6 py-4">
        <span class="inline-block text-sm font-bold text-black font-stretch-extra-expanded">
          #2 {{ $t('navbar.about-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.about-subtitle') }}</span>
        </span>
      </a>
      <hr class="w-10 border-1 ml-6">
      <a type="button" href="#portfolio" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
        class="text-gray-900 text-left bg-white hover:bg-gray-100 font-medium rounded-lg text-md px-6 py-4">
        <span class="inline-block text-sm font-bold text-black font-stretch-extra-expanded">
          #3 {{ $t('navbar.portfolio-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.portfolio-subtitle') }}</span>
        </span>
      </a>
      <hr class="w-10 border-1 ml-6">
      <a type="button" href="#customers" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
        class="text-gray-900 text-left bg-white hover:bg-gray-100 font-medium rounded-lg text-md px-6 py-4">
        <span class="inline-block text-sm font-bold text-black font-stretch-extra-expanded">
          #4 {{ $t('navbar.customers-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.customers-subtitle') }}</span>
        </span>
      </a>
      <hr class="w-10 border-1 ml-6">
      <a type="button" href="#skills" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
        class="text-gray-900 text-left bg-white hover:bg-gray-100 font-medium rounded-lg text-md px-6 py-4">
        <span class="inline-block text-sm font-bold text-black font-stretch-extra-expanded">
          #5 {{ $t('navbar.skills-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.skills-subtitle') }}</span>
        </span>
      </a>
    </div>
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

</template>

<script setup>
  import { useI18n } from 'vue-i18n';

  // change language
  const { locale } = useI18n();

  function changeLanguage(language) {
    locale.value = language;  // upload language
  }
</script>