import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function(){

    const [currentSlide,setCurrentSlide] = useState(0);
    const next = useCallback(()=>{
        setCurrentSlide(currentSlide+1)
    },[currentSlide])

    const prev = useCallback(()=>{
        setCurrentSlide(currentSlide-1)
    },[currentSlide])

    return(
        <section id="amenities" className='w-full px-4 py-14'>
                <div className='container mx-auto flex flex-col gap-12 items-center justify-center'>
                    <h4 className='subheading'>Amenities</h4>
                    <div className='max-w-full flex flex-col lg:flex-row gap-12 items-start justify-start'>
                        <Carousel 
                        // renderArrowNext={nextArrow}
                        // renderArrowPrev={prevArrow}
                        className='max-w-full mx-auto lg:w-1/2'
                        showArrows={false}
                        autoPlay={true}
                        verticalSwipe="standard"
                        swipeable={true}
                        preventMovementUntilSwipeScrollTolerance={true}
                        swipeScrollTolerance={50}
                        showIndicators={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        showStatus={false}
                        selectedItem={currentSlide}
                        >
                        <div className=''>
                            <div className="h-[50vh] lg:h-[70vh] relative">
                                <Image className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/1. Clubhouse.jpg"} fill priority quality={100} />
                            </div>
                            <div className='flex gap-px mt-2 w-full items-center justify-center'>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-l-full' onClick={prev}>
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                                <div className='caption primary-btn py-2 px-4'> Club House </div>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-r-full' onClick={next}> 
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className=''>
                            <div className="h-[50vh] lg:h-[70vh] relative">
                                <Image className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/2. Party Hall.jpg"} fill quality={100} />
                            </div>
                            <div className='flex gap-px mt-2 w-full items-center justify-center'>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-l-full' onClick={prev}>
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                                <div className='caption primary-btn py-2 px-4'> Party Hall </div>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-r-full' onClick={next}> 
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className=''>
                            <div className="h-[50vh] lg:h-[70vh] relative">
                                <Image className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/3. Games room.jpg"} fill quality={100} />
                            </div>
                            <div className='flex gap-px mt-2 w-full items-center justify-center'>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-l-full' onClick={prev}>
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                                <div className='caption primary-btn py-2 px-4'> Games room </div>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-r-full' onClick={next}> 
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <div className=''>
                            <div className="h-[50vh] lg:h-[70vh] relative">
                                <Image className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/amenity-home-theatre.jpg"} fill quality={100} />
                            </div>
                            <div className='flex gap-px mt-2 w-full items-center justify-center'>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-l-full' onClick={prev}>
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                                <div className='caption primary-btn py-2 px-4'> Home Theatre </div>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-r-full' onClick={next}> 
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div> */}

                        <div className=''>
                            <div className="h-[50vh] lg:h-[70vh] relative">
                                <Image className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/4. Gym.jpg"} fill quality={100} />
                            </div>
                            <div className='flex gap-px mt-2 w-full items-center justify-center'>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-l-full' onClick={prev}>
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                                <div className='caption primary-btn py-2 px-4'> Gym </div>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-r-full' onClick={next}> 
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <div className=''>
                            <div className="h-[50vh] lg:h-[70vh] relative">
                                <Image className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/amenity-private-landscape-a.jpg"} fill quality={100} />
                            </div>
                            <div className='flex gap-px mt-2 w-full items-center justify-center'>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-l-full' onClick={prev}>
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                                <div className='caption primary-btn py-2 px-4'> Private Landscape </div>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-r-full' onClick={next}> 
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className=''>
                            <div className="h-[50vh] lg:h-[70vh] relative">
                                <Image className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/amenity-private-landscape-b.jpg"} fill quality={100} />
                            </div>
                            <div className='flex gap-px mt-2 w-full items-center justify-center'>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-l-full' onClick={prev}>
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                                <div className='caption primary-btn py-2 px-4'> Private Landscape </div>
                                <button className='left-arrow primary-btn py-3 px-4 rounded-r-full' onClick={next}> 
                                    <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div> */}

                        </Carousel>
                        <div className='grid grid-cols-2 gap-7 items-center justify-center'>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Party hall</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Indoor gym</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Indoor games room</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Barbeque station</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Aroma garden</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Rainwater harvesting</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                UG sump with water softening plant</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                CCTV surveillance</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                24x7 security</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Intercom</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Outdoor landscape</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Well-defined drive way</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                App-based entry/exit controls</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Common area & compound wall lighting</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Solar water heaters for every villa</div>
                            <div className='flex gap-3'>
                                <span className='text-4xl gold-text'>*</span>
                                Private Garden</div>
                        </div>
                    </div>    
                </div>
            </section>
    )
}