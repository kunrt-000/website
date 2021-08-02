import styles from "@/styles/index/LatestMusicRelease.module.scss";
import Button from "@/components/Button";
import Img from "react-optimized-image";
import Link from "next/link";
import music from "@/data/music";
import section from "@/styles/components/Section.module.scss";
import padding from "@/styles/util/Padding.module.scss";
import margin from "@/styles/util/Margin.module.scss";
import flex from "@/styles/util/Flex.module.scss";

const LatestMusicRelease = () => {
  const release: MusicRelease = music[0];

  return (
    <section className={`${section.section} ${padding.px} ${padding.py}`}>
      <h1>Latest Music Release</h1>
      <Link href={`/music/${release.id}`} passHref={true}>
        <a
          className={`${styles.release} ${flex.iflex} ${flex.column_s} ${flex.row_m}`}
        >
          <div className={styles.cover}>
            <Img
              webp
              src={require(`../../public/img/music/${release.id}.png`)}
              alt={`Cover art for ${release.title}`}
              sizes={[500, 1000, 2000]}
              breakpoints={[768, 1366]}
            />
          </div>
          <div className={margin.my_100}>
            <div className={styles.date}>{release.date}</div>
            <div className={styles.title}>{release.title}</div>
            <div className={styles.genre}>
              {typeof release.genre === "object"
                ? `${release.genre[0]} / ${release.genre[1]}`
                : release.genre}
            </div>
          </div>
        </a>
      </Link>
      <div>
        <Button href="/music" external={false}>
          View All Releases
        </Button>
      </div>
    </section>
  );
};

export default LatestMusicRelease;
