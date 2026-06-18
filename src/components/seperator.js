import Image from "next/image";

export default function(){
    return(
        <div className="container relative mx-auto p-12 w-1/2">
            <div className="border-b seperator-border-color absolute left-0 top-0 bottom-0 right-0 m-auto h-0"></div>
            <div className="absolute left-0 top-0 bottom-0 right-0 m-auto w-full flex items-center justify-center">
                <Image
                    src="/images/infinium-sign.png"
                    width={206}
                    height={68}
                    alt="Infinium Sign"
                    quality={100}
                    priority
                    />

            </div>
        </div>
    )
}