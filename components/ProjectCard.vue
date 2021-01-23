<template>
  <NuxtLink
    :to="`/${type === 'work' ? 'project' : 'music'}/${project.id}`"
    class="project-card"
  >
    <div class="details">
      <div class="title">{{ project.title }}</div>
      <div class="category" v-if="type === 'work'">
        {{ project.category }} · {{ project.workType }}
      </div>
      <div class="category" v-if="type === 'music'">
        {{ project.date }} ·
        {{
          typeof project.genre === 'object' ? project.genre[0] : project.genre
        }}
      </div>
    </div>
    <div class="overlay"></div>
    <div class="image">
      <img
        :src="
          require(`~/static/assets/${type === 'work' ? 'projects' : 'music'}/${
            type === 'work' ? `${project.id}/img.png` : `${project.id}.png`
          }`)
        "
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
    type: String as () => ProjectCardType,
  },
})
</script>

<style lang="scss" scoped>
.project-card {
  display: flex;
  position: relative;
  color: #fff;
  text-decoration: none;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
.details {
  padding: 1.75rem 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  max-width: 100%;
}
.title {
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.category {
  font-size: 0.85rem;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: background 0.15s;
}
.image {
  width: 100%;
  width: calc(100vw - 3rem);
  height: 100%;
  height: calc(100vw - 3rem);
}
img {
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 768px) {
  .project-card {
    margin: 0 !important;
    &:hover {
      .overlay {
        background: rgba(0, 0, 0, 0.85);
      }
    }
  }
  .details {
    padding: 1.5rem 1.65rem;
  }
  .music-card .title {
    font-size: 1.6rem;
  }
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
