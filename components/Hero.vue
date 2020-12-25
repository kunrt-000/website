<template>
  <div class="hero">
    <div class="left">
      <h1>Turning Bits Into Beauty</h1>
    </div>
    <div class="right">
      <div class="description">
        <p>I’m a frontend developer, web designer & musician.</p>
        <p>I make websites & apps that look beautiful and perform well.</p>
      </div>
      <div class="call-to-action">
        <Button label="View My Work" href="#work-section" />
        <a href="#contact-section" class="link">Contact Me</a>
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
  font-weight: 900;
  font-size: 3rem;
  margin: 0 0 2rem;
}

p {
  font-size: 1.1rem;
}

.call-to-action {
  margin-top: 2rem;
  margin-bottom: 1.75rem;
}

.link {
  display: none;
}

@media screen and (min-width: 768px) {
  .hero {
    display: flex;
    align-items: flex-start;
    margin: 0 0 5rem;
  }
  .left {
    width: 50%;
    padding-right: 5rem;
  }
  .right {
    width: 50%;
    padding-left: 5rem;
    color: #fff;
  }
  h1 {
    margin-top: 0;
    font-size: 4rem;
    text-align: right;
  }
  p {
    font-size: 1.25rem;
    max-width: 65%;
  }
}
</style>
