import Image from "next/image";
import Link from "next/link";

export default function(){
    return(
        <section className='mt-14'>
       <div className='w-full relative h-[15px] lg:h-[74px] p-0 m-0'>
          <Image src="/images/building-bg.png" fill={true} className='object-contain' />
        </div>
        
        <div className='bg-gray-100 m-0 w-full'>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-4 py-14 px-4 gap-12'>
          <div className='lg:col-span-4'>
            <h3 className="text-4xl text-center capitalize">Blogs</h3>
          </div>
          <div></div>
          <div className='card overflow-hidden rounded-md shadow-md flex flex-col gap-4 bg-white pb-2'>
            <Link href={"/blogs/top-reasons-to-invest-in-coimbatore/"} className="h-[200px] relative">
              <Image src="/images/blogs/coimbatore.jpg" fill={true} className='object-cover object-left-top' />   
            </Link>
            
            <Link href={"/blogs/top-reasons-to-invest-in-coimbatore/"}>
              <h6 className='text-xl text-black px-4'>Why Coimbatore Is the Best Place to Invest in Real Estate: A City of Opportunities</h6>
            </Link>
            <p className='text-xs text-gray-400 px-4'>June 5 2023 - Pallavi Jain</p>
          </div>


          <div className='card overflow-hidden rounded-md shadow-md flex flex-col gap-4 bg-white pb-2'>
              <Link className="h-[200px] relative" href={"/blogs/home-loan-in-india/"}>
                <Image src="/images/blogs/home-loan.jpg" fill={true} className='object-cover object-left-top' />   
              </Link>
            <Link href={"/blogs/home-loan-in-india/"}><h6 className='text-xl text-black px-4'>Unlocking the Power of Home Loans: Exploring the Benefits in India</h6></Link>
            <p className='text-xs text-gray-400 px-4'>June 7 2023 - Sheetal Mohanti</p>
          </div>
          <div></div>
          {/* <div className='card overflow-hidden rounded-md shadow-md flex flex-col gap-4 bg-white pb-2'>
            <div className='h-[250px] relative'>
              <Image src="/images/projects/central-16.png" fill={true} className='object-cover object-left-top' />   
            </div>
            <h6 className='text-xl text-black px-4'>Top reasons to buy residential plot in ECR, Chennai</h6>
            <p className='text-xs text-gray-400 px-4'>May 19 2023 - Times Of India</p>
          </div> */}
          <div className="flex items-center justify-center lg:col-span-4">
            <Link href={"/blogs"} className="primary-btn px-4 py-2 rounded-md">Read More</Link>
          </div>
        </div>
        </div>
      </section>
    )
}