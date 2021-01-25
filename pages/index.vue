<template>
  <div id="home">
    <main class="section" id="main-section">
      <Header page="home" />
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
    --gap: calc(6rem + 2vh);
    padding: 3rem 5rem 6rem;
    padding: max(3rem, 2vw) max(5rem, 3vw) calc(var(--gap) + 1rem + 2vh);
    position: relative;
  }
  .topography-container {
    position: absolute;
    width: 100%;
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
      background: linear-gradient(to right, var(--main-bg) 35%, transparent);
    }
  }
}
</style>
