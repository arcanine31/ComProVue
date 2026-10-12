<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/images/logo_hor_white.png'

const whatsappUrl =
  'https://wa.me/6282333958889?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Anda.%0A%0ABoleh%20minta%20informasi%20lebih%20lanjut%3F'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/services', label: 'Layanan' },
  { to: '/projects', label: 'Projek' },
]

// Mobile menu is controlled by Vue (no Bootstrap JS needed) and closes after every page change
const open = ref(false)
const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="site-nav">
    <nav class="container site-nav__bar" aria-label="Navigasi utama">
      <router-link to="/" class="site-nav__brand" aria-label="CV Shankara Konsultan, ke beranda">
        <img :src="logo" alt="Shankara Konsultan" width="323" height="50" />
      </router-link>

      <button
        type="button"
        class="site-nav__toggle"
        :aria-expanded="open"
        aria-controls="site-menu"
        aria-label="Buka atau tutup menu"
        @click="open = !open"
      >
        <i class="bi" :class="open ? 'bi-x-lg' : 'bi-list'" aria-hidden="true"></i>
      </button>

      <div id="site-menu" class="site-nav__menu" :class="{ 'is-open': open }">
        <ul class="site-nav__list">
          <li v-for="l in links" :key="l.to">
            <router-link :to="l.to" class="site-nav__link" active-class="is-active" exact-active-class="is-active">
              {{ l.label }}
            </router-link>
          </li>
        </ul>

        <a :href="whatsappUrl" target="_blank" rel="noopener" class="site-nav__cta">
          <i class="bi bi-whatsapp" aria-hidden="true"></i>
          Hubungi Kami
        </a>
      </div>
    </nav>
  </header>
</template>