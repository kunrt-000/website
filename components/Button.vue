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
  background: #000;
  color: #fff;
  border: 1px solid #000;
  font-weight: 400;
  padding: 1.05vw 2.5vw;
  font-size: 1.15vw;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, color 0.15s;

  &:hover {
    background: var(--main-bg);    
    color: var(--alt-bg-2);
  }
}

@media screen and (max-width: 800px) {
  .button {
    padding: 1.05rem 2.5rem;
    font-size: 1.15rem !important;
  }
}
</style>