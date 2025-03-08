<template>






<div data-dial-init class="fixed end-8 bottom-20 group">
  <div id="speed-dial-menu-text-outside-button" class="flex flex-col items-end hidden mb-4 space-y-2">
    <a href="#home"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
      #1 {{ $t('navbar.home-title') }}
    </a>
    <a href="#about"
      class="relative py-3 px-6 bg-black hover:bg-gray-950 text-white hover:text-yellow-300 font-stretch-extra-expanded text-right border border-black rounded-full shadow-xs ">
     2#  {{ $t('navbar.about-title') }}
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
  </div>
  <button type="button" data-dial-toggle="speed-dial-menu-text-outside-button" aria-controls="speed-dial-menu-text-outside-button" aria-expanded="false" 
    class="fixed end-8  bottom-8 flex items-center justify-center text-white hover:text-yellow-300 bg-black rounded-lg w-14 h-14 hover:bg-gray-950">
    <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
    </svg>
    <span class="sr-only">Open actions menu</span>
  </button>
</div>






<!--   
  <div class="fixed top-4 right-4 md:top-8 md:right-8 z-40">
    <button class="flex justify-center items-center text-black bg-white rounded-2xl hover:bg-gray-50 size-16 cursor-pointer" 
      type="button" data-drawer-target="drawer-right-menu" data-drawer-show="drawer-right-menu" data-drawer-placement="right" aria-controls="drawer-right-menu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>

  <div id="drawer-right-menu" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-full sm:w-2/5" tabindex="-1" aria-labelledby="drawer-right-label">
    <button type="button" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
      class="text-red-500 bg-transparent hover:bg-gray-50 hover:text-red-700 rounded-lg text-sm size-16 absolute top-4 right-4 md:top-8 md:right-8 inline-flex items-center justify-center" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      <span class="sr-only">Close menu</span>
    </button>
    <div class="pt-24 grid gap-4">

      <a type="button" href="#home" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
        class="bg-black hover:bg-gray-950 text-white text-left font-medium rounded-full text-md px-6 py-4">
        <span class="inline-block text-sm font-stretch-extra-expanded">
          #1 {{ $t('navbar.home-title') }}
        </span>
      </a>

      <a type="button" href="#about" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
      class="bg-black hover:bg-gray-950 text-white text-left font-medium rounded-full text-md px-6 py-4">
        <span class="inline-block text-sm font-stretch-extra-expanded">
          #2 {{ $t('navbar.about-title') }}<span class="text-yellow-300 pl-2">{{ $t('navbar.about-subtitle') }}</span>
        </span>
      </a>

      <a type="button" href="#portfolio" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
      class="bg-black hover:bg-gray-950 text-white text-left font-medium rounded-full text-md px-6 py-4">
        <span class="inline-block text-sm font-stretch-extra-expanded">
          #3 {{ $t('navbar.portfolio-title') }}<span class="text-yellow-300 pl-2">{{ $t('navbar.portfolio-subtitle') }}</span>
        </span>
      </a>

      <a type="button" href="#customers" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
      class="bg-black hover:bg-gray-950 text-white text-left font-medium rounded-full text-md px-6 py-4">
        <span class="inline-block text-sm font-stretch-extra-expanded">
          #4 {{ $t('navbar.customers-title') }}<span class="text-yellow-300 pl-2">{{ $t('navbar.customers-subtitle') }}</span>
        </span>
      </a>

      <a type="button" href="#skills" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
      class="bg-black hover:bg-gray-950 text-white text-left font-medium rounded-full text-md px-6 py-4">
        <span class="inline-block text-sm font-stretch-extra-expanded">
          #5 {{ $t('navbar.skills-title') }}<span class="text-yellow-300 pl-2">{{ $t('navbar.skills-subtitle') }}</span>
        </span>
      </a>

    </div>
    <div class="fixed bottom-4 right-6 flex justify-between items-cente border-t border-dashed border-black pt-2" role="group">
      <button @click="changeLanguage('ca')"  
        class="flex justify-center items-center w-full px-6 py-3 text-sm font-medium text-gray-900 rounded-lg bg-transparent hover:bg-gray-50 cursor-pointer">
        <img src="/flag/flag-cat.svg" class="opacity-75 size-4 mr-2" />
        Cat
      </button>
      <button @click="changeLanguage('es')"  
      class="flex justify-center items-center w-full px-6 py-3 text-sm font-medium text-gray-900 rounded-lg bg-transparent hover:bg-gray-50 cursor-pointer">
      <img src="/flag/flag-es.svg" class="opacity-75 size-4 mr-2" />
        Es
      </button>
      <button @click="changeLanguage('en')" 
        class="flex justify-center items-center w-full px-6 py-3 text-sm font-medium text-gray-900 rounded-lg bg-transparent hover:bg-gray-50 cursor-pointer">
        <img src="/flag/flag-en.svg" class="opacity-75 size-4 mr-2" />
        En
      </button>
    </div>
  </div> -->

</template>

<script setup>
  // import { useI18n } from 'vue-i18n';

  // // change language
  // const { locale } = useI18n();

  // function changeLanguage(language) {
  //   locale.value = language;  // upload language
  // }
</script>