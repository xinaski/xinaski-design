<template>
  
<div class="fixed top-8 right-8 z-40">
  <button class="flex justify-center items-center text-black bg-white rounded-2xl hover:bg-gray-50 size-16 cursor-pointer" 
    type="button" data-drawer-target="drawer-right-menu" data-drawer-show="drawer-right-menu" data-drawer-placement="right" aria-controls="drawer-right-menu">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </button>
</div>

<div id="drawer-right-menu" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-1/2" tabindex="-1" aria-labelledby="drawer-right-label">
  <button type="button" data-drawer-hide="drawer-right-menu" aria-controls="drawer-right-menu" 
    class="text-red-500 bg-transparent hover:bg-gray-200 hover:text-red-700 rounded-lg text-sm w-8 h-8 absolute top-3 end-3 inline-flex items-center justify-center" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
    <span class="sr-only">Close menu</span>
  </button>
  <div class="pt-16 px-10 grid gap-4">
    
  </div>
</div>

</template>