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
        <p class="eyebrow"><span class="eyebrow-dot"></span> UX/UI · PRODUCT · FRONTEND</p>
        <h1>DESIGN<span class="hero-star">✳</span><br>WITH<br><em>CHARACTER.</em></h1>
        <div class="hero-bottom">
          <p>{{ t('home.description') }}</p>
          <a href="#about" class="round-arrow" aria-label="Scroll to about">↘</a>
        </div>
      </div>
      <div class="hero-footerline"><span>MARC ZAMORA © 2026</span><span>SCROLL TO EXPLORE ↓</span></div>
    </header>

    <main class="editorial-main">
      <section id="about" class="editorial-section about-section">
        <div class="section-heading"><span>01 / {{ t('navbar.about-title') }}</span><span>THE PERSON BEHIND THE PIXELS</span></div>
        <div class="about-grid">
          <div class="about-visual"><img src="/about/imgabout01.png" alt="Marc Zamora — portrait" loading="lazy"><span class="about-stamp">THINK.<br>MAKE.<br>REPEAT.</span></div>
          <div class="about-copy">
            <p class="eyebrow">HELLO, I'M MARC.</p>
            <h2>Good design<br>is <em>never</em><br>an accident.</h2>
            <div class="about-description">
              <p v-html="t('about.description01')"></p>
              <p v-html="t('about.description02')"></p>
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
        <div class="work-intro"><h2>MADE TO<br><em>BE SEEN.</em></h2><p>Design is not decoration.<br>It's how ideas take shape.</p></div>
        <div class="work-grid">
          <figure v-for="(img, i) in portfolioImages" :key="img" class="work-item" :class="'work-item-' + i">
            <div class="work-image"><img :src="'/portfolio/' + img" :alt="'Portfolio visual ' + (i + 1)" loading="lazy"></div>
            <figcaption><span>SELECTED WORK / 0{{ i + 1 }}</span><span>↗</span></figcaption>
          </figure>
        </div>
      </section>

      <section id="customers" class="editorial-section clients-section">
        <div class="section-heading"><span>03 / {{ t('navbar.customers-title') }}</span><span>PEOPLE & BRANDS</span></div>
        <h2>GOOD WORK.<br><em>GOOD COMPANY.</em></h2>
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
        <div class="expertise-intro"><h2>IDEAS.<br>TOOLS.<br><em>INSTINCT.</em></h2><p>From the first sketch to the last line of code.</p></div>
        <div class="capability-list">
          <div v-for="cap in capabilities" :key="cap.title" class="capability"><h3>{{ cap.title }}</h3><p>{{ cap.detail }}</p><span>↗</span></div>
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>
