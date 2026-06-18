import { Roboto } from 'next/font/google'
import Head from 'next/head'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopHeader from '@/components/top-header'
import Header from '@/components/header'
import Banner from '@/components/banner'
import HomeAbout from '@/components/home-about'
import Seperator from '@/components/seperator'
import MisiionVision from '@/components/misiion-vision'
import Projects from '@/components/projects'
import BrandSection from '@/components/brand-section'
import Services from '@/components/services'
import NewsMedia from '@/components/news-media'
import Blogs from '@/components/blogs'
import QueryForm from '@/components/query-form'
import Footer from '@/components/footer';
import Link from 'next/link';

const inter = Roboto({ weight:["100", "300", "400", "500", "700", "900"],subsets: ['latin'] })

export default function About() {
  return (
    <main
      className={`min-h-screen ${inter.className}`}
    >
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Infinium."
        />
        <meta property="og:title" content="Infinium" />
        <meta property="og:description" content="Infinium" />
        <meta property="og:image" content="/images/banner-image.jpg" />
      </Head>
      <TopHeader />
      <Header />
      
      <section id='home-about' className="flex flex-col gap-12 px-4 py-14 container mx-auto items-center justify-center min-h-screen">
            <span className="uppercase blue-text block"> 404 Page Not Found</span>
            <h3 className="text-4xl text-center text-gray-600 lg:w-2/3 capitalize">
                    Page You are looking for could not be found
            </h3>
            <Link href='/' className='primary-btn px-3 py-2 rounded-md'>Back to home</Link>
        </section>
        {/* <Projects />
      <Seperator /> */}
      <Footer />
    </main>
  )
}
