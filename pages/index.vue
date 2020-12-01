<template>
  <div id="home">
    <div class="section" id="main-section">
      <Header page="home" />
      <Hero />
    </div>
    <AboutSection />
    <WorkSection />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
body::after {
  content: '';
  display: block;
  background: #fbe6cd;
  height: 100vh;
  width: 54%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
</style>

<style lang="scss" scoped>
#main-section {
  padding: 2.5vw 7.25vw 2vw;
}
</style>