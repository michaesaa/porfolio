/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */
import { useState } from "react"

import {Navbar} from "./Navbar"


export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (


    // etiqueta principal
    <header className="top-0 left-0 z-40 fixed flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0 w-full h-20">
      {/* div principal */}
      <div className="flex justify-between items-center md:grid md:grid-cols-[1fr,3fr,1fr] mx-auto px-4 md:px-6 w-full max-w-screen-2xl">
        {/* logo */}
        <h1>
          <a
            href="/"
            className="logo"
          >
            <img
              src="/images/logo.svg"
              width={40}
              alt="michael saa" />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="md:hidden menu-btn"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>


        <a
          href="#contact"
          className="md:justify-self-end max-md:hidden btn btn-secondary"
        >
          Contact Me
        </a>
      </div>

    </header>
  )
}

