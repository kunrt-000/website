<template>
  <NuxtLink :to="`/project/${project.id}`" class="project-card">
    <div class="details">
      <h1 class="title">{{ project.title }}</h1>
      <div class="category">
        {{ project.category }} · {{ project.workType }}
      </div>
    </div>
    <div class="overlay"></div>
    <div class="image">
      <img
        :src="require(`~/assets/projects/${project.id}/img.png`)"
        :alt="project.title"
        loading="lazy"
      />
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    project: Object as () => Project,
  },
})
</script>

<style lang="scss" scoped>
.project-card {
  position: relative;

  .details,
  .overlay {
    transition: opacity 0.15s;
    opacity: 0;
  }

  &:hover {
    .details,
    .overlay {
      opacity: 1;
    }
  }

  .details {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding: 2.5vw 3vw;
    width: 100%;
    color: #fff;

    h1 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .category {
      color: #d8d8d8;
    }
  }

  .overlay {
    background: #000000ab;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .image {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
      height: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }
}

@media screen and (max-width: 800px) {
  .project-card {
    img {
      width: 100%;
      height: auto !important;
      transform: translate(-50%, -50%) !important;
      top: 50% !important;
    }
  }
}
</style>