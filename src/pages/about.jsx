import React from "react"
import Layout from "../components/layout"
import Social from '../components/social'

const AboutPage = () => {
    let navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" }
    ];

    return (
        <Layout title="About" notIndex={true} navLinks={navLinks}>
            <div className="description" style={{
                fontSize: '1.4rem',
                fontFamily: 'Public Sans, sans-serif'
            }}>I am a web developer and designer from India. I’m adept in HTML, CSS and JavaScript. Also semi-proficient in tech like Electron, React, Gatsby, Hexo. I use Figma for designing and also know Photoshop.<br /><br />Contact:</div>
            <div className="contact">
                <Social icon="github" href="https://github.com/amanharwara" text="@amanharwara"></Social>
                <Social icon="mail" href="mailto:amanharwara@protonmail.com" text="amanharwara[at]protonmail[dot]com"></Social>
            </div>
        </Layout >
    )
}

export default AboutPage
