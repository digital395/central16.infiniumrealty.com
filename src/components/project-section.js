import Image from "next/image";
import Link from "next/link";
import Popup from "reactjs-popup";
import QueryForm from "./query-form";

export default function(){
    return(
        <section id="home" className='blue-bg relative'>
                
                <div className='container mx-auto grid lg:grid-cols-2 px-4 pt-24 pb-14 items-center justify-center gap-4'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='leading-normal text-2xl'>A Breezy Rendezvous with Mediterranean Luxury Villas <br className="hidden lg:block"></br> at Central Studio Road, Ramanathapuram</h2>
                        
                        <Image src="/images/projects/central-16/central-16-main-logo.png" width={443} height={127} alt='Central 16' className="mix-blend-lighten" quality={0} />
                        <div className='flex flex-wrap gap-3 opacity-70 justify-left text-[18px] text-gray-300'>
                            <span className="rounded-2xl border border-gray-300 px-7 py-2">Area: 1.42 Acres</span>
                            <span className="rounded-2xl border border-gray-300 px-7 py-2">Configuration: 4 BHK Villas</span>
                            <span className="rounded-2xl border border-gray-300 px-7 py-2">No. of Units: 16</span>
                        </div>
                        <div className='text-2xl relative'>
                            <span className="gold-text">Price: </span><span className="text-3xl text-bold gold-text-2">₹4.32 Cr Onwards*</span>
                        </div>
                        {/* <div className="text-2xl gold-text">
                            Special Launch Price: <span className='text-4xl font-bold'>₹4.14 Cr</span> Onwards*
                        </div> */}
                        
                    </div>
                    <div className='flex flex-col items-center gap-6'>
                        <span className='text-sm'>Rera ID: TN/11/building/00261/2023</span>
                        <img src="/images/projects/central-16/infinium-central-16.png" className='object-cover object-left-top max-h-[600px] w-[100%]' />
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                            <Popup trigger={
                            <button href="/Central_16_Brochure.pdf" className="primary-btn py-2 px-4" target="_blank">Download Brochure</button>}
                            modal
                            overlayStyle={{'background':'rgba(0,0,0,0.8)'}}
                            lockScroll
                            >
                               {close => <div className="relative overflow-y-auto">
                                    <button onClick={close} className="absolute right-3 border border-black rounded-full w-6 h-6 hover:bg-amber-900 hover:text-white hover:border-white text-center text-xs flex justify-center items-center top-1">X</button>
                                    <QueryForm showBG={false} download />
                                </div>}
                            </Popup>
                            <Popup trigger={
                            <button href="/Central_16_Brochure.pdf" className="primary-btn py-2 px-4" target="_blank">Walkthrough Video</button>}
                            modal
                            overlayStyle={{'background':'rgba(0,0,0,0.8)'}}
                            lockScroll
                            >
                                {close => <div className="w-full lg:w-[60vw] h-[50vh] lg:h-[80vh] bg-white relative">
                                    <button onClick={close} className="absolute right-3 border rounded-full w-6 h-6 z-50 bg-amber-900 text-white border-white text-center text-xs flex justify-center items-center top-1">X</button>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FIgmQ9HRPxQ?si=1M1oF81BikoPf3-9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>}
                            </Popup>
                        </div>
                    </div>
                </div>
                
            </section>
    )
}