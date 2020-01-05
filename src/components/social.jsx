import React from 'react'
import PropTypes from 'prop-types'

const Social = ({ icon, href, text }) => (
    <div className="social">
        <div className={`icon-${icon}`}></div>
        <a href={href} target="_blank" rel="noopener noreferrer" className="link">{text}</a>
    </div>
)

Social.propTypes = {
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Social