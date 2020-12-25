<template>
  <div id="home">
    <style>
      @media screen and (min-width: 768px) {
        body::after {
          content: '';
          display: block !important;
          background: #1b1b1b;
          background: var(--alt-bg-1);
          height: 40rem;
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
    padding: 3rem 5rem;
  }
}
</style>
