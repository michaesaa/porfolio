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
import { About } from "./components/About"
export const App = () =>{


    return (
        <>
            <Header />
            <div className="">
            <main>
                <Hero />
                <About />
            </main>
            </div>
        </>
    )
}