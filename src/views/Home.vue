<script setup>
import Footer from '../components/Footer.vue';

import { ref, onMounted } from "vue";
import CustomerBox from "../components/CustomerBox.vue";

const customers = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/data.json");
    customers.value = await response.json();
  } catch (error) {
    console.error("Error carregant el JSON:", error);
  }
});
</script>

<template>

  <header id="home" class="ml-16">
    <div class="pt-20 md:pt-0 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
      <div class="flex h-96 md:h-screen">
        <div class="m-auto">
          <div class="w-full space-y-4 lg:space-y-10">
            <div class="pb-8">
              <p class="inline-block mb-4 text-xs font-bold text-black uppercase font-stretch-extra-expanded">
                # HELLO
              </p>
              <hr class="w-10 border-1">
            </div>
            <h2 class="font-sans text-5xl font-extrabold text-gray-950 sm:text-8xl font-stretch-extra-expanded leading-10 md:leading-20">
              I make <span class="text-yellow-300">awesome</span> designs
            </h2>
            <p class="text-lg text-black md:text-2xl font-stretch-expanded">
              UX/UI design, Prototypes & frontend development.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="pl-20 pr-4">

    <section id="about" class="relative">
      <div class="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div class="">
          <img class="md:hidden w-full pb-10 px-10 sm:px-20 mx-auto" 
            src="/about/imgabout01.png" alt="about image" />
          <div class="w-full md:w-4/6 space-y-4 md:pr-16 lg:pr-0">
            <div class="pb-8">
              <p class="inline-block mb-4 text-xs font-bold text-black font-stretch-extra-expanded">
                #2 ABOUT ME<span class="text-gray-400 pl-2">How I am?</span>
              </p>
              <hr class="w-10 border-1">
            </div>
            <div class="space-y-3 font-stretch-expanded text-sm">
              <p class="text-gray-600">
                My name is <strong class="text-gray-900">Marc Zamora</strong>, born in 1976 in Barcelona. I currently live in Mataró (BCN).
              </p>
              <p class="text-gray-900">
                Always passionate about the <strong class="text-gray-900">visual arts</strong class="text-gray-900"> and <strong class="text-gray-900">communication</strong> 
                I decided to merge these two fields of my interest and specialize in graphic design as a form of visual communication.
              </p>
              <p class="text-gray-900">
                In recent years I have focused my work in the online world: <strong class="text-gray-900">design</strong>, <strong class="text-gray-900">mobile apps</strong>, <strong class="text-gray-900">banner campaigns</strong>, <strong class="text-gray-900">interface design</strong>.
              </p>
              <p class="text-gray-900">
                I’m really interested in <strong class="text-gray-900">UX</strong> techniques and methodologies, and I usually deal with Vue for my <strong class="text-gray-900">frontend development</strong>.
              </p>
              <p class="text-gray-900">
                I love <strong class="text-gray-900">coffee</strong>.
              </p>
            </div>
            <div class="space-y-1 pt-8">
              <p class="text-lg text-gray-950 font-stretch-expanded">
                Feel free to say hello via 
                <a class="text-yellow-300 font-bold" href="mailto:xinasking@gmail.com">
                  Email
                </a>
              </p>
              <p class="text-lg text-gray-950 font-stretch-expanded">
                Also, you can download my CV 
                <a class="text-yellow-300 font-bold" href="">here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img class="absolute hidden md:block top-0 md:right-0 lg:right-0 xl:right-30 2xl:right-60" 
        src="/about/imgabout01.png" alt="about image" />
    </section>

    <section id="portfolio">
      <div class="py-20 mx-auto sm:max-w-xl md:max-w-full lg:pt-60 lg:pb-40">
        <div class="w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div class="pb-16">
            <p class="inline-block mb-4 text-xs font-bold text-black font-stretch-extra-expanded">
              #3 PORTFILO<span class="text-gray-400 pl-2">What did I do?</span>
            </p>
            <hr class="w-10 border-1">
          </div>
        </div>
        <div class="grid md:grid-cols-7 md:gap-4">
          <div class="md:col-span-3 space-y-4 pb-4">
            <div class="grid grid-col-2 grid-cols-2 gap-4">
              <div>
                <img class="object-cover w-full rounded-lg" src="/portfolio/portfolio02.png" alt="">
              </div>
              <div>
                <img class="object-cover w-full rounded-lg" src="/portfolio/portfolio03.png" alt="">
              </div>
            </div>
            <div class="grid gap-4">
              <img class="object-cover w-full rounded-lg h-40 md:h-80" src="/portfolio/portfolio04.png" alt="">
            </div>
          </div>
          <div class="col-span-4 pb-4">
            <img class="object-cover h-full rounded-lg" src="/portfolio/portfolio08.png" alt="">
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-4">
          <div class="md:col-span-4 h-40 md:h-96">
            <img class="object-cover h-40 md:h-96 w-full rounded-lg" src="/portfolio/portfolio05.png" alt="">
          </div>
          <div class="md:col-span-3 h-40 md:h-96">
            <img class="object-cover h-40 md:h-96 w-full rounded-lg" src="/portfolio/portfolio01.png" alt="">
          </div>
        </div>
      </div>
    </section>

    <section id="customers">
      <div class="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div class="pb-10">
          <p class="inline-block mb-4 text-xs font-bold text-black font-stretch-extra-expanded">
            #4 CUSTOMERS<span class="text-gray-400 pl-2">Who did I work for?</span>
          </p>
          <hr class="w-10 border-1">
        </div>
        <div class="max-w-screen-xl sm:mx-auto">
          <div class="grid gap-8 row-gap-8 sm:row-gap-0 sm:grid-cols-2">
            <CustomerBox 
              v-for="CustomerBox in customers" 
              :key="CustomerBox.id" 
              :title="CustomerBox.title" 
              :description="CustomerBox.description" 
              :url="CustomerBox.url"
              :date="CustomerBox.date"
            />
          </div>
        </div>
      </div>  
    </section>

    <section id="skills">
      <div class="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div class="pb-10">
          <p class="inline-block mb-4 text-xs font-bold text-black font-stretch-extra-expanded">
            #5 SKILLS<span class="text-gray-400 pl-2">What is going on?</span>
          </p>
          <hr class="w-10 border-1">
        </div>
        <div class="max-w-screen-xl sm:mx-auto space-y-12">
          <div class="space-y-4">
            <h6 class="font-bold leading-5 font-stretch-extra-expanded">
              Frontend
            </h6>
            <div class="flex flex-wrap justify-start items-center gap-6">
              <img src="/skills/frontend/html5.svg" class="h-12"/>
              <img src="/skills/frontend/css-3.svg" class="h-12"/>
              <img src="/skills/frontend/javascript.svg" class="h-12"/>
              <img src="/skills/frontend/jquery.svg" class="h-12"/>
              <img src="/skills/frontend/ruby.svg" class="h-12"/>
              <img src="/skills/frontend/angular.svg" class="h-12"/>
              <img src="/skills/frontend/vue.svg" class="h-12"/>
              <img src="/skills/frontend/tailwind.svg" class="h-10"/>
              <img src="/skills/frontend/bootstrap.svg" class="h-12"/>
              <img src="/skills/frontend/material.svg" class="h-12"/>
              <img src="/skills/frontend/ionic.svg" class="h-12"/>
              <img src="/skills/frontend/hubspot.svg" class="h-12"/>
              <img src="/skills/frontend/wordpress.svg" class="h-12"/>
              <img src="/skills/frontend/shopify.svg" class="h-12"/>
            </div>
          </div>
          <div class="space-y-4">
            <h6 class="font-bold leading-5 font-stretch-extra-expanded">
              Parsers and Processors
            </h6>
            <div class="flex flex-wrap justify-start items-center gap-6">
              <img src="/skills/parsers/haml.svg" class="h-12"/>
              <img src="/skills/parsers/sass.svg" class="h-12"/>
              <img src="/skills/parsers/less.svg" class="h-12"/>
              <img src="/skills/parsers/bem.svg" class="h-12"/>
              <img src="/skills/parsers/atomicdesign.svg" class="h-12"/>
            </div>
          </div>
          <div class="space-y-4">
            <h6 class="font-bold leading-5 font-stretch-extra-expanded">
              Markup and transport
            </h6>
            <div class="flex flex-wrap justify-start items-center gap-6">
              <img src="/skills/markup/xml-file.svg" class="h-12"/>
              <img src="/skills/markup/json.svg" class="h-12"/>
            </div>
          </div>
          <div class="space-y-4">
            <h6 class="font-bold leading-5 font-stretch-extra-expanded">
              Design tools
            </h6>
            <div class="flex flex-wrap justify-start items-center gap-6">
              <img src="/skills/designtools/photoshop.svg" class="h-12"/>
              <img src="/skills/designtools/illustrator.svg" class="h-12"/>
              <img src="/skills/designtools/indesign.svg" class="h-12"/>
              <img src="/skills/designtools/figma.svg" class="h-12"/>
              <img src="/skills/designtools/sketch.svg" class="h-12"/>
              <img src="/skills/designtools/premiere.svg" class="h-12"/>
              <img src="/skills/designtools/adobexd.svg" class="h-12"/>
            </div>
          </div>
          <div class="space-y-4">
            <h6 class="font-bold leading-5 font-stretch-extra-expanded">
              Experience in UX/UI, mockup tools
            </h6>
            <div class="flex flex-wrap justify-start items-center gap-6">
              <img src="/skills/mockuptools/figma.svg" class="h-12"/>
              <img src="/skills/mockuptools/invision.svg" class="h-12"/>
              <img src="/skills/mockuptools/proto-io.svg" class="h-12"/>
            </div>
          </div>
        </div>
      </div>  
    </section>

    <Footer />

  </main>

</template>
  