import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import uuid from 'uuid';
import ThemeContext from '../context/ThemeContext';

const Nav = ({ navLinks }) => (
    <ThemeContext.Consumer>
        {theme => (
            <div className="navbar">
                {navLinks.map(item => (
                    <Link className="item" key={uuid()} to={item.href}>
                        {item.name}
                    </Link>
                ))}
                <a href="/blog/index.html" target="_blank" rel="noopener noreferrer" className="item">Blog</a>
                <div className="item theme-toggle" title="Toggle Theme" onClick={theme.toggleDark}>
                    {theme.dark ? <div className="icon-sun"></div> : <div className="icon-moon"></div>}
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
)

Nav.propTypes = {
    navLinks: PropTypes.array.isRequired
}

Nav.defaultProps = {
    navLinks: [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" }
    ]
}

export default Nav;