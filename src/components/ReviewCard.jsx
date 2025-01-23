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

        <div className='bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:main-w-[420px]'>

            <div className="flex items-center gap-1 mb-3">
                {ratings.map(({ icon, style }, key) => (
                    <span
                        key={key}
                        style={style}
                        className='material-symbols-rounded text-yellow-300 text-[18px]'
                    >
                        {icon}
                    </span>
                ))}
            </div>

            <p className='text-zinc-400 mb-8'>
                {content}
            </p>

            <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg">
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
                    <p className='text-xs text-zinc-400 tracking-winder'>
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
