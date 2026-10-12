<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Projek | SHANKARA KONSULTAN'
})

const whatsappUrl = 'https://wa.me/6282333958889'

// PLACEHOLDER DATA: replace with your real projects.
// Required: id, img, title.
// Optional: location, year, link (cards show them only when filled in).
const base = 'https://speedyui-static.s3.amazonaws.com/portfolio/portfolio-2'

const projects = [
  { id: 1, img: `${base}/wk-1.jpg`, title: 'Creative Web Design' },
  { id: 2, img: `${base}/wk-2.jpg`, title: 'Brand Design' },
  { id: 3, img: `${base}/wk-3.jpg`, title: 'Digital Marketing' },
  { id: 4, img: `${base}/wk-4.jpg`, title: 'Creative Design' },
  { id: 5, img: `${base}/wk-5.jpg`, title: 'Creative Web Design' },
  { id: 6, img: `${base}/wk-6.jpg`, title: 'Graphics Design' },
]
</script>

<template>
  <div class="projects-page">
    <!--====================== Page Hero ======================-->
    <header class="pj-hero">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-9 col-xl-8">
            <span class="pj-eyebrow pj-eyebrow--light">Portofolio</span>
            <h1 class="pj-hero__title">Projek Kami</h1>
            <p class="pj-hero__lead">
              Sekilas hasil kerja dan projek yang ditangani CV SHANKARA KONSULTAN.
            </p>
          </div>
        </div>
      </div>
    </header>

    <!--====================== Project grid ======================-->
    <section class="pj-section">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          <div v-for="p in projects" :key="p.id" class="col">
            <article class="pj-card">
              <div class="pj-card__media">
                <img :src="p.img" :alt="p.title" class="pj-card__img" loading="lazy" />
                <a
                  v-if="p.link"
                  :href="p.link"
                  target="_blank"
                  rel="noopener"
                  class="pj-card__overlay"
                  :aria-label="`Lihat projek ${p.title}`"
                >
                  <i class="bi bi-arrow-up-right" aria-hidden="true"></i>
                </a>
              </div>

              <div class="pj-card__body">
                <h3 class="pj-card__title">{{ p.title }}</h3>
                <p v-if="p.location || p.year" class="pj-card__meta">
                  <span v-if="p.location"><i class="bi bi-geo-alt" aria-hidden="true"></i> {{ p.location }}</span>
                  <span v-if="p.year"><i class="bi bi-calendar3" aria-hidden="true"></i> {{ p.year }}</span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!--====================== Call To Action ======================-->
    <section class="pj-cta-wrap">
      <div class="container">
        <div class="pj-cta">
          <div class="pj-cta__text">
            <h2>Punya projek yang ingin dikerjakan bersama?</h2>
            <p>Ceritakan kebutuhan Anda, tim kami siap membantu menentukan layanan yang paling sesuai.</p>
          </div>
          <a :href="whatsappUrl" target="_blank" rel="noopener" class="pj-cta__btn">
            <i class="bi bi-whatsapp" aria-hidden="true"></i>
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  </div>
</template>