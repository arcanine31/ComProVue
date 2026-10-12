<script setup>
import { onMounted } from 'vue'
import heroPhoto from '../assets/images/hero_photos_testing.jpg'
import checklist from '../assets/images/checklist.webp'

// Sets the browser tab title for this page
onMounted(() => {
  document.title = 'Beranda | SHANKARA KONSULTAN'
})

const whatsappUrl = 'https://wa.me/6282333958889'

// Same four services as the Services page (ids match its anchors)
const services = [
  {
    id: 'pbg-slf',
    icon: 'bi-file-earmark-check',
    title: 'Konsultan PBG & SLF',
    description:
      'Pendampingan pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) dari proses administratif hingga penerbitan izin.',
  },
  {
    id: 'perencanaan-pengawasan',
    icon: 'bi-rulers',
    title: 'Perencanaan dan Pengawasan Konstruksi',
    description:
      'Desain arsitektur, struktur, dan MEP yang terintegrasi dengan pengawasan lapangan untuk menjamin presisi, kualitas material, ketepatan jadwal, dan kepatuhan K3.',
  },
  {
    id: 'estimator-konstruksi',
    icon: 'bi-calculator',
    title: 'Estimator Konstruksi',
    description:
      'Perhitungan Rencana Anggaran Biaya (RAB) dan Bill of Quantities (BoQ) yang detail, akurat, dan transparan.',
  },
  {
    id: 'manajemen-perdagangan',
    icon: 'bi-graph-up-arrow',
    title: 'Konsultasi Aktifitas dan Manajemen Perdagangan',
    description:
      'Solusi strategis untuk efisiensi operasional bisnis, manajemen rantai pasok, serta tata kelola dan penyediaan tenaga kerja profesional.',
  },
]
</script>

<template>
  <div class="home-page">
    <!--====================== Hero ======================-->
    <section class="hm-hero">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 text-center text-lg-start">
            <span class="hm-eyebrow hm-eyebrow--light">Konsultan Teknik &amp; Tenaga Profesional</span>
            <h1 class="hm-hero__title">
              Dapatkan Layanan Konsultansi Teknik dan Tenaga Profesional Bersama
              <span>CV SHANKARA KONSULTAN.</span>
            </h1>

            <div class="hm-actions">
              <a :href="whatsappUrl" target="_blank" rel="noopener" class="hm-btn hm-btn--wa">
                <i class="bi bi-whatsapp" aria-hidden="true"></i>
                Hubungi Kami
              </a>
              <router-link to="/services" class="hm-btn hm-btn--ghost">
                Lihat Layanan
                <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </router-link>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="hm-hero__media">
              <img
                :src="heroPhoto"
                class="hm-hero__img"
                alt="Tim profesional CV Shankara Konsultan"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====================== About teaser ======================-->
    <section class="hm-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-5">
            <div class="hm-media">
              <img :src="checklist" class="hm-media__img" alt="Ilustrasi daftar periksa" loading="lazy" />
            </div>
          </div>

          <div class="col-lg-6 offset-lg-1">
            <span class="hm-eyebrow">Tentang Kami</span>
            <h2 class="hm-title">CV SHANKARA KONSULTAN</h2>
            <p class="hm-desc">
              CV SHANKARA KONSULTAN adalah mitra profesional dalam jasa konsultansi teknik dan penyediaan tenaga kerja,
              dengan dukungan tenaga ahli berpengalaman untuk solusi konstruksi dan non-konstruksi terbaik.
            </p>
            <router-link to="/about" class="hm-link">
              Selengkapnya tentang kami
              <i class="bi bi-arrow-right" aria-hidden="true"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!--====================== Services overview ======================-->
    <section class="hm-section hm-section--tinted">
      <div class="container">
        <div class="hm-heading text-center">
          <span class="hm-eyebrow">Layanan Kami</span>
          <h2 class="hm-title">Solusi untuk Kebutuhan Konstruksi dan Non-Konstruksi</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
          <div v-for="s in services" :key="s.id" class="col">
            <article class="hm-card">
              <span class="hm-card__icon" aria-hidden="true"><i class="bi" :class="s.icon"></i></span>
              <h3 class="hm-card__title">{{ s.title }}</h3>
              <p class="hm-card__text">{{ s.description }}</p>
              <router-link :to="{ path: '/services', hash: `#${s.id}` }" class="hm-link hm-link--sm">
                Pelajari
                <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </router-link>
            </article>
          </div>
        </div>

        <div class="text-center mt-5">
          <router-link to="/services" class="hm-btn hm-btn--solid">Lihat Semua Layanan</router-link>
        </div>
      </div>
    </section>

    <!--====================== Call To Action ======================-->
    <section class="hm-cta-wrap">
      <div class="container">
        <div class="hm-cta">
          <div class="hm-cta__text">
            <h2>Butuh konsultasi untuk proyek Anda?</h2>
            <p>Ceritakan kebutuhan Anda, tim kami siap membantu menentukan layanan yang paling sesuai.</p>
          </div>
          <a :href="whatsappUrl" target="_blank" rel="noopener" class="hm-btn hm-btn--wa">
            <i class="bi bi-whatsapp" aria-hidden="true"></i>
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  </div>
</template>