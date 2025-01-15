/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */

const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];
export const About = () => {


  return (
    <>
      <section
        id="about"
        className="section"
      >
        <div className="container">
          <div className="">
            <p>
              Welcome! I&apos;m Michael, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.


              # Skill

              Essential Tools I use

              Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.


              # Work

              My portfolio highlights


              # Review

              What our customers say


              # Contact

              Contact me for collaboration

              Reach out today to discuss your project needs and start collaborating on something amazing!


              # Footer

              Let&apos;s work together today!

            </p>
            <div>
              {
                aboutItems.map(({ label, number }, key) => (
                  <div key={key}>
                    <div className="container">
                      <span className="">{number}</span>
                      <span className="">+</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

