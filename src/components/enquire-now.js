import Link from "next/link";

export default function (){
    return(
        <div className="right-0 -rotate-90 origin-bottom-right top-[40%] primary-btn text-gray-50 fixed px-4 py-2 z-50">
            <Link className="" href={"#enquire-now"} scroll>
                <span className="block">Enquire Now</span>
            </Link>
        </div>
    )
}