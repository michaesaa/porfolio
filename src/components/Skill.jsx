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
                <div className="grid gap-3 grid-cols-[
                repeat(uato-fill,minmax(250px,_1fr))]
                ">
                    {


                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                              <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                              />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

