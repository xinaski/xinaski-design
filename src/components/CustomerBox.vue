<template>
  <div class="max-w-md space-y-2">
    <h6 class="font-bold leading-5 font-stretch-extra-expanded">
      {{ title }}
      <span class="text-sm text-gray-400 pl-2">{{ date }}</span>
    </h6>
    <p class="text-sm text-gray-900 font-stretch-expanded">
      {{ description }}
    </p>
    <a class="text-sm text-yellow-300 hover:text-yellow-400 font-bold font-stretch-expanded" 
      :href="url" 
      target="_blank">
      View Site
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      url: String,
      date: String
    }
  };
</script>