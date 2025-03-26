
"use client";
import Image from "next/image";

export default function Lead() {
    return (
        <>
            <div className="rounded-tl-[60px] rounded-tr-[60px] flex justify-between items-center bg-[#1f22ad] py-16 px-6 md:px-12 md:py-34 space-y-8 md:space-y-16 md:mt-6">
                {/* Left Section */}
                <div className="max-w-4xl text-white w-[60%] font-fellix">
                    <h1 className="text-4xl font-bold">Leaders in SMS Lead Generation</h1>
                    <p className="mt-4 text-lg">
                        Proud to be recognized as a top-rated platform for real estate and marketing professionals.
                        Zeitblast empowers real estate professionals and marketers to generate more leads,
                        close more deals, and scale their businesses with confidence.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex space-x-4">
                        <button className="bg-white text-black w-40 md:w-48 py-3 md:py-4 rounded-full hover:bg-[#06ab77] hover:text-white transition duration-200 font-bold">
                            Get Started
                        </button>
                        <button className="bg-[#1f22ad]  border border-white  text-white w-48 md:w-56 py-3 md:py-4 rounded-full hover:bg-[#1e9b50] hover:text-black transition duration-200 font-bold">
                            Request Demo
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative w-[50%] hidden md:block">
                    <Image
                        src="/certificates.png"
                        alt="hero image"
                        width={700}
                        height={450}

                    />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#f9f9f9] py-16 px-6 md:px-12 md:py-34 space-y-8 md:space-y-16">
                <h1>Smarter conversations, in a few minutes User-friendly text marketing packed with powerful features.</h1>
                <div className="flex justify-center items-center space-x-4">
                    <Image src="/icon-6.png" alt="trusted by 1" width={100} height={100} />
                    <div className="max-w-[60%]">
                        <h1>Set up in seconds</h1>
                        <p>Start sending SMS messages in minutes with our easy-to-use platform.</p>
                        <button>
                            Learn More
                        </button>
                        </div>
                        </div>
                <div className="flex justify-center items-center space-x-4">
                    <Image src="/icon-6.png" alt="trusted by 1" width={100} height={100} />
                    <div className="max-w-[60%]">
                        <h1>Set up in seconds</h1>
                        <p>Start sending SMS messages in minutes with our easy-to-use platform.</p>
                        <button>
                            Learn More
                        </button>
                        </div>
                        </div>




            </div>
        </>


    );
}
