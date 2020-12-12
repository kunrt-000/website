<template>
  <header class="header" v-bind:class="{invert: invertColors}">
    <a class="logo" href="/">Aman Harwara</a>
    <nav-bar :menu="menu" invertColors/>
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
    }
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.45vw;
    font-weight: 700;
    text-decoration: none;
    color: #000;
  }

  &.invert {
    .logo {
      color: #fff;
    }
  }
}

@media screen and (max-width: 800px) {
  .logo {
    font-size: 1.25rem !important;
    color: #000 !important;
  }
}
</style>
