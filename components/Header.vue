<template>
  <header class="header" v-bind:class="{ invert: invertColors }">
    <a class="logo" href="/">Aman Harwara</a>
    <nav-bar :menu="menu" v-bind:class="{ invert: invertColors }" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './NavBar.vue'

let default_menu: NavMenu = [
  {
    label: 'Work',
    link: '/#work-section',
  },
  {
    label: 'Music',
    link: '/music',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
]

let music_menu: NavMenu = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Work',
    link: '/#work-section',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
]

export default Vue.extend({
  components: { NavBar },
  props: {
    page: {
      type: String,
      default: 'home',
    },
    invertColors: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    menu() {
      let menu

      switch (this.page) {
        case 'home':
          menu = default_menu
          break
        case 'music':
          menu = music_menu
          break
        default:
          menu = default_menu
          break
      }

      return menu
    },
  },
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 1rem 1.5rem;
}

.logo {
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  color: #000;
}

@media screen and (min-width: 768px) {
  header {
    padding: 2.5rem 5rem;
  }
  .logo {
    font-size: 1.5rem;
  }
}
</style>
