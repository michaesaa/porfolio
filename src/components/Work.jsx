import { ProjectCard } from "./ProjectCard"

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
 

];

export const Work = () => {
  return (
    <section className="section" id="work"
    >
      <div className="container">
        <h2 className="headLine-2 mb-8">
            My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink}, key) => (
            <ProjectCard 
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLink={projectLink}
            />
          ))}
        </div>

      </div>
    </section>
  )
}


