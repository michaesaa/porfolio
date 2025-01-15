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
          <div className="bg-zinc-800/50 p-7 rounded-2xl
          md:p-12">
            <p className="text-zinc-300 mb-4 md:mb-8
            md:text-xl md:max-w-[60ch]">
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
            <div className="flex flex-wrap items-center gap-4 md:gad-7">
              {
                aboutItems.map(({ label, number }, key) => (
                  <div key={key}>
                    <div className="flex items-center md:mb-2">
                      <span className="text-2xl font-semibold
                      md:text-4xl">{number}</span>
                      <span className="text-sky-400
                      font-semibold md:text-3xl  ">+</span>
                    </div>

                    <p className="text-sm text-zinc-400">{label}</p>
                  </div>
                ))
              }
              <img 
              src="/images/logo.svg"
              alt="logo" 
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

