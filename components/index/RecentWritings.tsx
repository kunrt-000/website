import common from "@/styles/Index.module.scss";
import styles from "@/styles/index/RecentWritings.module.scss";
import Button from "../Button";

const RecentWritings = () => (
  <section className={styles.recentWritings}>
    <h1 className={common.heading}>Recent Writings</h1>
    <Button href="/blog" external={false}>
      View All Posts
    </Button>
  </section>
);

export default RecentWritings;
