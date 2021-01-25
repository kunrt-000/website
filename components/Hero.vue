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
    margin: 6rem 0 0;
    margin-top: var(--gap);
  }
  h1 {
    margin-bottom: 2rem;
    margin-bottom: max(2rem, 1.45vw);
    font-size: 4.5rem;
    font-size: max(4.5rem, 3vw);
    width: 10ch;
  }
  p {
    font-size: 1.2rem;
    font-size: max(1.2rem, 0.675vw);
    margin: 0;
  }
  p:not(:last-child) {
    margin-bottom: 0.6rem;
  }
  .call-to-action {
    margin-top: 2.8rem;
    margin-top: max(2.8rem, 1.75vw);
    margin-bottom: 0;

    & > :not(:last-child) {
      margin-bottom: 0;
      margin-right: 1rem;
      margin-right: max(1rem, 0.85vw);
    }
  }
}
</style>
