<template>
  <div id="home">
    <Header page="home" />
    <main class="section" id="main-section">
      <Hero />
      <div class="topography-container">
        <Topography />
        <div class="overlay"></div>
      </div>
    </main>
    <AboutSection />
    <WorkSection />
    <MusicSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
main {
  padding: 1.5rem;
}
.topography-container svg {
  display: none;
}
@media screen and (min-width: 768px) {
  main {
    padding: 2rem 5rem 5.5rem;
    position: relative;
  }
  .topography-container {
    position: absolute;
    width: 100%;
    height: 105vh;
    left: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;

    svg {
      display: block;
      opacity: 0.05;
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      background: linear-gradient(to right, #fff 35%, transparent);
    }
  }
}
</style>
