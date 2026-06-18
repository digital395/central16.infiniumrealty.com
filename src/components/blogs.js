import Image from "next/image";
import Link from "next/link";

export default function(){
    return(
        <section id='home-about' className="flex flex-col gap-12 px-4 py-14 container mx-auto items-center justify-center">
        <div className="sub-heading text-sm uppercase">Blogs</div>
        <div className='grid lg:grid-cols-2 gap-12'>

          <div className='blog-card flex flex-col gap-4 bg-gray-100 rounded-md shadow-md overflow-hidden pb-8'>
            <div className='relative h-[300px]'>
              <Image src={'/images/blogs/coimbatore.jpeg'} fill={true} className='object-cover object-left-top' />
            </div>
            <h6 className='text-xl text-black px-4'>TWhy Coimbatore Is the Best Place to Invest in Real Estate: A City of Opportunities</h6>
          </div>

          <div className='blog-card flex flex-col bg-gray-100 gap-4 rounded-md shadow-md overflow-hidden pb-8'>
            <div className='relative h-[300px]'>
              <Link href={"/blogs/"}><Image src={'/images/projects/central-16.png'} fill={true} className='object-cover object-left-top' /></Link>
            </div>
            <Link><h6 className='text-xl text-black px-4'>Top reasons to buy residential plot in ECR, Chennai</h6></Link>
          </div>
        </div>      
      </section>
    )
}