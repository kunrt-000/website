import Head from "next/head";
import Img from "react-optimized-image";
import music from "@/data/music";
import Link from "next/link";
import styles from "@/styles/Music.module.scss";
import flex from "@/styles/util/Flex.module.scss";
import heading from "@/styles/typography/Heading.module.scss";
import FeaturedMusicRelease from "@/components/FeaturedMusicRelease";

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
  let featured = music.find((release) => release.id === "frescade");
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
      {featured ? (
        <section className="container mx-auto px-6 md:px-16 py-8 md:pt-12 md:pb-0">
          <FeaturedMusicRelease release={featured} />
        </section>
      ) : null}
      <section className="container mx-auto px-6 md:px-16 py-8 md:py-12">
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
                          src={require(`../images/music/${release.id}.png`)}
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
