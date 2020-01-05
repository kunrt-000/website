import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./navigation"
import SEO from "./seo"

import '../css/layout.scss'

const Layout = ({ children, title, subtitle, navLinks, notIndex }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  notIndex = notIndex || false;

  const [dark, setDark] = useState(false);

  return (
    <div className={notIndex ? 'container notIndex' : 'container index'}>
      <SEO title={title}></SEO>
      <Header title={title || data.site.siteMetadata.title} subtitle={subtitle} />
      <div className="content">
        {children}
      </div>
      <Nav navLinks={navLinks} darkTheme={dark} themeHandler={setDark}></Nav>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  navLinks: PropTypes.array,
  notIndex: PropTypes.bool,
}

export default Layout
