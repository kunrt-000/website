import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid';

const Project = ({ image, name, tags, description, link }) => (
    <div className="project">
        {image}
        <div className="details">
            <div className="name">{name}</div>
            <div className="tags">{tags.map(tag => (<div key={uuid()} className="tag">{tag}</div>))}</div>
            <div className="description">{description}</div>
            <a className="cta-button" target="_blank" rel="noopener noreferrer" href={link}>
                <div className="icon-link-ext"></div>
                <div className="text">Open In New Tab</div>
            </a>
        </div>
    </div>
)

Project.propTypes = {
    image: PropTypes.element,
    name: PropTypes.string,
    tags: PropTypes.array,
    description: PropTypes.string
}

export default Project;