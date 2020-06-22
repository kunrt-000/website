import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header
        title={
          <span>
            <span>aman</span>
            <span style={{ fontWeight: 100 }}>harwara</span>
          </span>
        }
        show_title={true}
        menu={[
          { name: "Home", link: "/", active: true },
          { name: "Work", link: "/work" },
          { name: "Music", link: "/music" },
          { name: "Blog", link: "/blog" },
        ]}
      />
    </>
  );
}
