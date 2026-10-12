<script setup>
import wireframe from '../assets/images/wireframe_1_1.png'

// Placeholder taken from the number in your footer. Replace with the real WhatsApp number (country code, no "+" or spaces).
const whatsappUrl = 'https://wa.me/6282333958889'

// Replace `image` with a real photo per service when you have them.
const services = [
  {
    id: 'pbg-slf',
    number: '01',
    icon: 'bi-file-earmark-check',
    title: 'Konsultan PBG & SLF',
    description:
      'Pendampingan pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) dari proses administratif hingga penerbitan izin untuk menjamin legalitas dan kelaikan standar bangunan.',
    points: [
      'Pengurusan Persetujuan Bangunan Gedung (PBG)',
      'Pengurusan Sertifikat Laik Fungsi (SLF)',
      'Pendampingan dari proses administratif hingga izin terbit',
    ],
    image: wireframe,
  },
  {
    id: 'perencanaan-pengawasan',
    number: '02',
    icon: 'bi-rulers',
    title: 'Perencanaan dan Pengawasan Konstruksi',
    description:
      'Layanan desain arsitektur, struktur, dan MEP yang terintegrasi dengan pengawasan lapangan untuk menjamin presisi, kualitas material, ketepatan jadwal, dan kepatuhan K3.',
    points: [
      'Desain arsitektur, struktur, dan MEP',
      'Pengawasan lapangan yang terintegrasi',
      'Kontrol kualitas material, jadwal, dan kepatuhan K3',
    ],
    image: wireframe,
  },
  {
    id: 'estimator-konstruksi',
    number: '03',
    icon: 'bi-calculator',
    title: 'Estimator Konstruksi',
    description:
      'Perhitungan Rencana Anggaran Biaya (RAB) dan Bill of Quantities (BoQ) yang detail, akurat, dan transparan guna mencegah pembengkakan dana (over-budgeting) proyek.',
    points: [
      'Rencana Anggaran Biaya (RAB)',
      'Bill of Quantities (BoQ)',
      'Perhitungan detail, akurat, dan transparan',
    ],
    image: wireframe,
  },
  {
    id: 'manajemen-perdagangan',
    number: '04',
    icon: 'bi-graph-up-arrow',
    title: 'Konsultasi Aktifitas dan Manajemen Perdagangan',
    description:
      'Solusi strategis untuk efisiensi operasional bisnis, manajemen rantai pasok (supply chain), serta tata kelola dan penyediaan tenaga kerja profesional guna meningkatkan daya saing perusahaan.',
    points: [
      'Efisiensi operasional bisnis',
      'Manajemen rantai pasok (supply chain)',
      'Tata kelola dan penyediaan tenaga kerja profesional',
    ],
    image: wireframe,
  },
]
</script>

<template>
  <div class="services-page">
    <!--====================== Page Hero ======================-->
    <header class="svc-hero">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-9 col-xl-8">
            <span class="svc-eyebrow svc-eyebrow--light">Layanan Kami</span>
            <h1 class="svc-hero__title">Solusi Konsultansi Teknik dan Tenaga Profesional</h1>
            <p class="svc-hero__lead">
              CV SHANKARA KONSULTAN adalah mitra profesional dalam jasa konsultansi teknik dan penyediaan tenaga kerja,
              dengan dukungan tenaga ahli berpengalaman untuk solusi konstruksi dan non-konstruksi terbaik.
            </p>

            <nav class="svc-chips" aria-label="Daftar layanan">
              <a v-for="s in services" :key="s.id" :href="`#${s.id}`" class="svc-chip">
                <i class="bi" :class="s.icon" aria-hidden="true"></i>
                {{ s.title }}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!--====================== Service Sections ======================-->
    <section
      v-for="(s, index) in services"
      :id="s.id"
      :key="s.id"
      class="svc-section"
      :class="{ 'svc-section--tinted': index % 2 === 1 }"
    >
      <div class="container">
        <div class="row align-items-center g-5">
          <!-- text -->
          <div class="col-lg-6" :class="index % 2 === 1 ? 'order-lg-2' : 'order-lg-1'">
            <div class="svc-head">
              <span class="svc-icon" aria-hidden="true"><i class="bi" :class="s.icon"></i></span>
              <span class="svc-eyebrow">Layanan {{ s.number }}</span>
            </div>

            <h2 class="svc-title">{{ s.title }}</h2>
            <p class="svc-desc">{{ s.description }}</p>

            <ul class="svc-points">
              <li v-for="point in s.points" :key="point">
                <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
                <span>{{ point }}</span>
              </li>
            </ul>

            <a :href="whatsappUrl" target="_blank" rel="noopener" class="svc-link">
              Konsultasikan layanan ini
              <i class="bi bi-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <!-- image -->
          <div class="col-lg-6" :class="index % 2 === 1 ? 'order-lg-1' : 'order-lg-2'">
            <div class="svc-media" :class="{ 'svc-media--flip': index % 2 === 1 }">
              <img :src="s.image" :alt="s.title" class="svc-media__img" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====================== Call To Action ======================-->
    <section class="svc-cta-wrap">
      <div class="container">
        <div class="svc-cta">
          <div class="svc-cta__text">
            <h2>Butuh konsultasi untuk proyek Anda?</h2>
            <p>Ceritakan kebutuhan Anda, tim kami siap membantu menentukan layanan yang paling sesuai.</p>
          </div>
          <a :href="whatsappUrl" target="_blank" rel="noopener" class="svc-cta__btn">
            <i class="bi bi-whatsapp" aria-hidden="true"></i>
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  </div>
</template>