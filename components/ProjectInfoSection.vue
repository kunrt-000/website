<template>
  <section class="project-info">
    <div class="left">
      <picture>
        <source
          :srcSet="
            require(`~/static/assets/projects/${project.id}/img.png?webp`)
          "
          type="image/webp"
        />
        <source
          :srcSet="require(`~/static/assets/projects/${project.id}/img.png`)"
          type="image/png"
        />
        <img
          :src="require(`~/static/assets/projects/${project.id}/img.png`)"
          :alt="project.title"
          loading="lazy"
        />
      </picture>
    </div>
    <div class="right">
      <h1 class="title">{{ project.title }}</h1>
      <div class="mini">{{ project.category }} · {{ project.workType }}</div>
      <Button label="Visit Website" :href="project.link" />
      <p class="description" v-html="project.description"></p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
  },
  head() {
    return {
      title: `${this.project.title} - Aman Harwara`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.description.split('<br/>')[0],
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.project.title} - Aman Harwara`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.project.description.split('<br/>')[0],
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://amanharwara.com/project/${this.project.id}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://amanharwara.com/assets/projects/${this.project.id}/img.png`,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: `summary_large_image`,
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `https://amanharwara.com/project/${this.project.id}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.project.title} - Aman Harwara`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.project.description.split('<br/>')[0],
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https://amanharwara.com/assets/projects/${this.project.id}/img.png`,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
section {
  padding: 1rem 1.5rem 0;
}
.left {
  width: 100%;
  img {
    width: 100%;
  }
}
h1 {
  font-size: 2.25rem;
  font-weight: 900;
  margin: 1rem 0;
}
.mini {
  margin: 0 0 1rem;
  color: #131313;
}
@media screen and (min-width: 768px) {
  section {
    padding: 0 5rem 0;
    display: flex;
    align-items: flex-start;
  }
  .left {
    max-width: 37%;
  }
  .right {
    max-width: 60%;
    padding: 0 4rem;
  }
  h1 {
    margin: 0 0 0.5rem;
    font-size: 3rem;
  }
  a {
    margin: 0.5rem 0;
  }
  p {
    font-size: 1.1rem;
    max-width: 85%;
  }
}
</style>
