import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

export default function({isSticky=0}) {
    const menuIconRef = useRef();
    const menuRef = useRef();
    const [menuicon, setMenuicon] = useState("|||");
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector("#header");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };

    const openMenu = ()=>{
      if(menuRef.current.classList.contains('hidden')){
        setMenuicon("X")
        menuRef.current.classList.remove('hidden')
      }
      else{
        setMenuicon("|||")
        menuRef.current.classList.add('hidden')
      }
    }
    return(
        
        <header id="header" className={`w-full p-2 shadow-lg ${isSticky?'fixed lg:top-6':'relative'} top-0 z-50 left-0 bg-white ${scroll > headerTop && isSticky ? 'is-sticky':''}`}>
          <Head>
          <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-0GBBQ6D5DW"></script>
          <script async dangerouslySetInnerHTML={{
            __html:`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0GBBQ6D5DW');`
          }}></script>
            </Head>
        <div className='grid grid-cols-3 items-center container mx-auto justify-items-stretch'>
          <div className='logo'>
            <Link scroll={false} href={"#home"}>
            <Image
             src="/images/infinium-logo-new.png"
             width={202}
             height={67}
             alt='Infinium Logo'
             quality={100}
             />
             </Link>
          </div>
          <div ref={menuIconRef} onClick={openMenu} className='mobile-menu-icon select-none lg:hidden absolute right-4 text-3xl origin-center rotate-90 cursor-pointer'>
            {menuicon}
          </div>
          <div ref={menuRef} className='gap-6 absolute hidden top-full right-0 py-10 lg:py-0 bg-white lg:relative lg:top-0 lg:flex justify-self-end col-span-2'>
            <ul className='flex flex-col lg:flex-row gap-4 justify-center items-left px-4 lg:items-center lg:px-0'>
              <li className=''>
                <Link scroll={false} href={"#about-central-16"}>About Central 16</Link>
              </li>
              <li className=''>
                <Link scroll={false} href={"#features"}>Features</Link>
              </li>
              <li className=''>
                <Link scroll={false} href={"#amenities"}>Amenities</Link>
              </li>
              <li className=''>
                <Link scroll={false} href={"#floor-plans"}>Floor Plans</Link>
              </li>
              <li className=''>
                <Link scroll={false} href={"#gallery"}>Gallery</Link>
              </li>
              <li className=''>
                <Link scroll={false} href={"#specifications"}>Specifications</Link>
              </li>
              <li className=''>
                <Link scroll={false} href={"#location"}>Location</Link>
              </li>
              <li className=''>
                <Link scroll={false} href={"#enquire-now"}>Contact Us</Link>
              </li>
            </ul>
            {/* <div className='social gap-2 flex mt-10 mx-4 lg:mx-0 lg:mt-0 justify-self-end'>
              <a href='https://www.facebook.com/InfiniumDevelopers' target='_blank'>
                <Image
                src='/images/svgs/facebook.svg'
                width={40}
                height={40}
                alt='Facebook'
                className='w-[40px] lg:w-[40px]'
                />
              </a>
              <a href='https://www.instagram.com/infiniumdevelopers/' target='_blank'>
                <Image
                src='/images/svgs/instagram.svg'
                width={40}
                height={40}
                alt='Facebook'
                className='w-[40px] lg:w-[40px]'
                />
              </a>
              <a href='https://www.linkedin.com/company/infinium-developers/' target='_blank'>
                <Image
                src='/images/svgs/linkedin.svg'
                width={40}
                height={40}
                alt='Facebook'
                className='w-[40px] lg:w-[40px]'
                />
              </a>
              <a href='https://twitter.com/infinium_realty' target='_blank'>
                <Image
                src='/images/svgs/twitter.svg'
                width={40}
                height={40}
                alt='Facebook'
                className='w-[40px] lg:w-[40px]'
                />
              </a>
            </div> */}
          </div>
          
        </div>
      </header>
    )
}