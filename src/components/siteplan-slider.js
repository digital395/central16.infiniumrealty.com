import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function(){
    const [activeG,setActiveG] = useState(0)

    const renderPrevArrows = (onClickHandler, hasPrev, label)=>{
        return (
            hasPrev && <button type="button" onClick={onClickHandler} title={label} className='vicks z-10 absolute top-[45%] left-0 lg:left-[15%] my-auto p-4 rounded-full w-[50px] h-[50px] primary-btn'>
                <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                </svg>
            </button>
        )
    }
    const renderNextArrows = (onClickHandler, hasNext, label)=>{
        return (
            hasNext && <button type="button" onClick={onClickHandler} title={label} className='vicks z-10 absolute top-[45%] right-0 lg:right-[15%] m-auto p-4 rounded-full w-[50px] h-[50px] primary-btn'>
                <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                </svg>
            </button>
        )
    }

    const renderThumbs = (items) => {
        
        return items.map((i,index)=>{
            return(
                <div className='w-[200px] h-[150px] relative block' key={index}>
                    <Image src={i.props.children.props.src} className='object-contain' fill priority={false} />        
                </div>
                
            )
        })
    }


    return(
        <section id="floor-plans" className="site-plan-bg w-full py-14 site-plan-section flex flex-col gap-12">
                    <h4 className='subheading text-white'>Floor Plans</h4>
                    <div className="flex gap-px w-full items-center justify-start lg:justify-center overflow-x-auto text-white/70 px-4">
                        <button onClick={()=>setActiveG(0)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==0?'primary-btn':''}`}>Master Plan</button>
                        <button onClick={()=>setActiveG(1)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==1?'primary-btn':''}`}>Villa 1</button>
                        <button onClick={()=>setActiveG(2)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==2?'primary-btn':''}`}>Villa 2</button>
                        <button onClick={()=>setActiveG(3)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==3?'primary-btn':''}`}>Villa 3</button>
                        <button onClick={()=>setActiveG(4)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==4?'primary-btn':''}`}>Villa 4</button>
                        <button onClick={()=>setActiveG(5)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==5?'primary-btn':''}`}>Villa 5</button>
                        <button onClick={()=>setActiveG(6)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==6?'primary-btn':''}`}>Villa 6</button>
                        <button onClick={()=>setActiveG(7)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==7?'primary-btn':''}`}>Villa 7</button>
                        <button onClick={()=>setActiveG(8)} className={`px-6 py-2 text-center border seperator-border-color whitespace-nowrap ${activeG==8?'primary-btn':''}`}>Villa 9 -19</button>
                        
                    </div>
                    <div className={`${activeG==0?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/master.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==1?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V1/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V1/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V1/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==2?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V2/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V2/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V2/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==3?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V3/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V3/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V3/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==4?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V4/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V4/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V4/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==5?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V5/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V5/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V5/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==6?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V6/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V6/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V6/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==7?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V7/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V7/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V7/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    <div className={`${activeG==8?'block':'hidden'}`}>
                        <Carousel  showArrows={true} className='w-full px-4 mx-auto relative' autoPlay={false} verticalSwipe="standard" swipeable={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showThumbs={false} showIndicators={false} renderArrowNext={renderNextArrows} renderArrowPrev={renderPrevArrows} infiniteLoop={true} showStatus={false}>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V9/fp-3.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V9/fp-2.jpg"} />
                            </div>
                            <div className='w-full lg:w-2/3 h-[650px] bg-white flex justify-center items-center mx-auto'>
                                <Image priority={true} className="object-contain rounded-2xl" alt="Banner Images" fill={true} src={"/images/projects/central-16/floor-plans/V9/fp-1.jpg"} />
                            </div>
                        </Carousel>
                    </div>
                    
        </section>
    )
}