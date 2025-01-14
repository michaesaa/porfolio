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
export const App = () =>{


    return (
        <>
            <Header />
            
            <main>
                <Hero />
            </main>
        </>
    )
}