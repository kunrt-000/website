import React, { useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import Project from '../components/project';
import Img from 'gatsby-image'
import uuid from "uuid";
import Glide from '@glidejs/glide';

const ProjectPage = ({ data }) => {
    let navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" }
    ];

    let projects = data.allProjectsJson.edges.map(node => node.node);

    useEffect(() => {
        if (typeof document !== "undefined" || typeof window !== "undefined") {
            let projectSlider = new Glide('.glide', {
                perView: 4,
                gap: 35,
                rewind: false,
                peek: 20,
                breakpoints: {
                    1000: {
                        perView: 3
                    },
                    700: {
                        perView: 2
                    },
                    600: {
                        perView: 1
                    }
                }
            });
            projectSlider.on('mount.after', () => {
                if (projectSlider.index === 0) {
                    document.querySelector('.glide__arrow--left').style.display = 'none';
                }
            });
            projectSlider.on('run', () => {
                let indexLength = document.querySelector('.glide__slides').children.length;
                if (projectSlider.index > 0) {
                    document.querySelector('.glide__arrow--left').style.display = '';
                } else {
                    document.querySelector('.glide__arrow--left').style.display = 'none';
                }
                if (projectSlider.index === indexLength - 1) {
                    document.querySelector('.glide__arrow--right').style.display = 'none';
                } else {
                    document.querySelector('.glide__arrow--right').style.display = '';
                }
            });
            projectSlider.mount();
        }
    }, []);

    return (
        <Layout title="Projects" notIndex={true} navLinks={navLinks}>
            <div className="glide">
                <div data-glide-el="track" className="glide__track">
                    <ul className="glide__slides">
                        {projects.map(p => <li key={uuid()} className="glide__slide"><Project link={p.link} image={<Img classNameName="image" fluid={p.image.childImageSharp.fluid} />} name={p.name} tags={p.tags} description={p.description} /></li>)}
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <div className="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <div className="icon-left"></div>
                    </div>
                    <div className="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <div className="icon-right"></div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export const query = graphql`
    query projectsQuery { 
        allProjectsJson {
            edges {
                node {
                    image {
                        childImageSharp {
                            fluid(maxWidth: 300) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    },
                    name,
                    tags,
                    description
                    link
                }
            }
        }
    }
`

export default ProjectPage