import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import ThemeContext from '../context/ThemeContext'

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

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={`container ${notIndex ? 'notIndex' : 'index'}`}>
          <Helmet bodyAttributes={{
            class: theme.dark ? 'dark' : ''
          }} />
          <SEO title={title}></SEO>
          <Header title={title || data.site.siteMetadata.title} subtitle={subtitle} />
          <div className="content">
            {children}
          </div>
          <Nav navLinks={navLinks}></Nav>
        </div>
      )}
    </ThemeContext.Consumer>
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
