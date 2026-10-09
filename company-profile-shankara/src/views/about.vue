<script setup>
import { onMounted } from 'vue'
import wireframe from '../assets/images/wireframe_1_1.png'

onMounted(() => {
  document.title = 'Tentang Kami | SHANKARA KONSULTAN'
})

const whatsappUrl = 'https://wa.me/6281234567890'

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
            <h2 class="ab-title">CV SHANKARA KONSULTAN</h2>
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

<style scoped>
.about-page {
  font-family: var(--font-alt);
  color: var(--gray-700);
  background: #fff;
}

.ab-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue-700);
}

.ab-eyebrow--light {
  color: var(--green-400);
}

.ab-title {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.25;
  color: var(--blue-900);
  margin: 0.75rem 0 1rem;
}

/* ---------- Hero ---------- */
.ab-hero {
  padding: 5rem 0 4.5rem;
  color: #fff;
  background:
    radial-gradient(circle at 15% 20%, rgba(131, 244, 124, 0.18), transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(110, 143, 230, 0.35), transparent 50%),
    linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 100%);
}

.ab-hero__title {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(2rem, 4.5vw, 3.1rem);
  line-height: 1.2;
  margin: 1rem 0 1.25rem;
}

.ab-hero__lead {
  max-width: 680px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
}

/* ---------- Sections ---------- */
.ab-section {
  padding: 5rem 0;
}

.ab-section--tinted {
  background: #f3f6ff;
}

.ab-heading {
  max-width: 720px;
  margin: 0 auto 3rem;
}

.ab-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
}

.ab-media {
  position: relative;
  max-width: 460px;
  margin: 0 auto;
  padding: 0 0 1.25rem 1.25rem;
}

.ab-media::before {
  content: '';
  position: absolute;
  inset: 1.25rem 0 0 0;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, var(--blue-300), var(--green-200));
  opacity: 0.55;
}

.ab-media__img {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0 24px 48px rgba(26, 46, 108, 0.18);
}

/* ---------- Statement band ---------- */
.ab-band {
  padding: 3.25rem 0;
  color: #fff;
  background: linear-gradient(135deg, var(--blue-700), var(--blue-500));
}

.ab-band__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

.ab-band__inner i {
  flex: 0 0 auto;
  font-size: 2.2rem;
  color: var(--green-400);
}

.ab-band__inner p {
  margin: 0;
  font-family: var(--font-main);
  font-weight: 500;
  font-size: clamp(1.1rem, 2.4vw, 1.5rem);
  line-height: 1.5;
}

/* ---------- Cards ---------- */
.ab-card {
  height: 100%;
  padding: 1.75rem;
  background: #fff;
  border: 1px solid var(--gray-300);
  border-top: 4px solid var(--green-500);
  border-radius: 1.1rem;
  transition: transform 0.25s, box-shadow 0.25s;
}

.ab-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(26, 46, 108, 0.14);
}

.ab-card__icon {
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

.ab-card__title {
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.35;
  color: var(--blue-900);
  margin-bottom: 0.6rem;
}

.ab-card__text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.65;
}

/* ---------- CTA ---------- */
.ab-cta-wrap {
  padding: 4.5rem 0 5rem;
}

.ab-cta {
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

.ab-cta__text {
  flex: 1 1 320px;
}

.ab-cta h2 {
  font-family: var(--font-main);
  font-weight: 700;
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-bottom: 0.5rem;
}

.ab-cta p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.6;
}

.ab-cta__btn {
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

.ab-cta__btn:hover {
  background: var(--green-400);
  color: #0b2a14;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
}

/* ---------- Responsive ---------- */
@media (max-width: 991.98px) {
  .ab-hero {
    padding: 3.75rem 0 3.25rem;
  }
  .ab-section {
    padding: 3.5rem 0;
  }
  .ab-cta {
    padding: 2rem 1.5rem;
  }
  .ab-band__inner {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ab-card,
  .ab-cta__btn {
    transition: none;
  }
  .ab-card:hover,
  .ab-cta__btn:hover {
    transform: none;
  }
}
</style>