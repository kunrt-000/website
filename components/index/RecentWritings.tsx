import styles from "@/styles/index/RecentWritings.module.scss";
import Button from "../Button";
import RecentPostCard from "./RecentPostCard";

const RecentWritings = ({ posts }: { posts: BlogPost[] }) => (
  <section className="container mx-auto px-6 md:px-16 py-8 pt-4 md:py-12">
    <h1>Recent Writings</h1>
    <div className={styles.posts}>
      {posts.map((post) => (
        <RecentPostCard
          key={post.slug}
          slug={post.slug}
          tag={post.tag}
          title={post.title}
          summary={post.summary}
        />
      ))}
    </div>
    <Button href="/blog" external={false}>
      View All Posts
    </Button>
  </section>
);

export default RecentWritings;
