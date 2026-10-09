<script setup>
// If you placed your images in src/assets/images/, Vite will bundle this automatically.
// Alternatively, if you put logo_hor_white.png in the public/ folder, you can just use src="/images/logo_hor_white.png"
</script>

<template>
  <!--=============== Start Header Section  ===============-->
  <header class="speedyui speedyui-header">
    <nav class="navbar navbar-expand-lg py-2 align-items-center">
      <div class="container">
        
        <!-- Replaced standard <a> with <router-link> for the brand logo -->
        <router-link class="navbar-brand" to="/">
          <img src="../assets/images/logo_hor_white.png" alt="Shankara Logo" width="323" height="50">
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="navbar-collapse collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <!-- Home -->
            <li class="nav-item py-2 py-lg-4">
              <!-- active-class="active" tells Vue to automatically apply Bootstrap's "active" class when on this route -->
              <router-link class="nav-link px-lg-4 py-0" active-class="active" to="/">
                Beranda
              </router-link>
            </li>

            <!-- About -->
            <li class="nav-item py-2 py-lg-4">
              <router-link class="nav-link px-lg-4 py-0" active-class="active" to="/about">
                Tentang Kami
              </router-link>
            </li>

            <!-- Service -->
            <li class="nav-item py-2 py-lg-4">
              <router-link class="nav-link px-lg-4 py-0" active-class="active" to="/services">
                Layanan
              </router-link>
            </li>

            <!-- Project -->
            <li class="nav-item py-2 py-lg-4">
              <router-link class="nav-link px-lg-4 py-0" active-class="active" to="/projects">
                Projek
              </router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!--=============== End Header Section  ===============-->
</template>

<style scoped>
/* Any custom CSS specific to the navbar goes here */
</style>