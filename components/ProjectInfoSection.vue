<template>
  <div class="project-info section">
    <div class="left">
      <img :src="require(`~/assets/projects/${project.id}/img.png`)" :alt="project.title">
    </div>
    <div class="right">
      <h1 class="title">{{project.title}}</h1>
      <div class="mini">{{project.category}} · {{project.workType}}</div>
      <Button label="Visit Website" :href="project.link"/>
      <p class="description">{{project.description}}</p>
    </div>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    project: {
      type: Object as () => Project,
      required: true,
    }
  }
})
</script>

<style lang="scss" scoped>
  .project-info {
    padding-top: 1vw;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: auto;
    gap: 7.25vw;

    .left {
      img {
        width: 100%;
      }
    }

    .right {
      .mini {
        margin: 0.5vw 0 1.5vw;
      }

      .button {
        margin: 0.5vw 0;
        font-size: 1.5vw;
      }

      p {
        margin: 1.75vw 0 0;
        font-size: 1.35vw;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .project-info {
      display: flex;
      flex-direction: column;
      gap: 0;

      .right {
        margin: 1rem 0 0;

        .mini {
          margin: 0.5rem 0 1rem;
        }

        p {
          font-size: 1rem;
          margin: 1.5rem 0 0;
        }
      }

      h1 {
        font-size: 3rem;
      }
    }
  }
</style>