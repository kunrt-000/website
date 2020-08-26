import fs from "fs";
import path from "path";

const blogGetStaticPaths = (category: string) => {
  const getStaticPathsFunc = async () => {
    let posts = fs.readdirSync(path.join(process.cwd(), "posts", category));

    let paths = [];

    posts.forEach((post) => {
      paths.push({ params: { postname: post.replace(".md", "") } });
    });

    return {
      paths,
      fallback: false,
    };
  };

  return getStaticPathsFunc;
};

export default blogGetStaticPaths;
