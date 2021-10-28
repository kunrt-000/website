import styles from "@/styles/index/RecentPostCard.module.scss";
import Link from "next/link";
import tagIcons from "@/data/blog";

type RecentPostProps = {
  tag: string;
  title: string;
  summary: string;
  slug: string;
};

const RecentPostCard = ({ tag, title, summary, slug }: RecentPostProps) => (
  <Link href={`/blog/${slug}`} passHref={true}>
    <a className="flex flex-col border-2 border-tertiary transition-colors duration-150 hover:bg-tertiary">
      <div className={styles.image}>
        <div className={styles.icon}>
          {tagIcons[tag as keyof typeof tagIcons]()}
        </div>
      </div>
      <div className="p-7">
        <div className="text-gray-400 font-semibold uppercase">{tag}</div>
        <div
          className="my-2 font-medium text-3xl leading-tight line-clamp-3"
          title={title}
        >
          {title}
        </div>
        <div className="text-gray-300 leading-snug">{summary}</div>
      </div>
    </a>
  </Link>
);

export default RecentPostCard;
