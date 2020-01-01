import '../styles.scss';
import Layout from '../components/Layout.jsx';

let nav = [{
    name: "Home",
    href: "/"
}, {
    name: "About",
    href: "/about"
}, {
    name: "Blog",
    href: "/blog"
}];

const projects = () => (
    <Layout id="projects-page" title="Projects" nav={nav}>
        <div className="page header">
            <div className="title">Projects</div>
        </div>
        <div className="projects">
            <div className="project card">

            </div>
        </div>
    </Layout>
);

export default projects;