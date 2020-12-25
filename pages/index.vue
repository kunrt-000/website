<template>
  <div id="home">
    <style>
      @media screen and (min-width: 768px) {
        body::after {
          content: '';
          display: block !important;
          background: #1b1b1b;
          background: var(--alt-bg-1);
          height: max(40rem, 50vh);
          width: 50vw;
          position: absolute;
          top: 0;
          right: 0;
          z-index: -1;
        }
      }
    </style>
    <Header page="home" />
    <main class="section" id="main-section">
      <Hero />
    </main>
    <AboutSection />
    <WorkSection />
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
@media screen and (min-width: 768px) {
  main {
    padding: 2rem 5rem 6rem;
    padding: max(2rem, 10vh) 5rem max(6rem, 20vh);
  }
}
</style>
