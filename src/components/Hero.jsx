/**
 * @copyright 2025 MichaelSaa_
 * @license Apache-2.0              
 */
export const Hero = () => {
    return (
        <senction
            id="home"
            className=" p-9 m-8">

            <div className="container lg:grid  lg:grid-cols-2
            items-center lg:gap-10 ">
                {/* firts image */}
                <div className="flex items-center gap-3">
                    <div container-t>
                        <figure className="figure img-box w-9 h-9 rounde-lg">
                            <img
                                src="/images/avatar-1.jpg"
                                width={30}
                                height={30}
                                alt="portrait"
                                className
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400
                        text-sm tracking-wide">
                            <span className="realtive w-2 h-2 rounded-full
                            bg-emerald-400">
                                <span className="absolute inset-0
                                rounded-full animate-ping">

                                </span>

                            </span>
                            Available for work
                        </div>

                        <h2 className="headLine-1 max-w-[15ch] sm:max-w-[25ch]
                        lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                            Building Scalable Modern Websites for the Future
                        </h2>
                        <div className="flex items-center gap-4">
                            ButtonPrimary

                            ButtonOutline
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px]
                    ml-auto bg-grandient-to-t from-sky-400 via-25%
                    via-asy-40-40 to-65% rounded-[60px] overflow-hidden">
                        <img
                            src="/images/hero-banner.png"
                            width={200}
                            height={300}
                            alt="michael saa"
                            className="w-full"
                        />
                    </figure>
                </div>
            </div>

        </senction>
    )
}