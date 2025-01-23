/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */

// components

import { Button } from "./Button";

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/codewithsadee-org'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/codewithsadee_'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/codewithsadee'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.io/codewithsadee'
    }
];
export const Footer = () => {
    return (
        <footer className="section">
            <div className="container">


                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headLine-1">
                            Let&apos;s work together today!
                        </h2>

                        <Button
                            href="mailto:codewithsadee@gmail.com"
                            label="Start project"
                            icon="chevron_rigth"
                        />

                    </div>

                    <div className="">

                        <div className="">
                            <p className="">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li
                                        key={key}
                                    >
                                        <a
                                            href={href}
                                            className=""
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>

                        <div className="">
                            <p className="">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li
                                        key={key}
                                    >
                                        <a
                                            href={href}
                                            className=""
                                            target="_blank"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>

                <div className="">
                    <a 
                    href=""
                    className=""
                    >
                      <img 
                      src="/images/logo.svg"
                      alt="Logo"
                      width={40}
                      height={40}
                      
                      />  
                    </a>

                    <p className="">
                        &copy; 2025 <span>MichaelSaa_</span>
                    </p>

                </div>

            </div>
        </footer>
    )
}

