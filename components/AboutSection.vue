<template>
  <div class="section" id="about-section">
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
  </div>
</template>

<style lang="scss" scoped>
#about-section {
  background: #ffe0bb;
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  grid-template-rows: auto;
}

p {
  font-size: 1.45vw;
  line-height: 1.3;
  font-weight: 300;
}
</style>