<template>
  <main>
    <Header invertColors />
    <section class="project">
      <div class="section-container flex">
        <div class="left">
          <h1>{{ release.title }}</h1>
          <div class="meta">
            {{ release.date }} <span>·</span> {{ release.genre }}
          </div>
          <p>{{ release.description }}</p>
          <div class="tracklist">
            <b>Tracklist:</b>
            <ol>
              <li v-for="track in release.tracklist" :key="track">
                {{ track }}
              </li>
            </ol>
          </div>
        </div>
        <div class="right">
          <div class="cover">
            <picture>
              <source
                :srcSet="
                  require(`~/static/assets/music/${release.id}.png?webp`)
                "
                type="image/webp"
              />
              <source
                :srcSet="require(`~/static/assets/music/${release.id}.png`)"
                type="image/png"
              />
              <img
                :src="require(`~/static/assets/music/${release.id}.png`)"
                :alt="`Cover art for ${release.title}`"
                loading="lazy"
              />
            </picture>
          </div>
          <div class="links">
            <Button
              :href="release.links.bandcamp"
              label="Buy on Bandcamp"
              newTab
              hasIcon
            >
              <Bandcamp />
            </Button>
            <Button
              :href="release.links.apple"
              label="Listen on Apple Music"
              newTab
              hasIcon
            >
              <AppleMusic />
            </Button>
            <Button
              :href="release.links.spotify"
              label="Listen on Spotify"
              newTab
              hasIcon
            >
              <Spotify />
            </Button>
          </div>
        </div>
      </div>
    </section>
    <SupportSection />
    <Footer />
  </main>
</template>

<script>
import Vue from 'vue'
import releases from '@/data/music'
export default Vue.extend({
  computed: {
    release() {
      let id = this.$route.params.id
      let release = releases
        .map((release) => {
          let genre = release.genre
          return {
            ...release,
            genre: typeof genre === 'object' ? genre.join(' / ') : genre,
          }
        })
        .find((release) => release.id === id)
      return release
    },
  },
  head() {
    return {
      title: `${this.release.title} - Aman Harwara`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.release.description.split('<br/>')[0],
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.release.title} - Aman Harwara`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.release.description.split('<br/>')[0],
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://amanharwara.com/music/${this.release.id}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://amanharwara.com/assets/music/${this.release.id}.png`,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: `summary_large_image`,
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `https://amanharwara.com/music/${this.release.id}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.release.title} - Aman Harwara`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.release.description.split('<br/>')[0],
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `https://amanharwara.com/assets/music/${this.release.id}.png`,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 1rem 1.5rem;
}
section {
  padding: 0 1.5rem 1rem;
}
.project .section-container {
  flex-flow: column-reverse nowrap;
}
.cover {
  img {
    width: 100%;
  }
}
.links {
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem 0 0;

  .icon,
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  & > :not(:last-child) {
    margin-bottom: 0.65rem;
  }
}
h1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 2rem 0 1rem;
  font-size: 2rem;
}
.meta {
  font-size: 0.9rem;
}
p {
  font-size: 1.1rem;
  line-height: 1.3;
}
.tracklist {
  font-size: 1.035rem;
}
li {
  margin: 0.5rem 0;
}
@media screen and (min-width: 768px) {
  header {
    padding: 2rem 0 3.25rem;
  }
  section {
    padding: 0 0 3rem;
  }
  .project .section-container {
    display: flex;
    flex-flow: row nowrap;
  }
  .left {
    width: 65%;
    padding-right: 5rem;
  }
  .right {
    width: 35%;
  }
  h1 {
    font-size: 3rem;
    margin-top: 0;
  }
  .meta {
    font-size: 0.95rem;
  }
  .links {
    a {
      padding: 0.75rem 1rem;
    }
  }
}
</style>
