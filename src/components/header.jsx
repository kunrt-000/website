import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, subtitle }) => (
  <div className="header">
    <div className="title">{title}</div>
    {subtitle ? <div className="subtitle">{subtitle}</div> : ''}
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
  subtitle: ``,
}

export default Header
