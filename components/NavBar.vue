<template>
  <nav class="navbar" v-bind:class="{invert: invertColors}">
    <ul>
      <li v-for="item in menu" :key="item.label">
        <a :href="item.link">
          {{ item.label }}
        </a>
      </li>
    </ul>
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
    invertColors: {
      type: Boolean,
      default: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.navbar ul {
  display: flex;
  padding: 0;
  list-style: none;

  li:not(:last-child) {
    margin-right: 1.75vw;
  }

  a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.25vw;

    &:hover {
      text-decoration: underline;
    }
  }

  .invert>& a {
    color: #000;
  }
}

@media screen and (max-width: 800px) {
  .navbar {ul {display: none;} a {color: #fff !important;}}
}
</style>