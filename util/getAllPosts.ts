import fs from "fs";
import matter from "gray-matter";

const getAllPosts = (): BlogPost[] => {
  let posts = fs.readdirSync("posts");
  return posts
    .map((post): BlogPost => {
      let file = fs.readFileSync(`posts/${post}`).toString();
      let frontmatter = matter(file);
      return {
        tag: frontmatter.data.tag,
        title: frontmatter.data.title,
        summary: frontmatter.data.summary,
        date: frontmatter.data.date,
        slug: post.replace(".md", ""),
      };
    })
    .sort((a, b) => {
      let a_date = new Date(a.date);
      let b_date = new Date(b.date);
      if (a_date.getTime() > b_date.getTime()) {
        return -1;
      } else if (a_date.getTime() < b_date.getTime()) {
        return 1;
      } else {
        return 0;
      }
    });
};

export default getAllPosts;
