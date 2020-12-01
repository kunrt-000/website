<template>
  <div class="hero">
    <div class="left">
      <h1>Turning Bits Into<br />Beauty</h1>
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
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 4vw 0 7.25vw 0;

  .left {
    display: flex;
    justify-content: flex-start;
  }

  .right {
    margin-left: 2vw;
  }

  .description {
    max-width: 55%;
  }

  h1 {
    text-align: right;
  }

  p {
    font-size: 1.65vw;
    font-weight: 300;
    line-height: 1.2;
  }

  .call-to-action {
    max-width: max-content;
    margin-top: 3vw;
  }
}

.link {
  font-weight: 500;
  font-size: 1.25vw;
  color: #000;
  display: block;
  margin-top: 1vw;
  text-align: center;
}

.button {
  font-size: 1.45vw !important;
}
</style>