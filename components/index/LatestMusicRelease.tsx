import common from "@/styles/Index.module.scss";
import styles from "@/styles/index/LatestMusicRelease.module.scss";
import Button from "@/components/Button";
import Img from "react-optimized-image";
import Link from "next/link";
import music from "@/data/music";

const LatestMusicRelease = () => {
  const release: MusicRelease = music[0];

  return (
    <section className={styles.latestMusic}>
      <h1 className={common.heading}>Latest Music Release</h1>
      <Link href={`/music/${release.id}`} passHref={true}>
        <a className={styles.release}>
          <div className={styles.cover}>
            <Img
              webp
              src={require(`../../public/img/music/${release.id}.png`)}
              alt={`Cover art for ${release.title}`}
            />
          </div>
          <div className={styles.meta}>
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
