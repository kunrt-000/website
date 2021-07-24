import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Music.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import music from "@/data/music";
import Button from "@/components/Button";
import Link from "next/link";

const createRows = (array: Array<any>, itemsPerRow: number) => {
  let groupedArray = [];
  for (let i = 0; i < array.length; i += itemsPerRow) {
    let row = array.slice(i, i + itemsPerRow);
    while (row.length < itemsPerRow) {
      row.push(null);
    }
    groupedArray.push(row);
  }
  console.log(groupedArray);
  return groupedArray;
};

export default function Music() {
  let featured = music.find((release) => release.id === "ode-to-messier");
  let grouped = createRows(music, 4);

  return (
    <div id="index-page" className={styles.page}>
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
      <Header />
      <section className={styles.section}>
        <h1 className={styles.heading}>Featured</h1>
        <div className={styles.featured}>
          <div className={styles.cover}>
            <Link href={`/music/${featured?.id}`} passHref={true}>
              <a>
                <Image
                  src={require(`@/img/music/${featured?.id}.png`)}
                  alt={`Cover art for ${featured?.title}`}
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
            <Button href={featured?.links?.bandcamp} external={true}>
              Buy on Bandcamp
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.heading}>All Releases</h1>
        <div className={styles.releases}>
          {grouped.map((group, i) => (
            <div className={styles.row} key={i}>
              {group.map((release) =>
                release ? (
                  <div className={styles.release} key={release.id}>
                    <Link href={`/music/${release.id}`} passHref={true}>
                      <a>
                        <Image
                          src={require(`@/img/music/${release.id}.png`)}
                          alt={`Cover art for ${release.title}`}
                        />
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div className={styles.release}></div>
                )
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
