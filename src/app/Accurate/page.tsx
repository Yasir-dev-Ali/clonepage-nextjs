import Image from "next/image";
import "../fonts/page.css";


export default function AccuratePage() {
    return (
        <div className="bg-[#012635] py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center mt-8 rounded-lg max-w-6xl mx-auto">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                    src="/reliabailityCard_1.png" 
                    alt="accurate" 
                    width={500} 
                    height={300} 
                    className="shadow-lg rounded-lg w-full max-w-md"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-white p-6">
                <h1 className="text-3xl font-bold">True Accurate Deliverability</h1>
                <p className="text-lg mt-4 text-[18px] text-gray-300">
                    Achieve the highest deliverability rates in the industry with our service. Your messages will reach the right audience, maximizing your lead generation efforts.
                </p>
                <button className="mt-4 hover:bg-[#06ab77] bg-white text-black font-bold py-2 px-6 rounded-full transition-all duration-200">
                    Learn More
                </button>

                
                <div className="mt-6 bg-[#012635] text-white p-4 rounded-lg text-xl">
                    <h3 className="font-bold text-lg">Jay Bustamante</h3>
                    <h4 className=" text-gray-300 text-xl">Real Estate Investor @ Smart REI</h4>
                    <p className="mt-2 text-gray-200">
                        Compliance was a huge concern for us, but with the built-in features, we now manage our campaigns confidently and without any legal worries.
                    </p>
                </div>
            </div>
          
        </div>

    );
}
