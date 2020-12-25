<template>
  <a class="button" :href="href">
    <div class="icon" v-if="hasIcon"></div>
    <div class="label">{{ label }}</div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    hasIcon: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  background: #080808;
  padding: 1rem 1.75rem;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  transition: background 0.25s;
  &:hover {
    background: #3f3f3f;
    color: #fff;
  }
}
</style>
