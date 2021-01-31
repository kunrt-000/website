<template>
  <a class="button" :href="href" v-bind:class="{ outlined }">
    <div class="icon" v-if="hasIcon">
      <slot />
    </div>
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
    outlined: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  background: #080808;
  padding: 1rem 1.75rem;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  transition: background 0.25s;
  border: 1px solid transparent;

  .icon {
    display: flex;
    fill: #fff;
    margin-right: 1rem;
  }

  &:hover {
    background: #3f3f3f;
    color: #fff;
  }

  &.outlined {
    background: transparent;
    border-color: #080808;
    color: #080808;

    &:hover {
      background: #080808;
      color: #fff;

      .icon {
        fill: #fff;
      }
    }

    .icon {
      fill: #080808;
    }
  }
}
@media screen and (min-width: 768px) {
  @supports (width: max(1rem, 1vw)) {
    .button {
      font-size: max(1.1rem, 0.675vw);
      padding: max(1rem, 0.65vw) max(1.75rem, 1.2vw);
    }
  }
}
</style>
