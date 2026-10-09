<script setup>
// Import your partials as Vue components
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- Equivalent to {% include "partials/navbar.html" %} -->
  <Navbar />
  
  <main>
    <!-- Equivalent to {% block content %} {% endblock %} -->
    <router-view />
  </main>
  
  <!-- Equivalent to {% include "partials/footer.html" %} -->
  <Footer />
</template>

<style>
/* You can put global CSS tweaks here if needed */
</style>