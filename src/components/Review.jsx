/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */
import { ReviewCard } from "./ReviewCard"

const reviews = [

    {
        content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
        name: 'Ethan Caldwell',
        imgSrc: '/images/people-2.jpg',
        company: 'NexaWave'
    },
    {
        content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
        name: 'Ava Thompson',
        imgSrc: '/images/people-5.jpg',
        company: 'Cali Expresss'
    },
   
];
export const Review = () => {
    return (
        <section
            id="reviews"
            className="section overflow-hidden"
        >
            <div className="container">
                <h2 className="headLine-2 mb-8">
                    What our customers say
                </h2>

                <div className="flex items-stretch gap-3 w-fit ">
                    { reviews.map(({ content, name, imgSrc, company }, key) => (   
                        <ReviewCard 
                        key={key}
                        name={name}
                        imgSrc={imgSrc}
                        company={company}
                        content={content}
                        />
                     ))}
                </div>
            </div>
        </section>
    )
}

