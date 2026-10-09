<script setup>
import { onMounted } from 'vue'
import heroPhoto from '../assets/images/hero_photos_testing.jpg'
import checklist from '../assets/images/checklist.webp'

// Sets the browser tab title for this page
onMounted(() => {
  document.title = 'Beranda | SHANKARA KONSULTAN'
})

const whatsappUrl = 'https://wa.me/6281234567890'

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

<style scoped>
.home-page {
  font-family: var(--font-alt);
  color: var(--gray-700);
  background: #fff;
}

/* ---------- Shared bits ---------- */
.hm-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue-700);
}

.hm-eyebrow--light {
  color: var(--green-400);
}

.hm-title {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.25;
  color: var(--blue-900);
  margin: 0.75rem 0 1rem;
}

.hm-desc {
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}

.hm-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--blue-700);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: gap 0.2s, border-color 0.2s, color 0.2s;
}

.hm-link:hover {
  gap: 0.8rem;
  color: var(--blue-900);
  border-bottom-color: var(--green-500);
}

.hm-link--sm {
  font-size: 0.92rem;
}

/* ---------- Buttons ---------- */
.hm-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  justify-content: center;
}

@media (min-width: 992px) {
  .hm-actions {
    justify-content: flex-start;
  }
}

.hm-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.6rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.75rem;
  border: 2px solid transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.hm-btn:hover {
  transform: translateY(-2px);
}

.hm-btn--wa {
  color: #0b2a14;
  background: #25d366;
}

.hm-btn--wa:hover {
  color: #0b2a14;
  background: var(--green-400);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
}

.hm-btn--ghost {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.45);
}

.hm-btn--ghost:hover {
  color: #fff;
  border-color: var(--green-400);
  background: rgba(255, 255, 255, 0.1);
}

.hm-btn--solid {
  color: #fff;
  background: var(--blue-700);
}

.hm-btn--solid:hover {
  color: #fff;
  background: var(--blue-900);
  box-shadow: 0 10px 24px rgba(26, 46, 108, 0.25);
}

/* ---------- Hero ---------- */
.hm-hero {
  padding: 5rem 0 5.5rem;
  color: #fff;
  background:
    radial-gradient(circle at 12% 18%, rgba(131, 244, 124, 0.18), transparent 45%),
    radial-gradient(circle at 88% 85%, rgba(110, 143, 230, 0.35), transparent 50%),
    linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 100%);
  overflow: hidden;
}

.hm-hero__title {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(1.9rem, 4.2vw, 3rem);
  line-height: 1.22;
  margin: 1rem 0 2rem;
}

.hm-hero__title span {
  color: var(--green-400);
}

.hm-hero__media {
  position: relative;
  max-width: 520px;
  margin: 0 auto;
  padding: 0 0 1.25rem 1.25rem;
}

.hm-hero__media::before {
  content: '';
  position: absolute;
  inset: 1.25rem 0 0 0;
  border-radius: 1.5rem;
  border: 2px solid rgba(131, 244, 124, 0.55);
}

.hm-hero__img {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 28px 56px rgba(0, 0, 0, 0.3);
}

/* ---------- Sections ---------- */
.hm-section {
  padding: 5rem 0;
}

.hm-section--tinted {
  background: #f3f6ff;
}

.hm-heading {
  max-width: 720px;
  margin: 0 auto 3rem;
}

.hm-media {
  position: relative;
  max-width: 440px;
  margin: 0 auto;
  padding: 0 0 1.25rem 1.25rem;
}

.hm-media::before {
  content: '';
  position: absolute;
  inset: 1.25rem 0 0 0;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, var(--blue-300), var(--green-200));
  opacity: 0.55;
}

.hm-media__img {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: var(--blue-100);
  box-shadow: 0 24px 48px rgba(26, 46, 108, 0.18);
}

/* ---------- Service cards ---------- */
.hm-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.75rem;
  background: #fff;
  border: 1px solid var(--gray-300);
  border-top: 4px solid var(--green-500);
  border-radius: 1.1rem;
  transition: transform 0.25s, box-shadow 0.25s;
}

.hm-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(26, 46, 108, 0.14);
}

.hm-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.1rem;
  font-size: 1.4rem;
  color: var(--blue-700);
  background: var(--blue-100);
  border-radius: 0.85rem;
}

.hm-card__title {
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.35;
  color: var(--blue-900);
  margin-bottom: 0.75rem;
}

.hm-card__text {
  flex: 1 1 auto;
  font-size: 0.95rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

/* ---------- CTA ---------- */
.hm-cta-wrap {
  padding: 4.5rem 0 5rem;
}

.hm-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.75rem;
  padding: 3rem;
  color: #fff;
  border-radius: 1.5rem;
  background:
    radial-gradient(circle at 90% 10%, rgba(131, 244, 124, 0.22), transparent 45%),
    linear-gradient(135deg, var(--blue-900), var(--blue-700));
  box-shadow: 0 24px 48px rgba(26, 46, 108, 0.22);
}

.hm-cta__text {
  flex: 1 1 320px;
}

.hm-cta h2 {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-bottom: 0.5rem;
}

.hm-cta p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.6;
}

/* ---------- Responsive ---------- */
@media (max-width: 991.98px) {
  .hm-hero {
    padding: 3.5rem 0 4rem;
  }
  .hm-section {
    padding: 3.5rem 0;
  }
  .hm-cta {
    padding: 2rem 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hm-btn,
  .hm-link,
  .hm-card {
    transition: none;
  }
  .hm-btn:hover,
  .hm-card:hover {
    transform: none;
  }
}
</style>