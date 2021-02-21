<template>
  <div class="hero section-container">
    <h1>Turning Bits Into Beauty</h1>
    <div class="description">
      <p>I’m a frontend developer, web designer & musician.</p>
      <p>I make websites & apps that look beautiful and perform well.</p>
    </div>
    <div class="call-to-action">
      <Button class="main-cta" label="View My Work" href="#work-section" />
      <Button
        class="secondary-cta"
        label="Contact Me"
        href="#contact-section"
        outlined
      />
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

.main-cta {
  font-size: 1.15rem !important;

  &:hover {
    background: #0f3774 !important;
  }
}

.secondary-cta {
  font-size: 1rem !important;
}

.link {
  display: none;
}

@media screen and (min-width: 768px) {
  .hero {
    margin-top: 4.5rem;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 4.5rem;
    line-height: 1.3;
    width: 10ch;
  }
  p {
    margin: 0;
  }
  p:not(:last-child) {
    margin-bottom: 0.6rem;
  }
  .call-to-action {
    margin-top: 2.8rem;
    margin-bottom: 0;

    & > :not(:last-child) {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }
}
</style>
