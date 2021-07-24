import common from "@/styles/Index.module.scss";
import styles from "@/styles/index/LatestMusicRelease.module.scss";
import Button from "@/components/Button";

const LatestMusicRelease = () => (
  <section className={styles.latestMusic}>
    <h1 className={common.heading}>Latest Music Release</h1>
    <Button href="/music" external={false}>
      View All Releases
    </Button>
  </section>
);

export default LatestMusicRelease;
