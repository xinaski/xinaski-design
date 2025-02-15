<template>
  
  <footer class="bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-200 sm:text-center">© 2025 <a href="/" class="text-yellow-300">MarcTattoo™</a>. All Rights Reserved.</span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-gray-400 sm:mt-0">
        <li>
          <router-link to="/about" class="me-4 md:me-6">About</router-link>
        </li>
        <li>
          <router-link href="/home" class="me-4 md:me-6">Privacy Policy</router-link>
        </li>
        <li>
          <router-link href="/home" class="me-4 md:me-6">Licensing</router-link>
        </li>
        <li>
          <router-link to="/contact" class="">Contact</router-link>
        </li>
      </ul>
    </div>
  </footer>
   
</template>

<style scoped>
  .router-link-active {
  }
</style>