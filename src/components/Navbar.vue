<template>
  <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-12 md:w-16 h-screen" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto border-r border-dashed border-gray-900">
      <div class="flex flex-col space-y-2 pt-30">
        <a class="rotate-270 whitespace-nowrap origin-center text-xs text-black uppercase font-stretch-extra-expanded tracking-wide"
          href="#home">
          marc zamora
        </a>
        <div class="fixed bottom-10 rotate-270 space-x-6 w-5 md:w-8">
          <a class="whitespace-nowrap origin-center text-xs text-black hover:text-yellow-300 uppercase font-stretch-extra-expanded tracking-wide"
          href="https://www.linkedin.com/in/marc-zamora-55338a1b9/" target="_blank">
          Linkedin
          </a>
          <a class="whitespace-nowrap origin-center text-xs text-black hover:text-yellow-300 uppercase font-stretch-extra-expanded tracking-wide"
            href="mailto:xinasking@gmail.com">
            Email me
          </a>
          <button @click="downloadPDF"
            class="whitespace-nowrap origin-center text-xs text-black hover:text-yellow-300 uppercase font-stretch-extra-expanded tracking-wide">
            Donwnload CV
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
  const downloadPDF = () => {
    const pdfUrl = "/pdf/marczamoa-cv.pdf"; // url
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "marczamora-cv.pdf"; // Nom correcte del fitxer
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error("Error descarregant el PDF:", error));
  };
</script>

<style scoped>
  .router-link-active {
    font-weight: bold;
    color:yellow;
  }
</style>