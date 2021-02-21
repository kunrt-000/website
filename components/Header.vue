<template>
  <header
    class="header section-container"
    v-bind:class="{ invert: invertColors }"
  >
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
  font-size: 1.15rem;
}

.logo {
  text-decoration: none;
  color: #000;
}
</style>
