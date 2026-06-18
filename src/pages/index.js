import AmenitiesSlider from '@/components/amenities-slider'
import EnquireNow from '@/components/enquire-now'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ProjectAbout from '@/components/project-about'
import ProjectFeatures from '@/components/project-features'
import ProjectGallery from '@/components/project-gallery'
import ProjectNav from '@/components/project-nav'
import ProjectPricing from '@/components/project-pricing'
import ProjectSection from '@/components/project-section'
import ProjectSpecification from '@/components/project-specification'
import QueryForm from '@/components/query-form'
import SiteplanSlider from '@/components/siteplan-slider'
import TopHeader from '@/components/top-header'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const inter = Roboto({ weight:["100", "300", "400", "500", "700", "900"],subsets: ['latin'] })

export default function(){



    return(
        <main className={`min-h-screen ${inter.className} w-full relative`}>
            <Head>
                <title> Central 16 | Infinium - Enriching Lifestyles</title>
                <meta
                name="description"
                content="Luxury Villas at Infinium Central-16: Unparalleled Elegance on Central Studio Road, Coimbatore | Find Price, Gallery, Floor Plans, Amenities, Highlights & Specifications."
                />
                <meta property="og:title" content="Luxury Villas at Infinium Central-16: Unparalleled Elegance on Central Studio Road, Coimbatore | Find Price, Gallery, Floor Plans, Amenities, Highlights & Specifications" />
                <meta property="og:description" content="Discover the Exquisite Luxury of Infinium Central-16  a Mediterranean Styled Boutique Luxury Villa Project, right on the Central Studio Road, Coimbatore" />
                <meta property="og:image" content="/images/projects/central-16/infinium-central-16.png" />
                <script src='/js/common.js' />
            </Head>
            <TopHeader />
            <Header isSticky={true} />
            <ProjectSection />
            <ProjectAbout />
            {/* <ProjectNav /> */}
            <ProjectFeatures />
            
            <AmenitiesSlider />
            <SiteplanSlider />
            <ProjectGallery />
            <ProjectSpecification />
            <ProjectPricing />
            <section id="location" className='w-full flex flex-col pt-2 gap-12'>
                <h4 className='subheading w-full text-center'>Location</h4>
                <div className='grid lg:grid-cols-2 gap-0'>
                <div className='relative min-h-[300px]'>
                    <Image src="/images/projects/central-16/location-map.jpg" fill priority quality={100} />
                </div>
                {/* <div className='relative'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6107832891917!2d77.00827147436927!3d10.992722655168254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859e249c8c70f%3A0x571069b4dbb96171!2sINFINIUM%20CENTRAL%2016!5e0!3m2!1sen!2sin!4v1686033513222!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
                <div className='px-8 pb-8'>
                <h4 className='text-2xl w-full mb-4'>Location Advantages</h4>
                    <ul className='flex list-none flex-col gap-6'>
                        <li className='flex items-center justify-start gap-4'>
                            <span className='text-4xl gold-text'>*</span>
                            <p>Located 2 mins off Trichy Road, within 5 mins drive from Singanallur Junction,
                            Ramanathapuram Junction & 10 mins to Race Course</p>
                        </li>
                        <li className='flex items-center justify-start gap-4'>
                            <span className='text-4xl gold-text'>*</span>
                            Close proximity to various schools, hospitals, Coimbatore Smart City Lakes and restaurants
                        </li>
                        <li className='flex items-center justify-start gap-4'>
                            <span className='text-4xl gold-text'>*</span>
                            Coimbatore's reputed schools including Alvernia, Carmel Garden, SSVM, BVM Global, Perks, St.
                            Francis, St. Joseph's and many more within 5 to 10 minutes
                        </li>
                        <li className='flex items-center justify-start gap-4'>
                            <span className='text-4xl gold-text'>*</span>
                            Coimbatore's reputed hospitals including Gem Hospital, Kidney Centre, PSG Hospitals, Child
                            Trust Hospital and many more within 10 to 15 minutes
                        </li>
                        <li className='flex items-center justify-start gap-4'>
                            <span className='text-4xl gold-text'>*</span>
                            Access to important highways including Salem-Kochi Highway and Ukkadam Pollachi bypass
                            within 10 to 15 minutes
                        </li>
                        <li className='flex items-center justify-start gap-4'>
                            <span className='text-4xl gold-text'>*</span>
                            10 minutes to CBE railway station and 20 minutes to International Airport
                        </li>
                    </ul>
                </div>
                <div className='lg:col-span-2 relative'>
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6107832891917!2d77.00827147436927!3d10.992722655168254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859e249c8c70f%3A0x571069b4dbb96171!2sINFINIUM%20CENTRAL%2016!5e0!3m2!1sen!2sin!4v1686033513222!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
                </div>
                </div>
            </section>
            <QueryForm />
            <Footer />
            <EnquireNow />
        </main>
    )
}   