import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

export default function(){
    const [activeGallery,setActiveGallery] = useState('ext');
    const [windowSize,setWindowSize] = useState(1280);
    useEffect(()=>{
        setWindowSize(window.innerWidth)
    },[windowSize])
    const renderPrevArrows = (onClickHandler, hasPrev, label)=>{
        return (
            <button type="button" onClick={onClickHandler} title={label} className='vicks z-10 absolute top-[45%] left-0 lg:left-[15%] my-auto p-4 rounded-full w-[50px] h-[50px] primary-btn'>
                <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                </svg>
            </button>
        )
    }
    const renderNextArrows = (onClickHandler, hasNext, label)=>{
        return (
            <button type="button" onClick={onClickHandler} title={label} className='vicks z-10 absolute top-[45%] right-0 lg:right-[15%] m-auto p-4 rounded-full w-[50px] h-[50px] primary-btn'>
                <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                </svg>
            </button>
        )
    }
    return(
        <section id="gallery" className="w-full py-14 flex flex-col gap-12">
             <h4 className='subheading w-full text-center'>Gallery</h4>
             <div className="flex gap-px max-w-full items-center justify-center overflow-x-auto">
                <button onClick={()=>{setActiveGallery('ele')}} className={`px-6 py-2 text-center border seperator-border-color rounded-l-lg border-r-0 ${activeGallery=='ele'?'primary-btn':''}`}>Elevation</button>
                <button onClick={()=>{setActiveGallery('ext')}} className={`px-6 py-2 text-center border seperator-border-color border-r-0 ${activeGallery=='ext'?'primary-btn':''}`}>Exterior</button>
                <button onClick={()=>{setActiveGallery('int')}} className={`px-6 py-2 text-center border seperator-border-color ${activeGallery=='int'?'primary-btn':''}`}>Interior</button>
                <button onClick={()=>{setActiveGallery('am')}} className={`px-6 py-2 text-center border seperator-border-color rounded-r-lg border-l-0 ${activeGallery=='am'?'primary-btn':''}`}>Amenities</button>
             </div>
             <div className={`${activeGallery == 'ext'?'block':'hidden'}`}>
                <Carousel 
                renderArrowPrev={renderPrevArrows}
                renderArrowNext={renderNextArrows}
                showArrows={true}
                autoPlay={true}
                verticalSwipe="standard"
                swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
                showIndicators={false}
                showThumbs={true}
                thumbWidth={200}
                infiniteLoop={true}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={windowSize>1023?66:100}
                >
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/1. Aerial View (Day).jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center"> Aerial View - Day </div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/2. Aerial view (Night).jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Aerial View - Night</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/3. Main Entrance.jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Main Entrance</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/4. Drive Way.jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Drive Way</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/5. Villa Roof view.jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Villa Roof view</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/6. Villa View (Day).jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Villa View - Day</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/7. Villa View (Dusk).jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Villa View - Dusk</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/8. Villa View (Dusk).jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Villa View - Dusk</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/9. Villa Entrance.jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Villa Entrance</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/10. Private Landscaped Deck.jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Private Landscaped Deck</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/11. Private Landscaped Deck.jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Private Landscaped Deck</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/12. Balcony View (Day).jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center"> Balcony View - Day</div>
                    </div>
                    <div className="mx-4 relative">
                        <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Exterior/13. Balcony View (Dusk).jpg"} />
                        <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center"> Balcony View - Dusk </div>
                    </div>
                </Carousel>
                </div>
                <div className={`${activeGallery == 'int'?'block':'hidden'}`}>
                    <Carousel 
                    renderArrowPrev={renderPrevArrows}
                    renderArrowNext={renderNextArrows}
                    showArrows={true}
                    autoPlay={true}
                    verticalSwipe="standard"
                    swipeable={true}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={50}
                    showIndicators={false}
                    showThumbs={true}
                    thumbWidth={200}
                    infiniteLoop={true}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={windowSize>1023?66:100}
                    >
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/1. Living.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Living</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/2. Living.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Living</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/3. Dining.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Dining</div>
                        </div>
                       
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/4. Kitchen.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Kitchen</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/5. Master Bedroom.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Master Bedroom</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/6. Bedroom 2.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Bedroom 2</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/7. Bedroom 3.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Bedroom 3</div>
                        </div>
                        
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/8. Bedroom 4.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Bedroom 4</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/9. Family Living.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Family Living</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Interior/10. Home Theatre.jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Home Theatre</div>
                        </div>
                    </Carousel>
                </div>
                <div className={`${activeGallery == 'ele'?'block':'hidden'}`}>
                    <Carousel 
                    renderArrowPrev={renderPrevArrows}
                    renderArrowNext={renderNextArrows}
                    showArrows={true}
                    autoPlay={true}
                    verticalSwipe="standard"
                    swipeable={true}
                    preventMovementUntilSwipeScrollTolerance={true}
                    swipeScrollTolerance={50}
                    showIndicators={false}
                    showThumbs={true}
                    thumbWidth={200}
                    infiniteLoop={true}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={windowSize>1023?66:100}
                    >
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Elevation/1. Villa Elevation (Day).jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Villa Elevation - Day</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Elevation/2. Villa Elevation (Dusk).jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Villa Elevation - Dusk</div>
                        </div>
                        <div className="mx-4 relative">
                            <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Elevation/3. Villa Elevation (Day).jpg"} />
                            <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center"> Villa Elevation - Day </div>
                        </div>
                    </Carousel>
                </div>
                <div className={`${activeGallery == 'am'?'block':'hidden'}`}>
                    <Carousel 
                       renderArrowPrev={renderPrevArrows}
                       renderArrowNext={renderNextArrows}
                        showArrows={true}
                        autoPlay={true}
                        verticalSwipe="standard"
                        swipeable={true}
                        preventMovementUntilSwipeScrollTolerance={true}
                        swipeScrollTolerance={50}
                        showIndicators={false}
                        showThumbs={true}
                        thumbWidth={200}
                        infiniteLoop={true}
                        showStatus={false}
                        centerMode={true}
                        centerSlidePercentage={windowSize>1023?66:100}
                        >
                            <div className="mx-4 relative">
                                <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/1. Clubhouse.jpg"} />
                                <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center">Clubhouse </div>
                            </div>
                            <div className="mx-4 relative">
                                <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/2. Party Hall.jpg"} />
                                <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center"> Party Hall</div>
                            </div>
                            <div className="mx-4 relative">
                                <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/3. Games room.jpg"} />
                                <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center"> Games room</div>
                            </div>
                            <div className="mx-4 relative">
                                <img className="object-cover" alt="Banner Images" src={"/images/projects/central-16/Amenities/4. Gym.jpg"} />
                                <div className="absolute w-full bg-black/50 text-white bottom-1 left-0 text-center"> Gym</div>
                            </div>
                            
                            
                    </Carousel>
                </div>
        </section>
    )
}