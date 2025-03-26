import Image from "next/image";
import Lead from "../Lead/page";

export default function Hero() {
    return (
        <>
        <div className="bg-white py-16 px-6 md:px-12 md:py-34 space-y-8 md:space-y-16 md:mt-24">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-fellix w-[75%] mx-auto">
                    Generate More Leads & Close More Deals
                </h1>
                <p className="text-gray-600 mt-4 text-lg md:text-xl w-[60%] mx-auto font-fellix">
                    Create Opportunities with Us! Become a Zeitblast Partner and Accelerate Your Real Estate Success.
                </p>

                {/* Email Input & Button Section */}
                <div className="mt-8 flex justify-center items-center space-x-4">
                    <div className="flex w-full max-w-3xl items-center border border-gray-200 rounded-full overflow-hidden bg-white ">
                        <input
                            type="email"
                            placeholder="Work Email"
                            className="w-[65%] px-6 py-4 outline-none text-gray-700 text-lg"
                        />
                        <button className="bg-[#06ab77] w-[35%]  text-white py-4  px-2 md:px-16 text-lg rounded-full hover:bg-[#1e9b50] hover:text-black transition-colors duration-200 font-bold">
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="mt-16 flex justify-center items-center">
                <div className="relative">
                    <Image 
                        src="/herosection.png" 
                        alt="hero image" 
                        width={1000} 
                        height={500} 
                        className="shadow-lg rounded-lg"
                    />
                </div>
            </div>

            {/* Trusted By Section */}
            <h1 className="text-center  font-semibold text-gray-400">
                TRUSTED BY YOUR FAVORITE GROUPS & MANY MORE
            </h1>
            <div className="flex justify-center items-center space-x-4">
                <Image src="/download.png" alt="trusted by 1" width={100} height={100} />
                <Image src="/icon.png" alt="trusted by 2" width={100} height={100} />
                <Image src="/icon-2.png" alt="trusted by 3" width={100} height={100} />
                <Image src="/icon-3.png" alt="trusted by 4" width={100} height={100} />
                <Image src="/icon-4.png" alt="trusted by 4" width={100} height={100} />
                <Image src="/icon-5.png" alt="trusted by 4" width={100} height={100} />

                </div>

        </div>
        <Lead />
        </>
        
    );
}
