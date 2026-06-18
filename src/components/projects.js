import Image from "next/image";
import Link from "next/link";

export default function({shoTopImage=true}){
    return(
        <section className='mt-14'>
          {shoTopImage? 
            <div className='w-full relative h-[15px] lg:h-[74px] p-0 m-0'>
                <Image src="/images/building-bg.png" fill={true} className='object-contain' />
              </div>:''
        }
        
        <div className={`${shoTopImage?'bg-gray-100':''} m-0 w-full`}>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 py-14 gap-12'>
          <div className='flex flex-col gap-6 items-center justify-center lg:col-span-2'>
            {shoTopImage?<div className="sub-heading text-sm uppercase">OUR PROJECTS</div>:''}
            
            <h3 className="text-4xl text-center capitalize">Discover Our {shoTopImage?'Latest':''} Project</h3>
            {/*  */}
          </div>
          <div className='p-4 flex flex-col gap-4 items-center justify-start lg:col-span-2 lg:w-1/2 lg:mx-auto'>
            <div className='w-full relative h-[400px] p-0 m-0'>
              <Link href={"/projects/central-16"}>
                <Image src="/images/projects/central-16.jpg" fill={true} className='object-cover object-left-bottom' />
                <span className="absolute right-0 bottom-0 px-3 py-1 text-sm text-gray-50 bg-black/50">Coimbatore, Tamil Nadu</span>
              </Link>
            </div>
            <Link href={"/projects/central-16"} className="">4 BHK Villas, Ramanathapuram</Link>
            <Link href={"/projects/central-16"} className="">Coimbatore</Link>
            <Link href={"/projects/central-16"} className="primary-btn rounded-lg py-2 px-4 text-sm uppercase">Know More</Link>
          </div>
          {/* <div className='p-4 flex flex-col gap-4 items-center justify-start relative'>
            <div className='w-full relative h-[400px] p-0 m-0'>
              <Image src="/images/projects/under-construction.jpg" fill={true} className='object-cover object-left-top' />
              <div className="absolute top-0 left-0 w-[300px] h-[100px] bg-black/50 text-gray-50 text-xl text-center flex justify-center items-center">Upcoming 9 Storey Building</div>
            </div>
            
            <p className=" rounded-lg py-2 px-4 text-sm uppercase">Coming Soon..</p>
          </div> */}
        </div>
        </div>
      </section>
    )
}