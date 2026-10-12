<script setup>
import logoVerWhite from '../assets/images/logo_ver_white.png'

const year = new Date().getFullYear()

const whatsappUrl =
  'https://wa.me/6282333958889?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Anda.%0A%0ABoleh%20minta%20informasi%20lebih%20lanjut%3F'
const mapsUrl = 'https://maps.app.goo.gl/6cfvcZp6R77Do3ee8'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan' },
  { to: '/projects', label: 'Projek' },
]

// ids match the section anchors on the Services page
const serviceLinks = [
  { id: 'pbg-slf', label: 'Konsultan PBG & SLF' },
  { id: 'perencanaan-pengawasan', label: 'Perencanaan dan Pengawasan Konstruksi' },
  { id: 'estimator-konstruksi', label: 'Estimator Konstruksi' },
  { id: 'manajemen-perdagangan', label: 'Konsultasi Aktifitas dan Manajemen Perdagangan' },
]

// Fill in `url` for each account you actually have. Icons with an empty url are hidden.
const socials = [
  { name: 'Facebook', icon: 'bi-facebook', url: '' },
  { name: 'Instagram', icon: 'bi-instagram', url: '' },
  { name: 'YouTube', icon: 'bi-youtube', url: '' },
  { name: 'X (Twitter)', icon: 'bi-twitter-x', url: '' },
]
const activeSocials = socials.filter((s) => s.url)
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row g-5">
        <!-- Brand -->
        <div class="col-12 col-lg-4">
          <router-link to="/" class="site-footer__logo" aria-label="CV Shankara Konsultan, ke beranda">
            <img :src="logoVerWhite" alt="Shankara Konsultan" width="210" height="135" />
          </router-link>

          <p class="site-footer__about">
            Mitra profesional dalam jasa konsultansi teknik dan penyediaan tenaga kerja untuk solusi konstruksi dan
            non-konstruksi terbaik.
          </p>

          <ul v-if="activeSocials.length" class="site-footer__socials">
            <li v-for="s in activeSocials" :key="s.name">
              <a :href="s.url" target="_blank" rel="noopener" :aria-label="s.name">
                <i class="bi" :class="s.icon" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <!-- Navigation -->
        <div class="col-6 col-lg-2">
          <h4 class="site-footer__title">Navigasi</h4>
          <ul class="site-footer__list">
            <li v-for="l in navLinks" :key="l.to">
              <router-link :to="l.to" class="site-footer__link">{{ l.label }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="col-6 col-lg-3">
          <h4 class="site-footer__title">Layanan</h4>
          <ul class="site-footer__list">
            <li v-for="s in serviceLinks" :key="s.id">
              <router-link :to="{ path: '/services', hash: `#${s.id}` }" class="site-footer__link">
                {{ s.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-12 col-lg-3">
          <h4 class="site-footer__title">Hubungi Kami</h4>
          <ul class="site-footer__contact">
            <li>
              <i class="bi bi-geo-alt-fill" aria-hidden="true"></i>
              <a :href="mapsUrl" target="_blank" rel="noopener">
                <address>
                  JL. Meliwis Putih No.15 B, RT 009, RW 002, Ngrowo, Bojonegoro, Kab. Bojonegoro, 62116
                </address>
              </a>
            </li>
            <li>
              <i class="bi bi-telephone-fill" aria-hidden="true"></i>
              <a href="tel:+6282333958889">082333958889</a>
            </li>
            <li>
              <i class="bi bi-envelope-fill" aria-hidden="true"></i>
              <a href="mailto:shankarakonsultan@gmail.com">shankarakonsultan@gmail.com</a>
            </li>
          </ul>

          <a :href="whatsappUrl" target="_blank" rel="noopener" class="site-footer__cta">
            <i class="bi bi-whatsapp" aria-hidden="true"></i>
            Chat via WhatsApp
          </a>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>&copy; {{ year }} CV SHANKARA KONSULTAN. Seluruh Hak Dilindungi.</p>
      </div>
    </div>
  </footer>
</template>