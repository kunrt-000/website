import matter from "gray-matter";

const blogGetStaticProps = (category: string) => {
  const getStaticPropsFunc = async (context) => {
    const { postname } = context.params;

    const content = await import(`posts/${category}/${postname}.md`);
    const data = matter(content.default);

    return {
      props: {
        frontmatter: data.data,
        markdownBody: data.content,
        postname,
      },
    };
  };

  return getStaticPropsFunc;
};

export default blogGetStaticProps;
