import styles from "@/styles/index/RecentPostCard.module.scss";
import Link from "next/link";
import Img from "react-optimized-image";
import tagIcons from "@/data/blog";

type RecentPostProps = {
  tag: string;
  title: string;
  summary: string;
  slug: string;
  image?: string;
};

const RecentPostCard = ({
  tag,
  title,
  summary,
  slug,
  image,
}: RecentPostProps) => (
  <Link href={`/blog/${slug}`} passHref={true}>
    <a className={styles.postLink}>
      <div className={styles.post}>
        <div className={styles.image}>
          {image ? (
            <div className={styles.img}>
              <Img
                webp
                src={require(`../../public/img/blog/${image}`)}
                alt={`Thumbnail for the post: ${title}`}
              />
            </div>
          ) : (
            <div className={styles.icon}>
              {tagIcons[tag as keyof typeof tagIcons]()}
            </div>
          )}
        </div>
        <div className={styles.meta}>
          <div className={styles.tag}>{tag}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.summary}>{summary}</div>
        </div>
      </div>
    </a>
  </Link>
);

export default RecentPostCard;
