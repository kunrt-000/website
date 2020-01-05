import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby';
import Project from '../components/project';
import Img from 'gatsby-image'
import uuid from "uuid";

const ProjectPage = ({ data }) => {
    let navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" }
    ];

    let projects = data.allProjectsJson.edges.map(node => node.node);

    return (
        <Layout title="Projects" notIndex={true} navLinks={navLinks}>
            <div className="projects">
                {projects.map(p => <Project key={uuid()} link={p.link} image={<Img className="image" fluid={p.image.childImageSharp.fluid} />} name={p.name} tags={p.tags} description={p.description} />)}
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