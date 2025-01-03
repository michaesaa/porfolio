/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */
export const Header = () => {
  return (
   <header clasName="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-800">
  <div className="max-w-screen-2xl w-full mx-auto px-4">
    <h1>
      <a 
      href="/"
      className="logo"
      >
        <img
        src="/images/logo.svg" 
        alt="" />
      </a>
    </h1>

  </div>
   </header>
  )
}

