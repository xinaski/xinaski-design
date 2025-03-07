<script setup>
  import Footer from '../components/Footer.vue';
  import { ref, onMounted, computed } from "vue";
  import { useI18n } from "vue-i18n";
  import CustomerBox from "../components/CustomerBox.vue";

  const { locale } = useI18n();
  const customers = ref([]);

  onMounted(async () => {
    try {
      const response = await fetch("/data/customers.json");
      const data = await response.json();
      customers.value = data; // NO cal fer data.customers si el JSON és un array directe
    } catch (error) {
      console.error("Error carregant el JSON:", error);
    }
  });

  // Retorna només la informació en l'idioma seleccionat
  const translatedCustomers = computed(() =>
  customers.value.map(customer => ({
    id: customer.id,
    title: customer.title, // No canviem res aquí, perquè és un string directe
    description: customer.description[locale.value], // Traducció correcta
    url: customer.url,
    date: customer.date
  }))
);
</script>


<template>

  <header id="home" class="ml-16">
    <div class="pt-20 md:pt-0 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
      <div class="flex h-96 md:h-screen">
        <div class="m-auto">
          <div class="w-full space-y-4 lg:space-y-10">
            <div class="pb-8">
              <p class="inline-block mb-4 text-xs font-bold text-black uppercase font-stretch-extra-expanded">
                # {{ $t('navbar.home-title') }}
              </p>
              <hr class="w-10 border-1">
            </div>
            <h2 class="font-sans text-5xl font-extrabold text-gray-950 sm:text-8xl font-stretch-extra-expanded leading-10 md:leading-20"
              v-html="$t('home.welcome')">
            </h2>
            <p class="text-lg text-black md:text-2xl font-stretch-expanded">
              {{ $t('home.description') }}
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
                #2 {{ $t('navbar.about-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.about-subtitle') }}</span>
              </p>
              <hr class="w-10 border-1">
            </div>
            <div class="space-y-3 font-stretch-expanded text-sm">
              <p class="text-gray-600" v-html="$t('about.description01')"></p>
              <p class="text-gray-600" v-html="$t('about.description02')"></p>
              <p class="text-gray-600" v-html="$t('about.description03')"></p>
              <p class="text-gray-600" v-html="$t('about.description04')"></p>
              <p class="text-gray-600" v-html="$t('about.description05')"></p>
            </div>
            <div class="space-y-1 pt-8">
              <p class="text-lg text-gray-950 font-stretch-expanded">
                {{ $t('about.cta-01') }}
                <a class="text-yellow-300 font-bold" href="mailto:xinasking@gmail.com">
                  {{ $t('about.cta-email') }}
                </a>
              </p>
              <p class="text-lg text-gray-950 font-stretch-expanded">
                {{ $t('about.cta-02') }}
                <a class="text-yellow-300 font-bold" href="">
                  {{ $t('about.cta-cv') }}
                </a>
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
              #3 {{ $t('navbar.portfolio-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.portfolio-subtitle') }}</span>
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
            #4 {{ $t('navbar.customers-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.customers-subtitle') }}</span>
          </p>
          <hr class="w-10 border-1">
        </div>
        <div class="max-w-screen-xl sm:mx-auto">
          <div class="grid gap-8 row-gap-8 sm:row-gap-0 sm:grid-cols-2">
            <CustomerBox
              v-for="customer in translatedCustomers"
              :key="customer.id"
              :title="customer.title"
              :description="customer.description"
              :url="customer.url"
              :date="customer.date"
            />
          </div>
        </div>
      </div>  
    </section>

    <section id="skills">
      <div class="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div class="pb-10">
          <p class="inline-block mb-4 text-xs font-bold text-black font-stretch-extra-expanded">
            #5 {{ $t('navbar.skills-title') }}<span class="text-gray-400 pl-2">{{ $t('navbar.skills-subtitle') }}</span>
          </p>
          <hr class="w-10 border-1">
        </div>
        <div class="max-w-screen-xl sm:mx-auto space-y-12">
          <div class="space-y-4">
            <h6 class="font-bold leading-5 font-stretch-extra-expanded">
              {{ $t('skills.skills-01') }}
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
              {{ $t('skills.skills-02') }}
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
              {{ $t('skills.skills-03') }}
            </h6>
            <div class="flex flex-wrap justify-start items-center gap-6">
              <img src="/skills/markup/xml-file.svg" class="h-12"/>
              <img src="/skills/markup/json.svg" class="h-12"/>
            </div>
          </div>
          <div class="space-y-4">
            <h6 class="font-bold leading-5 font-stretch-extra-expanded">
              {{ $t('skills.skills-04') }}
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
              {{ $t('skills.skills-05') }}
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
  