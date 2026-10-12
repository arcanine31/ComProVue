<script setup>
import { onMounted } from 'vue'
import wireframe from '../assets/images/wireframe_1_1.png'

onMounted(() => {
  document.title = 'Tentang Kami | SHANKARA KONSULTAN'
})

const whatsappUrl = 'https://wa.me/6282333958889'

// Taken from the "Selayang Pandang" paragraph
const fields = [
  {
    icon: 'bi-building',
    title: 'Jasa Konsultansi Teknik',
    text: 'Layanan konsultasi di bidang konstruksi dan non konstruksi.',
  },
  {
    icon: 'bi-people',
    title: 'Jasa Penyedia Tenaga Kerja',
    text: 'Tenaga ahli dan teknisi andalan untuk mendukung kebutuhan pekerjaan Anda.',
  },
  {
    icon: 'bi-rulers',
    title: 'Teknik Sipil & Arsitektur',
    text: 'Bidang pekerjaan teknik sipil dan arsitektur.',
  },
  {
    icon: 'bi-clipboard-check',
    title: 'Administrasi & Penunjang Usaha',
    text: 'Penyediaan aktifitas administrasi dan penunjang usaha sebagaimana KBLI 2025.',
  },
]
</script>

<template>
  <div class="about-page">
    <!--====================== Page Hero ======================-->
    <header class="ab-hero">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-9 col-xl-8">
            <span class="ab-eyebrow ab-eyebrow--light">Tentang Kami</span>
            <h1 class="ab-hero__title">CV SHANKARA KONSULTAN</h1>
            <p class="ab-hero__lead">
              Mitra profesional dalam jasa konsultansi teknik dan penyediaan tenaga kerja, dengan dukungan tenaga ahli
              berpengalaman untuk solusi konstruksi dan non-konstruksi terbaik.
            </p>
          </div>
        </div>
      </div>
    </header>

    <!--====================== Selayang Pandang ======================-->
    <section class="ab-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-5">
            <div class="ab-media">
              <img :src="wireframe" class="ab-media__img" alt="CV Shankara Konsultan" loading="lazy" />
            </div>
          </div>

          <div class="col-lg-6 offset-lg-1">
            <span class="ab-eyebrow">Profil Perusahaan</span>
            <h2 class="ab-title">Selayang Pandang</h2>
            <p class="ab-desc">
              CV SHANKARA KONSULTAN didirikan untuk dapat melakukan usaha-usaha di bidang layanan jasa, khususnya jasa
              konsultansi teknik dan jasa penyedia tenaga kerja. Sebagai perusahaan dengan tenaga-tenaga ahli dan teknisi
              andalannya, CV SHANKARA KONSULTAN memulai usahanya dengan klasifikasi “kecil” untuk memberikan layanan
              konsultasi terbaik di bidang konstruksi dan non konstruksi untuk bidang pekerjaan teknik sipil, arsitektur
              serta penyediaan aktifitas administrasi dan penunjang usaha sebagaimana KBLI 2025.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--====================== Statement band ======================-->
    <section class="ab-band">
      <div class="container">
        <div class="ab-band__inner">
          <i class="bi bi-patch-check" aria-hidden="true"></i>
          <p>Memberikan layanan konsultasi terbaik di bidang konstruksi dan non konstruksi.</p>
        </div>
      </div>
    </section>

    <!--====================== Bidang Usaha ======================-->
    <section class="ab-section ab-section--tinted">
      <div class="container">
        <div class="ab-heading text-center">
          <span class="ab-eyebrow">Bidang Usaha</span>
          <h2 class="ab-title">Ruang Lingkup Kami</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
          <div v-for="f in fields" :key="f.title" class="col">
            <article class="ab-card">
              <span class="ab-card__icon" aria-hidden="true"><i class="bi" :class="f.icon"></i></span>
              <h3 class="ab-card__title">{{ f.title }}</h3>
              <p class="ab-card__text">{{ f.text }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!--====================== Call To Action ======================-->
    <section class="ab-cta-wrap">
      <div class="container">
        <div class="ab-cta">
          <div class="ab-cta__text">
            <h2>Butuh konsultasi untuk proyek Anda?</h2>
            <p>Ceritakan kebutuhan Anda, tim kami siap membantu menentukan layanan yang paling sesuai.</p>
          </div>
          <a :href="whatsappUrl" target="_blank" rel="noopener" class="ab-cta__btn">
            <i class="bi bi-whatsapp" aria-hidden="true"></i>
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  </div>
</template>