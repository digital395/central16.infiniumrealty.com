import Image from 'next/image'
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function(){
    return(
        <section id="home" className="banner w-screen">
            <div className="mx-auto lg:mt-20">
                <Carousel 
                // renderArrowNext={nextArrow}
                // renderArrowPrev={prevArrow}
                showArrows={true}
                autoPlay={true}
                verticalSwipe="standard"
                swipeable={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                >
                <div className="h-[50vh] lg:h-[90vh] relative w-full">
                    <Image className="object-cover object-center" alt="Banner Images" src={"/images/banners/ban-1.jpg"} fill={true} priority={true} quality={100} />
                    <div className='absolute w-full lg:w-[40%] flex justify-center items-end lg:items-center px-4 lg:px-0 pb-2 lg:p-0 bottom-0 h-1/2 lg:h-full lg:top-0 lg:right-0 banner-overlay-bg z-50'>
                        <Link href={"/projects/central-16"}><h1 className='text-3xl text-gray-300 lg:text-right lg:pr-4'>Discover the Perfect Home: <br className='hidden lg:block'/>Your Gateway to <br className='hidden lg:block'/><span className='text-white uppercase text-4xl'>Vibrant Living Spaces</span></h1></Link>
                    </div>
                </div>
                
                <div className="h-[50vh] lg:h-[100vh] relative">
                    <Image className="object-cover object-left-top lg:object-center" alt="Banner Images" src={"/images/projects/central-16/Exterior/1. Aerial View (Day).jpg"} fill={true} priority={true} quality={100} />
                    <div className='absolute w-full lg:w-[40%] flex justify-center items-end lg:items-center px-4 lg:px-0 pb-2 lg:p-0 bottom-0 h-1/2 lg:h-full lg:top-0 lg:right-0 banner-overlay-bg z-50'>
                        <Link href={"/projects/central-16"}><h2 className='text-4xl text-white  lg:text-right lg:pr-4'>Central-16: <br className='hidden lg:block'/><span className=' uppercase text-3xl text-gray-300'>A Breezy Rendezvous With<br className='hidden lg:block'/> Mediterranean Luxury</span>
                        </h2></Link>
                    </div>
                </div>
                </Carousel>
            </div>
        </section>
    )
}