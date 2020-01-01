import '../styles.scss';
import Layout from '../components/Layout.jsx';
import Social from '../components/SocialTag.jsx';
import GitHub from '../components/icons/GitHub.jsx';
import Instagram from '../components/icons/Instagram.jsx';
import Mail from '../components/icons/Mail.jsx';

let nav = [{
    name: "Home",
    href: "/"
}, {
    name: "Projects",
    href: "/projects"
}, {
    name: "Blog",
    href: "/blog"
}];

const about = () => (
    <Layout id="about-page" title="About" nav={nav}>
        <div className="page header">
            <div className="title">About</div>
        </div>
        <div className="about content">
            <div className="description">I am a web developer from India. I’m adept in HTML, CSS and JavaScript. Also semi-proficient in tech like Electron, Next.js, React, Hexo. I use Figma for designing and also know Photoshop.</div>
            <div className="socials">
                <Social href="https://github.com/shadythgod" icon={<GitHub />} name="shadythgod" />
                <Social href="https://instagram.com/aman.harwara" icon={<Instagram />} name="aman.harwara" />
                <Social href="mailto:amanharwara@gmail.com" icon={<Mail />} name="amanharwara@gmail.com" />
            </div>
        </div>
    </Layout>
);

export default about;