import Image from "next/image";

export default function (){
    return(
        <section id="features" className='bg-gray-200 relative features'>
                <h4 className="subheading px-4 pt-14">Salient Features</h4>
                <div className='container mx-auto px-4 py-14 grid grid-cols-2 lg:flex lg:flex-col justify-center items-center gap-4 lg:gap-12'>
                    <div className='grid lg:grid-cols-11 gap-6 justify-center items-center tabs max-h-[40vh] lg:max-h-max overflow-y-scroll lg:overflow-visible'>
                        <div className='relative tab cursor-pointer selected text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/villas.png" width={100} height={100} quality={100} />
                            Well Designed Villas
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/structure.png" width={100} height={100} quality={100} />
                            G+1 & G+2 Desgin Structure
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/gated.png" width={100} height={100} quality={100} />
                            Secured Gated Community
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/fittings.png" width={100} height={100} quality={100} />
                            Highend Fittings & Flooring
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/open-space.png" width={100} height={100} quality={100} />
                            55% Open Space & Greenary
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/video-phone.png" width={100} height={100} quality={100} />
                            Smart Home Features
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/landscape.png" width={100} height={100} quality={100} />
                            Landscaped <br />Deck
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/vastu.png" width={100} height={100} quality={100} />
                            100% Vaastu Compliant
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/power.png" width={100} height={100} quality={100} />
                            100% Power backup
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/clubhouse.png" width={100} height={100} quality={100} />
                            Clubhouse & Party Hall
                        </div>
                        <div className='relative tab cursor-pointer text-center text-xs w-[100px]'>
                            <Image alt='Feature Icon' src="/images/projects/central-16/home-theatre.png" width={100} height={100} quality={100} />
                            Private Home Theatre
                        </div>
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg selected'>
                        Well-designed 16 uber luxury villas spread across 1.42 acres of land
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        4 BHK grand villas with G + 1 & G + 2 design structure
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        Safe & secure gated community
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        High-end fittings and specifications from top-class brands for flooring, electrical fittings, plumbing, etc.
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        55% open space for maximum lighting and ventilation
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        Video door phones, digital door locks & more smart home features
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        Aesthetically planned private landscaped garden with luxurious seating deck in all villas
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        100% Vaastu compliant homes with zero dead space
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        100% power back-up for all common areas
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        Clubhouse with amenities like party hall, indoor gym & indoor games area
                    </div>
                    <div className='tab-desc lg:w-full text-center px-4 border-l-8 lg:border-l-0 py-4 lg:border-t-8 blue-bg'>
                        Provision for a private home theatre room in every villa
                    </div>
                </div>
            </section>
    )
}