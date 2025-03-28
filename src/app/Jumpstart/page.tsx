"use client";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import DowntimePage from "../Downtime/page";

export default function JumpStart() {
    return (
        <>
            {/* Lead Generation Section */}
            <div className="rounded-tl-[60px] rounded-tr-[60px] flex flex-col md:flex-row justify-between items-center bg-[#1f22ad] py-16 px-6 md:px-12 space-y-8 md:space-y-0 md:mt-6 ">
                {/* Left Text Section */}
                <div className="max-w-4xl text-white w-full md:w-[60%] font-fellix">
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
                        <button className="bg-[#1f22ad] border border-white text-white w-48 md:w-56 py-3 md:py-4 rounded-full hover:bg-[#1e9b50] hover:text-black transition duration-200 font-bold">
                            Request Demo
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative w-full md:w-[50%] hidden md:block">
                    <Image src="/certificates.png" alt="hero image" width={700} height={450} />
                </div>
            </div>

            {/* Bottom Section */}

          
            <div className=" rounded-tl-[60px] rounded-tr-[60px] bg-white py-16 px-6 md:px-12 space-y-8 md:space-y-16 flex flex-col items-center justify-center   divide-gray-400 border-b-2">
                <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800">
                    Smarter conversations, in a few minutes
                </h1>
                <p className="text-center text-gray-600 max-w-2xl">
                    User-friendly text marketing packed with powerful features.
                </p>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg  flex flex-col items-center text-center">
                        <Image src="/card-image-1.png" alt="Icon" width={380} height={80} />
                        <h1 className="text-3xl font-bold text-gray-800 mt-4">Set up in seconds</h1>
                        <p className="text-gray-400 text-xl mt-2">In just a few clicks, you’ll be ready to have meaningful conversations from anywhere in the world.</p>
                        <button className="mt-3 text-black font-bold ">
                            Explore all features
                            <RightOutlined />
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg  flex flex-col items-center text-center">
                        <Image src="/card-image-2.png" alt="Icon" width={380} height={80} />
                        <h1 className="text-3xl font-bold text-gray-800 mt-4">Powerful Automation</h1>
                        <p className="text-gray-600 mt-2">Boost productivity and efficiency with drip automated, smarter conversations that enhance your outreach.</p>
                        <button className="mt-3 text-black font-bold ">
                            See our automation
                            <RightOutlined />
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
                        <Image src="/card-image-3.png" alt="Icon" width={380} height={80} />
                        <h1 className="text-3xl font-bold text-gray-800 mt-4">Real-time Analytics</h1>
                        <p className="text-gray-600 mt-2">Goodby guesswork. Hello, better decisions. Monitor metrics in real-time to start making measurable improvements.</p>
                        <button className="mt-3 text-black font-bold ">
                            Monitor key metrics
                            <RightOutlined />
                        </button>
                    </div>


                    <div className="bg-white p-6 rounded-lg  flex flex-col items-center text-center">
                        <Image src="/card-image-4.png" alt="Icon" width={380} height={80} />
                        <h1 className="text-3xl font-bold text-gray-800 mt-4">Seamless Integration</h1>
                        <p className="text-gray-600 mt-2">Whether you use Zeitblast as your primary CRM or integrate it with others using our one-click Push to CRM feature, experience advanced CRM capabilities and seamless integration.</p>
                        <button className="mt-3 text-black font-bold ">
                            Explore ZeitBlast AI
                            <RightOutlined />
                        </button>
                    </div>
                </div>

                <DowntimePage />
            </div>
        </>
    );
}