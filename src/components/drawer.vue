<template>



<div data-dial-init class="fixed top-6 end-6 group">
    <button type="button" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
        <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
        <span class="sr-only">Open actions menu</span>
    </button>
    <div id="speed-dial-menu-top-right" class="flex flex-col items-center hidden mt-4 space-y-2">
        <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
            </svg>
        </button>
        <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            Share
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z"/>
                <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z"/>
            </svg>
            <span class="sr-only">Print</span>
        </button>
        <div id="tooltip-print" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            Print
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Download</span>
        </button>
        <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            Download
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-xs dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"/>
                <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"/>
            </svg>
            <span class="sr-only">Copy</span>
        </button>
        <div id="tooltip-copy" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            Copy
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
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