<template>
  <main>
    <Header invertColors />
    <section class="project">
      <div
        class="album-info"
        :style="{
          backgroundColor: `${
            release.colors ? release.colors.background : '#f7f7f7'
          }`,
          color: `${release.colors ? release.colors.foreground : '#000'}`,
        }"
      >
        <div class="container">
          <div class="album-cover">
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
          <div class="details">
            <h1>{{ release.title }}</h1>
            <div class="meta">
              {{ release.date }} <span>·</span> {{ release.genre }}
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
      </div>
      <div class="section-container description">
        <p v-if="release.description">{{ release.description }}</p>
        <div class="tracklist">
          <b>Tracklist:</b>
          <ol>
            <li v-for="track in release.tracklist" :key="track">
              {{ track }}
            </li>
          </ol>
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
      console.log(
        require(`~/static/assets/music/${release.id}.png?lqip-colors`)
      )
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
.project {
  padding: 0 1.5rem 1rem;
}
.album-info {
  width: 100vw;
  margin-left: -1.5rem;
  padding: 1.5rem;

  .album-cover,
  picture,
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

  & > * {
    margin-bottom: 0.65rem;
  }
}
h1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0.5rem 0 0.25rem;
  font-size: 2.15rem;
}
.meta {
  font-size: 1rem;
}
p {
  font-size: 1.1rem;
  line-height: 1.3;
}
.description {
  margin-top: 1.5rem;
}
.tracklist {
  font-size: 1.035rem;
}
li {
  margin: 0.5rem 0;
}
@media screen and (min-width: 768px) {
  header {
    padding: 2rem 0;
  }
  .project {
    padding: 0 0 3rem;
  }
  .album-info {
    width: 100%;
    margin: 0;
    padding: 1.5rem 0;

    h1 {
      margin: 0 0 0.25rem;
      font-size: 2.45rem;
    }

    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      max-width: 80%;
      margin: auto;
    }

    .album-cover {
      width: 15rem;
      height: 15rem;
      margin-right: 3rem;
    }

    .links {
      flex-flow: row wrap;

      & > * {
        font-size: 1rem;
        margin-right: 0.65rem;
      }
    }
  }
  .description {
    display: flex;

    & > * + * {
      padding-left: 3rem;
    }

    p {
      max-width: 65%;
      margin-top: 0;
    }

    .tracklist {
      flex-grow: 1;

      ol {
        max-height: 20vh;
        overflow: hidden;
        overflow-y: auto;
      }
    }
  }
}
</style>
