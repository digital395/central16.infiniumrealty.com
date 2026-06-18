import Link from "next/link";

export default function(){

    return(
        <section id='home-about' className="flex flex-col gap-12 px-4 py-14 container mx-auto items-center justify-center">
            <div className="sub-heading text-sm uppercase">Who We Are</div>
            <h3 className="text-4xl text-center text-gray-600 lg:w-2/3 capitalize">
                Elevating Aspirations for Sustainable Living <br /> Introducing 
                <span className="uppercase blue-text"> Infinium</span>
            </h3>
            <p className="text-justify lg:w-2/3 gray-text">
                Welcome to <span className="uppercase blue-text"> Infinium</span>, the epitome of a new age real estate 
                company that is revolutionizing the industry. We are more than 
                just a property firm; we are passionate advocates of 
                aspirational and sustainable living. At <span className="uppercase blue-text"> Infinium</span>, we believe 
                in creating vibrant and positive communities that reflect the dreams 
                and aspirations of our clients. Our commitment to sustainability, 
                innovation, and personalized service sets us apart in the real estate 
                landscape.
            </p>
            <Link href={"/about-us"} className="primary-btn rounded-lg py-2 px-4 text-sm uppercase">More About</Link>
        </section>
    )
}