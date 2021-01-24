<template>
  <div class="hero">
    <div class="left">
      <h1>Turning Bits Into Beauty</h1>
      <div class="description">
        <p>I’m a frontend developer, web designer & musician.</p>
        <p>I make websites & apps that look beautiful and perform well.</p>
      </div>
      <div class="call-to-action">
        <Button label="View My Work" href="#work-section" />
        <Button label="Contact Me" href="#contact-section" outlined />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
  margin: 2.5rem 0 1.75rem;
}

p {
  font-size: 1.1rem;
}

.call-to-action {
  margin-top: 2rem;
  margin-bottom: 1.75rem;

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
}

.link {
  display: none;
}

@media screen and (min-width: 768px) {
  .hero {
    margin: 0;
  }
  .left {
    width: 50%;
  }
  h1 {
    margin: 6rem 0 2rem;
    font-size: 4.5rem;
    width: 10ch;
  }
  p {
    font-size: 1.25rem;
    margin: 0;
  }
  p:not(:last-child) {
    margin-bottom: 0.6rem;
  }
  .call-to-action {
    margin-top: 2.8rem;
    margin-bottom: 0;

    & > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
}
</style>
