<template>
  <section>
    <div class="section-container">
      <h1>Support my music / open-source work:</h1>
      <div class="links">
        <a
          href="https://liberapay.com/aman_harwara/donate"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <div class="icon">
            <Liberapay />
          </div>
          <div class="title">Liberapay</div>
          <div class="content"><NewTab /></div>
        </a>
        <a
          href="https://buymeacoffee.com/amanharwara"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <div class="icon">
            <BuyMeACoffee />
          </div>
          <div class="title">Buy Me a Coffee</div>
          <div class="content"><NewTab /></div>
        </a>
        <a
          href="https://ko-fi.com/amanharwara"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          <div class="icon">
            <KoFi />
          </div>
          <div class="title">Ko-Fi</div>
          <div class="content"><NewTab /></div>
        </a>
        <div class="link">
          <div class="icon">
            <Bitcoin />
          </div>
          <div class="title">Bitcoin</div>
          <div class="content">3B1sPK1casTLbCEiLtkaBM82ZZi4XspWzy</div>
        </div>
        <div class="link">
          <div class="icon">
            <Ethereum />
          </div>
          <div class="title">Ethereum</div>
          <div class="content">0xC9CF5bCD07aD9f7F0ae4C63B3A64f1F2dAC347Fa</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
section {
  padding: 1.5rem;
  background: #f8f8f8;
}
h1 {
  margin-top: 0;
}
.links {
  display: flex;
  flex-flow: row wrap;

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
}
.link {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #f1f1f1;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
  text-align: center;
  padding: 0.5rem 1.5rem;

  &:hover {
    background: #16172b;
    color: #fff;
    fill: #fff;
  }

  .icon {
    width: 45%;
    height: 45%;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    margin: 1.25rem 0 0;
    font-weight: bold;
    font-size: 1.45rem;
  }

  .content {
    width: 100%;
    word-break: break-all;

    svg {
      margin-top: 0.25rem;
      width: 1.75em;
      height: 1.75em;
    }
  }
}
@media screen and (min-width: 768px) {
  section {
    padding: 3rem 0;
  }
  h1 {
    font-size: 2rem;
  }
  .links {
    flex-flow: row nowrap;
    border: 1px solid #0a0a0a21;

    & > :not(:last-child) {
      margin: 0;
      border-right: 1px solid #0a0a0a21;
    }
  }
  .link {
    padding: 1.5em;
    width: auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;

    .icon {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
}
</style>
