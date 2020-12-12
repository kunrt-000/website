<template>
  <div class="section" id="contact-section">
    <h1>Get in touch!</h1>
    <div class="right">
      <p>
        I’m available for freelance work, so if you are interested in working
        together on a project, be sure to drop an email.
      </p>
      <Button label="E-mail me!" href="mailto:amanharwara@protonmail.com" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact-section {
  background: #1b1b1b;
  background: var(--alt-bg-1);
  color: #ebebeb;
  display: grid;
  grid-template-columns: 0.65fr 1fr;
  grid-template-rows: auto;
  padding: 5vw 7.25vw;
}
p {
  font-size: 1.45vw;
  line-height: 1.3;
  font-weight: 300;
  max-width: 80%;
  margin-top: 0.45vw;
  margin-bottom: 2.25vw;
}
@media screen and (max-width: 800px) {
  #contact-section {
    padding: 1.75rem;
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.15rem;
      max-width: 100%;
      margin: 0.85rem 0 1.25rem;
      line-height: 1.4;
    }
  }
}
</style>