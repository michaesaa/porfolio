/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */
import { SkillCard } from "./SkillCard"

const skillItem = [
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
];

export const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headLine-2">Essential Tools I use</h2>
                <p className="">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className="">
                    {


                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                              <SkillCard />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

