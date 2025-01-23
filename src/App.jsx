/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */

/**
 * 
 * Components
 */

import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/Aboutt"
import { Skill } from "./components/Skill"
import { Work } from "./components/Work"
import { Review } from "./components/Review"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export const App = () =>{


    return (
        <>
            <Header />
            <div className="">
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
            </div>
        </>
    )
}