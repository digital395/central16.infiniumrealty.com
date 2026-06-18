import Image from "next/image";
import Link from "next/link";


export default function({showBoth=false}){
    return(
    <section className={`px-4 py-14 container flex flex-col gap-20 mx-auto items-center`}>

        <div className="text-4xl text-center lg:w-2/3 capitalize blue-text">Our Vision</div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-1 items-center justify-center">
            <div className='w-full relative'>
              <img src={"/images/mission.jpg"} className='object-contain lg:w-2/3 lg:float-right' />
            </div>
            <div className="flex flex-col items-start px-8 justify-start gap-8">
                <p className="text-justify text-xl gray-text lg:w-2/3 font-light">
                To create <span className="blue-text font-bold">value</span> for all 
                our customers and stakeholders, across our <span className="blue-text font-bold">passionate journey </span>
                 of delivering <span className="blue-text font-bold">vibrant living spaces</span>, thereby <span className="blue-text font-bold">enriching people’s lifestyles</span> at 
                 every given opportunity. </p>
                {/* <p className="text-justify lg:w-2/3 gray-text">
                At Infinium, our vision is clear: to create value for all our customers 
                and stakeholders while embarking on a passionate journey of delivering 
                vibrant living spaces. We believe that a home is more than just a physical 
                structure; it is a sanctuary that enriches people's lifestyles and creates 
                lasting memories. With unwavering dedication, we strive to go beyond 
                expectations, crafting homes that inspire and uplift. Infused with thoughtful 
                design, modern amenities, and a commitment to excellence, our living spaces 
                are meticulously created to enhance your daily experiences. Join us on this 
                remarkable journey as we redefine the art of living and transform your dreams 
                into vibrant realities.
                </p> */}
                {!showBoth && <Link href={"/about-us"} className="primary-btn rounded-lg py-2 px-4 text-sm uppercase">Our Values</Link>}
            </div>
        </div>
        {
          showBoth && 
          <>
          <div className="text-4xl text-center lg:w-2/3 capitalize blue-text">Our Values</div>
          <div className="grid lg:grid-cols-2 gap-12 items-start justify-start">
             <div className="flex flex-col items-center justify-start gap-8">
                  <h3 className="text-3xl text-left lg:w-2/3 capitalize flex gap-4 items-center">
                    <Image src={"/images/transparancy-1.png"} width={50} height={50} alt="Transparency icon" />
                    Transparency 
                  </h3>
                  <p className="text-justify lg:w-2/3 gray-text">
                    We want to take immense pride in creating a legacy of operating a <span className="blue-text">transparent and ethical business model </span>
                    thereby assuring absolute confidence to all our customers, team members, vendors, business partners, 
                    land owners and all stake holders
                  </p>
              </div>
              <div className="flex flex-col items-center justify-start gap-8">
                  <h3 className="text-3xl text-left lg:w-2/3 capitalize flex gap-4 items-center">
                    <Image src={"/images/customer-centric-1.png"} width={50} height={50} alt="customer-centric Icon" />
                    Customer Centricity 
                  </h3>
                  <p className="text-justify lg:w-2/3 gray-text">
                    Putting our <span className="blue-text">customers at the centre</span> of all that we do by committing ourselves towards innovation, quality, fairness and customer service
                  </p>
              </div>
              <div className="flex flex-col items-center justify-start gap-8">
                  <h3 className="text-3xl text-left lg:w-2/3 capitalize flex gap-4 items-center">
                    <Image src={"/images/about-us/excellence-icon.png"} width={70} height={70} alt="Team Work Icon" />
                    Excellence 
                  </h3>
                  <p className="text-justify lg:w-2/3 gray-text">
                  To make people <span className="blue-text">believe and strive towards excellence</span> in quality across everyday work, deliverables and processes
                  </p>
              </div>
              <div className="flex flex-col items-center justify-start gap-8">
                  <h3 className="text-3xl text-left lg:w-2/3 capitalize flex gap-4 items-center">
                    <Image src={"/images/about-us/teamwork-icon.png"} width={50} height={50} alt="Team Work Icon" />
                    Team Work 
                  </h3>
                  <p className="text-justify lg:w-2/3 gray-text">
                  Enabling a team environment to constantly improve our standards to achieve excellence and <span className="blue-text">a commitment of support and respect to each individual</span>
                  </p>
              </div>
          </div>
          </>
        }
    </section>
    )
}