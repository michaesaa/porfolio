/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */

import PropTypes from "prop-types";

export const ProjectCard = ({
    imgSrc,
    title,
    projectLink,
    classes,
    tags
}) => {
    return (
        <div className={"" + classes}>
            <figure className="img-box">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="img-cover"
                />
            </figure>
            <div className="">

                <div>
                    <h3 className="title">
                        {title}
                    </h3>
                    <div className="">
                        {tags.map((label, key) => (
                            <span
                                key={key}
                                className=""
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="">
                    <span
                        className=""
                        aria-hidden="true"
                    >
                        arrow_aoutward
                    </span>
                </div>

            </div>

            <a 
            href={projectLink}
            target="_blank"
            className=""
            
            >

            </a>

        </div>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string,
    projectLink: PropTypes.string,
    classes: PropTypes.string,
    tags: PropTypes.string
}

