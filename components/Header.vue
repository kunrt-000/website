<template>
  <div class="header">
    <div class="logo">Aman Harwara</div>
    <nav-bar :menu="menu" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './NavBar.vue'

let default_menu: NavMenu = [
  {
    label: 'Work',
    link: '#work-section',
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
  }
}
</style>
