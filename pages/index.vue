<template>
  <div id="home">
    <style>
    body::after {
      content: '';
      display: block;
      background: #1b1b1b;
      height: 100vh;
      width: 54%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
    @media screen and (max-width: 800px) {body::after{display: none;}}
    </style>
    <div class="section" id="main-section">
      <Header page="home" />
      <Hero />
    </div>
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
#main-section {
  padding: 2.5vw 7.25vw 2vw;
}

@media screen and (max-width: 800px) {
  #main-section {
    padding: 1.5rem;
  }
}
</style>