import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import uuid from 'uuid';

const Nav = ({ navLinks, darkTheme, themeHandler }) => {
    return (<div className="navbar">
        {navLinks.map(item => (
            <Link className="item" key={uuid()} to={item.href}>
                {item.name}
            </Link>
        ))}
        <div className="item theme-toggle" title="Toggle Theme" onClick={() => themeHandler(!darkTheme)}>
            {darkTheme ? <div className="icon-sun"></div> : <div className="icon-moon"></div>}
        </div>
    </div>)
}

Nav.propTypes = {
    navLinks: PropTypes.array.isRequired
}

Nav.defaultProps = {
    navLinks: [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" }
    ]
}

export default Nav;