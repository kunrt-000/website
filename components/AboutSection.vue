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
  background: #080808;
  background: var(--alt-bg-2);
  color: #ebebeb;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 6vw 7.25vw;
}

.left {
  display: flex;
  justify-content: flex-start;
}

.right {
  margin-left: 2vw;
}

p {
  font-size: 1.45vw;
  line-height: 1.3;
  font-weight: 300;
  max-width: 80%;
}

@media screen and (max-width: 800px) {
  #about-section {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;

    p {
      font-size: 1rem;
      max-width: 100%;

      &:last-child {margin-bottom: 0;}
    }

    .right {
      margin: 0;
    }
  }
}
</style>