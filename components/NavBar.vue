<template>
  <nav class="navbar">
    <label for="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger" />
    <div class="links">
      <a :href="item.link" v-for="item in menu" :key="item.label">
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    menu: {
      type: Array as () => NavMenu,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
input {
  display: none;
}

label {
  font-size: 1.75rem;
}

input:checked ~ .links {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 3;
  padding: 0;
}

a {
  text-align: center;
  border-top: 1px solid rgba(44, 44, 44, 0.6);
  transition: background 0.15s;
  background: #fff;
  user-select: none;
  text-decoration: none;
  color: #000;
  padding: 1.1rem;

  &:hover {
    background: #1b1b1b;
    color: #fff;
  }

  &:last-child {
    border-bottom: 1px solid rgba(44, 44, 44, 0.6);
  }
}

.links {
  display: none;
  list-style: none;
  margin: 0;
}

@media screen and (min-width: 768px) {
  label {
    display: none;
  }
  .links {
    display: flex;
  }
  a {
    border: 0 !important;
    padding: 0;
    background: transparent;
    cursor: pointer;

    &:hover {
      background: initial;
      color: initial;
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}
</style>
