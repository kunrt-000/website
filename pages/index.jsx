import '../styles.scss';
import Layout from '../components/Layout.jsx';

let nav = [{
    name: "About",
    href: "/about"
}, {
    name: "Projects",
    href: "/projects"
}, {
    name: "Blog",
    href: "/blog"
}];

const index = () => (
    <Layout title="Aman Harwara" nav={nav}>
        <div className="header">
            <div className="title">Aman<br />Harwara</div>
            <div className="subtitle">Novice Web Developer</div>
        </div>
    </Layout>
);

export default index;