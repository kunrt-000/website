import Head from "next/head";
import Img from "react-optimized-image";
import music from "@/data/music";
import Button from "@/components/Button";
import Link from "next/link";
import styles from "@/styles/Music.module.scss";
import section from "@/styles/components/Section.module.scss";
import flex from "@/styles/util/Flex.module.scss";
import padding from "@/styles/util/Padding.module.scss";
import margin from "@/styles/util/Margin.module.scss";
import heading from "@/styles/typography/Heading.module.scss";

const createRows = (array: Array<any>, itemsPerRow: number) => {
  let groupedArray = [];
  for (let i = 0; i < array.length; i += itemsPerRow) {
    let row = array.slice(i, i + itemsPerRow);
    while (row.length < itemsPerRow) {
      row.push(null);
    }
    groupedArray.push(row);
  }
  return groupedArray;
};

export default function Music() {
  let featured = music.find((release) => release.id === "ode-to-messier");
  let grouped = createRows(music, 4);

  return (
    <div id="music-page">
      <Head>
        <title>Music - Aman Harwara</title>
        <meta name="title" content="Aman Harwara" />
        <meta
          name="description"
          content="A list of all the music Aman Harwara has produced & released so far."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amanharwara.com" />
        <meta property="og:title" content="Aman Harwara" />
        <meta
          property="og:description"
          content="A list of all the music Aman Harwara has produced & released so far."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://amanharwara.com" />
        <meta property="twitter:title" content="Aman Harwara" />
        <meta
          property="twitter:description"
          content="A list of all the music Aman Harwara has produced & released so far."
        />
        <meta property="twitter:image" content="" />
      </Head>
      <section className={`${section.section} ${padding.px} ${padding.py}`}>
        <h1 className={`${heading.mw} ${heading.mw_m} ${margin.my_100}`}>
          Featured
        </h1>
        <div
          className={`${styles.featured} ${flex.flex} ${flex.column_s} ${flex.row_m}`}
        >
          <div className={styles.cover}>
            <Link href={`/music/${featured?.id}`} passHref={true}>
              <a>
                <Img
                  webp
                  src={require(`../public/img/music/${featured?.id}.png`)}
                  alt={`Cover art for ${featured?.title}`}
                  sizes={[500, 1000, 2000]}
                  breakpoints={[768, 1366]}
                />
              </a>
            </Link>
          </div>
          <div className={styles.info}>
            <Link href={`/music/${featured?.id}`} passHref={true}>
              <a>
                <div className={styles.title}>{featured?.title}</div>
              </a>
            </Link>
            <div className={styles.meta}>
              {featured?.date} ·{" "}
              {typeof featured?.genre === "object"
                ? `${featured?.genre[0]} / ${featured?.genre[1]}`
                : featured?.genre}
            </div>
            <div className={styles.description}>{featured?.description}</div>
            <Button
              href={featured?.links?.bandcamp ? featured?.links?.bandcamp : ""}
              external={true}
            >
              Buy on Bandcamp
            </Button>
          </div>
        </div>
      </section>
      <section className={`${section.section} ${padding.fullwidth}`}>
        <h1 className={`${heading.mw} ${heading.mw_m}`}>All Releases</h1>
        <div className={`${flex.flex} ${flex.column_s}`}>
          {grouped.map((group, i) => (
            <div
              className={`${styles.row} ${flex.flex} ${flex.column_s} ${flex.row_m}`}
              key={i}
            >
              {group.map((release, i) =>
                release ? (
                  <div className={styles.release} key={release.id}>
                    <Link href={`/music/${release.id}`} passHref={true}>
                      <a>
                        <Img
                          webp
                          src={require(`../public/img/music/${release.id}.png`)}
                          alt={`Cover art for ${release.title}`}
                          sizes={[500, 1000, 2000]}
                          breakpoints={[768, 1366]}
                        />
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div className={styles.release} data-empty key={i}></div>
                )
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
