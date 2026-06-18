import { Carousel } from "react-responsive-carousel";


export default function () {

    const renderPrevArrows = (onClickHandler, hasPrev, label)=>{
        return (
            <button type="button" onClick={onClickHandler} title={label} className='vicks z-10 absolute top-[45%] left-0 opacity-30 hover:opacity-100 my-auto p-4 rounded-full w-[50px] h-[50px] primary-btn'>
                <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.3908 0.562797C18.5971 -0.205344 17.3309 -0.184587 16.5628 0.609159L0.216816 17.5L16.5628 34.3908C17.3309 35.1846 18.5971 35.2053 19.3908 34.4372C20.1846 33.6691 20.2053 32.4029 19.4372 31.6092L5.78318 17.5L19.4372 3.39084C20.2053 2.5971 20.1846 1.33094 19.3908 0.562797Z" fill="white"/>
                </svg>
            </button>
        )
    }
    const renderNextArrows = (onClickHandler, hasNext, label)=>{
        return (
            <button type="button" onClick={onClickHandler} title={label} className='vicks z-10 absolute top-[45%] right-0 opacity-30 hover:opacity-100 m-auto p-4 rounded-full w-[50px] h-[50px] primary-btn transition-all'>
                <svg width="20" height="35" className='w-4 h-4' viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.609159 0.562797C1.4029 -0.205344 2.66906 -0.184587 3.43721 0.609159L19.7832 17.5L3.43721 34.3908C2.66906 35.1846 1.4029 35.2053 0.609159 34.4372C-0.184587 33.6691 -0.205344 32.4029 0.562797 31.6092L14.2168 17.5L0.562797 3.39084C-0.205344 2.5971 -0.184587 1.33094 0.609159 0.562797Z" fill="white"/>
                </svg>
            </button>
        )
    }


    return(
        <section className='flex flex-col gap-24 px-4 py-14 container mx-auto items-center justify-start'>
            
            <h3 className="text-4xl text-center capitalize">Enrich Your Lifestyle with Infinium: Where Dreams Come to Life</h3>
            
              <Carousel 
              renderArrowNext={renderNextArrows}
              renderArrowPrev={renderPrevArrows}
              width={'100%'}

              className='w-full'
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
                <div className="grid lg:grid-cols-3 gap-6 items-start justify-center">
                    <img src="/images/banners/lifestyle-1.jpg" className="w-full" />
                    <div className="flex flex-col lg:col-span-2 items-start justify-center gap-6">
                        <h4 className="text-2xl text-left">Experience Unparalleled Luxury</h4>
                        <p className="text-lg text-left">Infinium takes pride in creating living spaces that redefine luxury. From exquisite design elements to state-of-the-art amenities, we believe in providing you with an elevated lifestyle that exceeds your expectations and adds a touch of opulence to your everyday living.</p>
                        <p className="text-lg text-left">Immerse yourself in the epitome of luxury, where every detail is meticulously crafted to indulge your senses and create a haven of refined elegance.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 items-start justify-center gap-6">
                    <div className="flex flex-col lg:col-span-2 items-start lg:items-end justify-center gap-6">
                        <h4 className="text-2xl text-left lg:text-right">Embrace Vibrant Communities</h4>
                        <p className="text-lg text-left lg:text-right">Infinium goes beyond building homes; we create vibrant communities that foster a sense of belonging and well-being. With carefully planned social spaces, green environments, and recreational facilities, we enrich your lifestyle by providing opportunities for connection, relaxation, and a balanced living experience.</p>
                    </div>
                    <img src="/images/banners/lifestyle-2.jpg" className="w-full" />
                </div>

                <div className="grid lg:grid-cols-3 gap-6 items-start justify-center">
                    <img src="/images/banners/lifestyle-3.jpg" className="w-full" />
                    <div className="flex flex-col lg:col-span-2 items-start justify-center gap-6">
                        <h4 className="text-2xl text-left">Unmatched Convenience and Comfort</h4>
                        <p className="text-lg text-left">Infinium is dedicated to enhancing your daily life by prioritizing convenience and comfort. Our homes are thoughtfully designed to optimize space, functionality, and modern living requirements. From smart home features to efficient layouts, we strive to make your life easier, allowing you to focus on what truly matters—enjoying the best possible lifestyle.</p>
                    </div>
                </div>
                </Carousel>
      </section>
    )
}