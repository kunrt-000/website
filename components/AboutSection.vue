<template>
  <section id="about-section">
    <div class="left">
      <h1>Hi!<br />I'm Aman Harwara</h1>
    </div>
    <div class="right">
      <p>
        I’m a programmer – specializing in frontend web development & design.
      </p>

      <p>
        I’ve been making websites for more than 3 years and have experience in
        frameworks like React, Vue and Svelte.
      </p>

      <p>
        Programming is something I’ve been doing since my childhood, always
        trying out something new.
      </p>

      <p>
        Other than programming, music is one of my main creative outlets. I make
        electronic & ambient music.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 1.5rem;
  background: #080808;
  color: #fff;
}
@media screen and (min-width: 768px) {
  section {
    padding: 5rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .left {
    width: 40%;
  }
  h1 {
    font-size: 3rem;
    margin-top: 0;
    text-align: left;
  }
  .right {
    width: 40%;
    margin: auto;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.3;

    &:first-child {
      margin-top: 0;
    }
  }

  @supports (width: max(1rem, 1vw)) {
    section {
      padding: max(5rem, 5vw) max(5rem, 3vw);
    }
    h1 {
      font-size: max(3rem, 1.85vw);
    }
    p {
      font-size: max(1.1rem, 1vw);
    }
  }
}
</style>
