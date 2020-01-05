import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid';

const Project = ({ image, name, tags, description, link }) => (
    <div className="project">
        {image}
        <div className="details">
            <a title={`${name} Product Page`} className="name" target="_blank" rel="noopener noreferrer" href={link} >{name}</a>
            <div className="tags">{tags.map(tag => (<div key={uuid()} className="tag">{tag}</div>))}</div>
            <div className="description">{description}</div>
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