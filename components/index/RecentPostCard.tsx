import styles from "@/styles/index/RecentPostCard.module.scss";
import Link from "next/link";

type RecentPostProps = {
  tag: string;
  title: string;
  summary: string;
  slug: string;
};

const RecentPostCard = ({ tag, title, summary, slug }: RecentPostProps) => (
  <Link href={`/blog/${slug}`} passHref={true}>
    <a className={styles.postLink}>
      <div className={styles.post}>
        <div className={styles.tag}>{tag}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.summary}>{summary}</div>
      </div>
    </a>
  </Link>
);

export default RecentPostCard;
