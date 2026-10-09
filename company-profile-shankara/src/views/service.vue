<script setup>
import wireframe from '../assets/images/wireframe_1_1.png'

// Placeholder taken from the number in your footer. Replace with the real WhatsApp number (country code, no "+" or spaces).
const whatsappUrl = 'https://wa.me/6281234567890'

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

<style scoped>
.services-page {
  font-family: var(--font-alt);
  color: var(--gray-700);
  background: #fff;
}

/* ---------- Hero ---------- */
.svc-hero {
  position: relative;
  padding: 5.5rem 0 5rem;
  color: #fff;
  background:
    radial-gradient(circle at 15% 20%, rgba(131, 244, 124, 0.18), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(110, 143, 230, 0.35), transparent 50%),
    linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 100%);
  overflow: hidden;
}

.svc-hero__title {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(2rem, 4.5vw, 3.1rem);
  line-height: 1.2;
  margin: 1rem 0 1.25rem;
}

.svc-hero__lead {
  max-width: 680px;
  margin: 0 auto 2.25rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
}

.svc-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
}

.svc-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 999px;
  backdrop-filter: blur(6px);
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
}

.svc-chip:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--green-400);
  transform: translateY(-2px);
  color: #fff;
}

/* ---------- Eyebrow label ---------- */
.svc-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue-700);
}

.svc-eyebrow--light {
  color: var(--green-400);
}

/* ---------- Service section ---------- */
.svc-section {
  padding: 5rem 0;
  scroll-margin-top: 1rem;
}

.svc-section--tinted {
  background: #f3f6ff;
}

.svc-head {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.1rem;
}

.svc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.4rem;
  color: var(--blue-700);
  background: var(--blue-100);
  border-radius: 0.85rem;
}

.svc-section--tinted .svc-icon {
  background: #fff;
  box-shadow: 0 4px 14px rgba(26, 46, 108, 0.1);
}

.svc-title {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.25;
  color: var(--blue-900);
  margin-bottom: 1rem;
}

.svc-desc {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--gray-700);
  margin-bottom: 1.5rem;
}

.svc-points {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: grid;
  gap: 0.7rem;
}

.svc-points li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  font-size: 0.98rem;
  font-weight: 500;
  color: var(--gray-900);
}

.svc-points i {
  flex: 0 0 auto;
  margin-top: 0.2rem;
  color: var(--green-700);
}

.svc-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--blue-700);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: gap 0.2s, border-color 0.2s, color 0.2s;
}

.svc-link:hover {
  gap: 0.8rem;
  color: var(--blue-900);
  border-bottom-color: var(--green-500);
}

/* ---------- Image frame ---------- */
.svc-media {
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 0 1.25rem 1.25rem;
}

.svc-media--flip {
  padding: 0 1.25rem 1.25rem 0;
}

/* offset decorative block behind the photo */
.svc-media::before {
  content: '';
  position: absolute;
  inset: 1.25rem 0 0 0;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, var(--blue-300), var(--green-200));
  opacity: 0.55;
}

.svc-media__img {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0 24px 48px rgba(26, 46, 108, 0.18);
}

/* ---------- CTA ---------- */
.svc-cta-wrap {
  padding: 4.5rem 0 5rem;
}

.svc-cta {
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

.svc-cta__text {
  flex: 1 1 320px;
}

.svc-cta h2 {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-bottom: 0.5rem;
}

.svc-cta p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.6;
}

.svc-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.6rem;
  font-weight: 600;
  color: #0b2a14;
  text-decoration: none;
  background: #25d366;
  border-radius: 0.75rem;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.svc-cta__btn:hover {
  background: var(--green-400);
  color: #0b2a14;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
}

/* ---------- Responsive ---------- */
@media (max-width: 991.98px) {
  .svc-hero {
    padding: 4rem 0 3.5rem;
  }
  .svc-section {
    padding: 3.5rem 0;
  }
  .svc-cta {
    padding: 2rem 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .svc-chip,
  .svc-link,
  .svc-cta__btn {
    transition: none;
  }
}
</style>