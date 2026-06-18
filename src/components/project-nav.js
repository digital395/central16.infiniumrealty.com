import Link from "next/link";
import { useEffect, useState } from "react";

export default function(){
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector("#project-nav");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };

    return(
        <section id="project-nav" className={`w-full overflow-x-auto px-4 z-50 bg-white ${scroll > headerTop ? 'is-sticky fixed top-0 py-2':'py-4'}`}>
                <div className="container mx-auto">
                    <ul className='flex gap-4 justify-start lg:justify-center items-center flex-nowrap'>
                        <li className='px-4 py-1 border border-gray-200 rounded-md primary-btn'>
                            <Link href={"#amenities"}>Amenities</Link>
                        </li>
                        <li className='px-4 py-1 border border-gray-200 rounded-md primary-btn whitespace-nowrap'>
                            <Link href={"#floor-plans"}>Floor Plans</Link>
                        </li>
                        <li className='px-4 py-1 border border-gray-200 rounded-md primary-btn'>
                            <Link href={"#gallery"}>Gallery</Link>
                        </li>
                        <li className='px-4 py-1 border border-gray-200 rounded-md primary-btn'>
                            <Link href={"#spec-table"}>Specifications</Link>
                        </li>
                        <li className='px-4 py-1 border border-gray-200 rounded-md primary-btn'>
                            <Link href={"#location"}>Location</Link>
                        </li>
                        
                    </ul>
                </div>
            </section>
    )
}