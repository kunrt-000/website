import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import styles from "@/styles/release/ReleasePage.module.scss";
import music from "@/data/music";
import Img from "react-optimized-image";
import Button from "@/components/Button";
import PlayIcon from "@/components/icons/PlayIcon";

const ReleasePage = ({ release }: { release: MusicRelease }) => (
  <div id="release-page" className={styles.page}>
    <Head>
      <title>{release.title} | Aman Harwara</title>
      <meta name="title" content={`${release.title} | Aman Harwara`} />
      <meta name="description" content={`${release.description}`} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://amanharwara.com/work/${release.id}`}
      />
      <meta property="og:title" content={`${release.title} | Aman Harwara`} />
      <meta property="og:description" content={`${release.description}`} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://amanharwara.com/work/${release.id}`}
      />
      <meta
        property="twitter:title"
        content={`${release.title} | Aman Harwara`}
      />
      <meta property="twitter:description" content={`${release.description}`} />
      <meta property="twitter:image" content="" />
    </Head>
    <section className={styles.section} data-split>
      <div className={styles.image}>
        <Img
          src={require(`../../public/img/music/${release.id}.png`)}
          alt={`Cover art for for ${release.title}`}
        />
      </div>
      <div className={styles.meta}>
        <div className={styles.date}>
          {new Date(release.date).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <h1 className={styles.title}>{release.title}</h1>
        <div className={styles.genre}>
          {typeof release.genre === "object"
            ? `${release.genre[0]}, ${release.genre[1]}`
            : release.genre}
        </div>
        <p className={styles.description}>{release.description}</p>
        <div className={styles.links}>
          <Button href={release.links.bandcamp} external={true}>
            Buy on Bandcamp
          </Button>
          <Button href={release.links.spotify} external={true} outlined>
            Listen on Spotify
          </Button>
          <Button href={release.links.apple} external={true} outlined>
            Listen on Apple Music
          </Button>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <h1>Tracklist</h1>
      <div className={styles.tracklist}>
        {release.tracklist.map((track, i) => (
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.track}
            key={i}
          >
            <div className={styles.play}>
              <div className={styles.playIcon}>
                <PlayIcon />
              </div>
              <div className={styles.number}>{i}</div>
            </div>
            <div className={styles.name}>{track.name}</div>
            <div className={styles.trackLength}>{track.length}</div>
          </a>
        ))}
      </div>
    </section>
  </div>
);

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  let release = music.find((release) => release.id === context?.params?.id);

  if (!release) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      release,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = music.map((release) => `/music/${release.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default ReleasePage;
