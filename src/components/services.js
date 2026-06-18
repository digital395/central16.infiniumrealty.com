import Image from "next/image";

export default function Services(){
    return(
    <section className="flex flex-col gap-12 px-4 py-14 container mx-auto items-center justify-center">
        <div className="sub-heading text-sm uppercase">The Infinium Promise</div>
        <h3 className="text-4xl text-center lg:w-2/3 capitalize">Unlocking Infinite Possibilities: Unparalleled benefits from the House of Infinium</h3>
        <div className='grid lg:grid-cols-3 gap-6'>
            <div className='flex flex-col items-center justify-center gap-6 px-10'>
                <Image src="/images/customer-centric.jpg" width={150} height={150} quality={100} className='rounded-full' />
                <h5 className='text-xl'>Customer-Centric Approach</h5>
                <p className='text-justify flex-1'>At Infinium, we prioritize our customers and place their needs at the heart of everything we do. Our customer-centric approach ensures that your satisfaction and well-being are our top priorities.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 px-10'>
                <Image src="/images/residential.jpg" width={150} height={150} quality={100} className='rounded-full' />
                <h5 className='text-xl'>Uncompromised Quality</h5>
                <p className='text-justify flex-1'>At Infinium, we prioritize quality without cutting corners. From the foundation to the finishing touches, we uphold the highest standards of craftsmanship in every aspect of our projects.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 px-10'>
                <Image src="/images/commercial.png" width={150} height={150} quality={100} className='rounded-full' />
                <h5 className='text-xl'>Transparent Engagement</h5>
                <p className='text-justify flex-1'>Transparency is at the core of our values. We believe in fostering open communication with all stakeholders, including our customers, partners, and investors.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 px-10'>
                <Image src="/images/design.jpg" width={150} height={150} quality={100} className='rounded-full' />
                <h5 className='text-xl'>Exquisite Design Excellence</h5>
                <p className='text-justify flex-1'>At Infinium, we take pride in offering best-in-class product design that embodies excellence in space planning, focus on natural light, ventilation, lush greenery and open spaces</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 px-10'>
                <Image src="/images/timely-delivery.jpg" width={150} height={150} quality={100} className='rounded-full' />
                <h5 className='text-xl'>Timely Project Delivery</h5>
                <p className='text-justify flex-1'>Infinium is committed to delivering projects on time, surpassing industry standards. We understand the importance of meeting deadlines and ensuring a hassle-free experience for our customers.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 px-10'>
                <Image src="/images/enriched-lifestyle.jpg" width={150} height={150} quality={100} className='rounded-full' />
                <h5 className='text-xl'>Enriched Lifestyles</h5>
                <p className='text-justify flex-1'>Infinium is dedicated to providing value for money. Our product design packed with lifestyle amenities and features ensure that your home is not just a physical space; but an extension of your lifestyle.</p>
            </div>
        </div>
    </section>
    )
}