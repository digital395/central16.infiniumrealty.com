import Image from "next/image";
import Link from "next/link";
import Popup from "reactjs-popup";
import QueryForm from "./query-form";

export default function(){
    return(
        <footer className="w-full bg-gray-200 px-4 py-14">
            <div className="container mx-auto grid lg:grid-cols-3 items-start justify-center gap-12">

                <div className="flex flex-col gap-6 items-start justify-center">
                    <Image src="/images/infinium-logo-new.png" width={200} height={90} alt="Logo" quality={100} />
                    
                </div>

                <div className="flex flex-col gap-6 items-start justify-center">
                    <h4 className="text-2xl"> Contact </h4>
                    <p className="text-gray-700 text-sm">No. 1733/1, 2nd Floor, Trichy Rd, <br/>
                    Olymbus,  Ramanathapuram, <br/>Tamil Nadu  641045</p>
                    <p className="text-gray-600 text-sm">
                    <Link href="mailto:info@infinium.com">sales@infiniumrealty.com</Link>
                    <br/>
                    <Link className='underline' href='tel:+919787010000'>+91-97870-10000</Link>, <br />
                    <Link className='underline' href='tel:+9104223524400'>+91-0422-3524400 </Link>
                    </p>
                </div>


                

                <div className="flex flex-col gap-6 items-start justify-center">
                <h4 className="text-2xl"> Follow Us </h4>
                    <div className="flex gap-6">
                        <Link href={"https://www.facebook.com/InfiniumDevelopers"} target="_blank">
                            <Image src="/images/svgs/facebook.svg" width={30} height={30} />
                        </Link>
                        <Link href={"https://www.instagram.com/infiniumdevelopers/"} target="_blank">
                            <Image src="/images/svgs/instagram.svg" width={30} height={30} />
                        </Link>
                        <Link href={"https://www.linkedin.com/company/infinium-developers/"} target="_blank">
                            <Image src="/images/svgs/linkedin.svg" width={30} height={30} />
                        </Link>
                        <Link href={"https://twitter.com/infinium_realty"} target="_blank">
                            <Image src="/images/svgs/twitter.svg" width={30} height={30} />
                    </Link>
                    </div>
                </div>
                
            </div>
            <div className="lg:hidden w-full fixed grid grid-cols-2 gap-px z-50 bottom-0 left-0 bg-white">
                <Popup modal trigger={<button className="primary-btn px-4 py-2">Enquire Now</button>} overlayStyle={{background:'rgba(0,0,0,0.8)'}} lockScroll closeOnDocumentClick>
                {close => <div className="relative overflow-y-auto">
                                    <button onClick={close} className="absolute right-3 border border-black rounded-full w-6 h-6 hover:bg-amber-900 hover:text-white hover:border-white text-center text-xs flex justify-center items-center top-1">X</button>
                                    <QueryForm showBG={false} />
                                </div>}
                </Popup>
                <Link href={'tel:+91-97870-10000'} className="primary-btn px-4 py-2 text-center">Call Now</Link>
            </div>
        </footer>
    )
}