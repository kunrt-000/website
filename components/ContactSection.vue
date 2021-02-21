<template>
  <section id="contact-section">
    <div class="section-container flex">
      <h1>Get in touch!</h1>
      <div class="right">
        <p>
          I’m available for freelance work, so if you are interested in working
          together on a project, be sure to drop an email.
        </p>
        <Button
          label="E-mail me!"
          href="mailto:amanharwara@protonmail.com"
          class="light"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 1.5rem;
  background: #1b1b1b;
  color: #fff;
}
h1 {
  margin-top: 0;
}
.light {
  background: #fff;
  color: #000;
  margin: 1rem 0 0.5rem;
}
@media screen and (min-width: 768px) {
  section {
    padding: 3rem 0;
  }
  h1 {
    margin-right: 5rem;
    font-size: 3rem;
    margin-top: 0;
    text-align: left;
  }
  p {
    margin-top: 0;
  }
  .right {
    width: 50%;
  }
}
</style>
