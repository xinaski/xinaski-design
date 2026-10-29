<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Footer from '../components/Footer.vue';
const { locale, t } = useI18n();
const customers = ref([]);
onMounted(async () => {
  try { const response = await fetch('/data/customers.json'); if (!response.ok) throw new Error(response.status); customers.value = await response.json(); }
  catch (error) { console.error('Error carregant clients', error); }
});
const translatedCustomers = computed(() => customers.value.map(c => ({...c, description: c.description?.[locale.value] || c.description?.en || ''})));
const portfolioImages = ['portfolio08.png','portfolio02.png','portfolio03.png','portfolio04.png','portfolio05.png','portfolio01.png'];
const capabilities = [
  { title: '01 / UX & PRODUCT', detail: 'Research · Strategy · Prototyping · Design systems' },
  { title: '02 / VISUAL DESIGN', detail: 'Art direction · Identity · Editorial · Digital' },
  { title: '03 / FRONTEND', detail: 'Vue · HTML · CSS · JavaScript · WordPress' }
];
</script>

<template>
  <div class="xinaski-page">
    <header id="home" class="editorial-hero">
      <div class="hero-topline"><span>INDEPENDENT DESIGNER / DEVELOPER</span><span>BARCELONA · CATALUNYA</span></div>
      <div class="hero-center">
        <div class="hero-type-composition">
          <span class="hero-yellow-disc" aria-hidden="true"></span>
          <h1>Design<br>with<br>character<span class="hero-period">.</span></h1>
        </div>
        <p class="hero-specialties">UX/UI · Product Design · Frontend Development</p>
        <div class="hero-bottom hero-bottom-e">
          <div class="hero-intro"><span class="hero-rule"></span><a href="#portfolio" class="hero-project-link"><span>⟶</span> VEURE PROJECTES</a></div>
        </div>
      </div>
      <div class="hero-footerline hero-services"><div><b>01</b><strong>Producte</strong><span>Idees, disseny i estratègia<br>per a productes digitals.</span></div><div><b>02</b><strong>Disseny visual</strong><span>Identitat, interfícies<br>i sistemes gràfics.</span></div><div><b>03</b><strong>Frontend</strong><span>Desenvolupament modern<br>i rendiment real.</span></div></div>
    </header>

    <main class="editorial-main">
      <section id="about" class="editorial-section about-section">
        <div class="section-heading"><span>01 / {{ t('navbar.about-title') }}</span><span>THE PERSON BEHIND THE PIXELS</span></div>
        <div class="about-grid">
          <div class="about-visual"><img src="/about/imgabout01.png" alt="Marc Zamora — portrait" loading="lazy"></div>
          <div class="about-copy">
            <p class="eyebrow">HELLO, I'M MARC.</p>
            <h2>Good design<br>is <span class="type-accent">never</span><br>an accident.</h2>
          </div>
          <div class="about-details">
            <div class="about-description">
              <p v-html="t('about.description01') + ' ' + t('about.description02')"></p>
              <p v-html="t('about.description03')"></p>
            </div>
            <div class="about-actions">
              <a href="mailto:xinasking@gmail.com" class="text-action">LET'S TALK <span>↗</span></a>
              <a href="/pdf/marczamora-cv.pdf" download="marczamora-cv.pdf" class="text-action">DOWNLOAD CV <span>↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="editorial-section work-section">
        <div class="section-heading"><span>02 / {{ t('navbar.portfolio-title') }}</span><span>SELECTED VISUAL WORK</span></div>
        <div class="work-intro"><h2>Made to<br><span class="type-accent">be seen.</span></h2><p>Design is not decoration.<br>It's how ideas take shape.</p></div>
        <div class="work-grid">
          <figure v-for="(img, i) in portfolioImages" :key="img" class="work-item" :class="'work-item-' + i">
            <div class="work-image"><img :src="'/portfolio/' + img" :alt="'Portfolio visual ' + (i + 1)" loading="lazy"></div>
            <figcaption><span>SELECTED WORK / 0{{ i + 1 }}</span><span>↗</span></figcaption>
          </figure>
        </div>
      </section>

      <section id="customers" class="editorial-section clients-section">
        <div class="section-heading"><span>03 / {{ t('navbar.customers-title') }}</span><span>PEOPLE & BRANDS</span></div>
        <h2>Good work.<br><span class="type-accent">Good company.</span></h2>
        <div class="clients-list">
          <a v-for="(customer, i) in translatedCustomers" :key="customer.id || i" :href="customer.url || '#customers'" :target="customer.url ? '_blank' : undefined" :rel="customer.url ? 'noopener noreferrer' : undefined" class="client-row">
            <span class="client-index">{{ String(i + 1).padStart(2,'0') }}</span>
            <span class="client-name">{{ customer.title }}</span>
            <span class="client-description">{{ customer.description }}</span>
            <span class="client-date">{{ customer.date }}</span>
            <span class="client-arrow">↗</span>
          </a>
        </div>
      </section>

      <section id="skills" class="editorial-section expertise-section">
        <div class="section-heading"><span>04 / {{ t('navbar.skills-title') }}</span><span>WHAT I BRING TO THE TABLE</span></div>
        <div class="expertise-intro"><h2>Ideas.<br>Tools.<br><span class="type-accent">Instinct.</span></h2><p>From the first sketch to the last line of code.</p></div>
        <div class="capability-list">
          <div v-for="cap in capabilities" :key="cap.title" class="capability"><h3>{{ cap.title }}</h3><p>{{ cap.detail }}</p><span>↗</span></div>
        </div>
        <div class="tech-stack" aria-label="Eines de disseny i tecnologies">
          <div class="tech-group">
            <h3>Design Tools</h3>
            <div class="tech-stack-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" title="Figma" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/affinitydesigner/affinitydesigner-original.svg" alt="Affinity Designer" title="Affinity Designer" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg" alt="Sketch" title="Sketch" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" title="Photoshop" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" alt="Illustrator" title="Illustrator" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/indesign/indesign-original.svg" alt="InDesign" title="InDesign" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" alt="Premiere Pro" title="Premiere Pro" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" alt="XD" title="XD" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/invision/invision-original.svg" alt="InVision" title="InVision" loading="lazy">
            </div>
          </div>
          <div class="tech-group">
            <h3>Frontend Development</h3>
            <div class="tech-stack-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" alt="jQuery" title="jQuery" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" alt="Ruby" title="Ruby" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular" title="Angular" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue" title="Vue" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" alt="WordPress" title="WordPress" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg" alt="Shopify" title="Shopify" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass" title="Sass" loading="lazy">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" alt="Less" title="Less" loading="lazy">
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>
