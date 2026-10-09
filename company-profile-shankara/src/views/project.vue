<script setup>
const base = 'https://speedyui-static.s3.amazonaws.com/portfolio/portfolio-2'

const projects = [
  { id: 1, img: `${base}/wk-1.jpg`, category: 'Logo', title: 'Creative Web Design' },
  { id: 2, img: `${base}/wk-2.jpg`, category: 'Brand', title: 'Brand Design' },
  { id: 3, img: `${base}/wk-3.jpg`, category: 'Social Media', title: 'Digital Marketing' },
  { id: 4, img: `${base}/wk-4.jpg`, category: 'Agency', title: 'Creative Design' },
  { id: 5, img: `${base}/wk-5.jpg`, category: 'Logo', title: 'Creative Web Design' },
  { id: 6, img: `${base}/wk-6.jpg`, category: 'Flare', title: 'Graphics Design' },
]
</script>

<template>
  <!--====================== Start Portfolio Section ======================-->
  <div class="container">
    <div class="row mb-5">
      <div class="col-12">
        <div class="heading-wrapper text-center">
          <span class="heading-badge px-4 py-2 d-inline-block rounded-pill text-white mb-2 bg-warning">PORTOFOLIO</span>
          <h2 class="display-5 fw-semibold">Our Recent Work</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div v-for="p in projects" :key="p.id" class="col-lg-4 col-sm-6 mt-4">
        <div class="portfolio-wrapper card border-0 shadow">
          <div class="card-header p-0 border-0 position-relative overflow-hidden">
            <img :src="p.img" class="card-img-top" alt="" />
            <div class="card-img-overlay d-flex justify-content-center align-items-center">
              <a href="#">
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div class="card-body p-4">
            <p class="card-text text-muted mb-2"><small>{{ p.category }}</small></p>
            <h4 class="fw-semibold">{{ p.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================== End Portfolio Section ======================-->

  <div class="b-example-divider divider"></div>
</template>