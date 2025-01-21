/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */
import React from 'react'
import PropTypes from 'prop-types'

const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }
});
console.log(ratings);
export const ReviewCard = ({
    company,
    imgSrc,
    name,
    content
}) => {

    return (

        <div className='bg-zinc-800 p-5 rounded-xl'>

            <div className="">
                {ratings.map(({ icon, style }, key) => (
                    <span
                        key={key}
                        style={style}
                        className='material-symbols-rounded'
                    >
                        {icon}
                    </span>
                ))}
            </div>

            <p>
                {content}
            </p>

            <div className="">
                <figure className="">
                    <img
                        src={imgSrc}
                        alt={name}
                        width={44}
                        height={44}
                        loanding="lazy"
                        className="img-cover"
                    />
                </figure>
                <div>
                    <p>
                        {name}
                    </p>
                    <p>
                        {company}
                    </p>
                </div>
            </div>
        </div>
    )
}

ReviewCard.propTypes = {
    company: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
