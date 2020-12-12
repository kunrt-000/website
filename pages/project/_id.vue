<template>
  <div id="project">
    <style>
    body::after {
      content: '';
      display: block;
      background: #1b1b1b;
      background: var(--alt-bg-1);
      height: 80vh;
      width: 33.5%;
      position: absolute;
      top: 0;
      left: 3.65vw;
      z-index: -1;
    }
    </style>
    <Header page="project" invertColors />
    <ProjectInfoSection :project="project"/>
    <div class="screenshots">
      <img :src="require(`~/assets/projects/${project.id}/screenshots/${src}`)" :alt="`${project.title} Screenshot`" :key="src" v-for="src in project.screenshots">
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import projects from "@/data/projects"
export default Vue.extend({
  computed: {
    project() {
      let id = this.$route.params.id;
      let project = projects.find(project => project.id === id);
      return project;
    }
  }
})
</script>

<style lang="scss" scoped>
header, .screenshots {
  padding: 2.5vw 7.25vw 1.5vw;
}

.screenshots {
  img {
    width: 100%;
    margin-bottom: 4vw;
  }
}

@media screen and (max-width: 800px) {
  header, .screenshots {
    padding: 1.5rem;
  }
}
</style>