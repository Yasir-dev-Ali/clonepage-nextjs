import Image from "next/image";
import AccuratePage from "../Accurate/page";
import PlanPage from "../Plan/page";
import "../fonts/page.css";

export default function DowntimePage() {
    return (
       <>
        <div className="bg-white py-16 px-6 md:px-12 flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold text-gray-800 font-fellix">Reliability with No Downtime</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-6xl w-full">
              
                <div className="bg-[#f4f6ff] rounded-lg p-4 flex flex-col ">
                    <Image src="/reliable-card-1.png" alt="Reliability Icon" width={480} height={120} />
                    <h2 className="text-3xl font-bold text-gray-800 mt-4 ">Unmatched Reliability</h2>
                    <p className="mt-2 text-gray-600 text-[18px] font-normal font-fellix">
                        We ensure you never miss a lead with Zeitblasts unparalleled reliability. Experience zero downtime and maintain a steady flow of leads without interruption.
                    </p>
                    <button className="mt-4 bg-[#06ab77] w-[150px] hover:text-black text-white font-bold py-2 px-6 rounded-full transition-all duration-200">
                        Learn More
                    </button>

                    {/* Testimonial */}
                    <div className="mt-6 bg-white p-4 rounded-lg text-left w-full">
                        <h3 className="text-gray-800">Regine Langhorn</h3>
                        <h4 className="text-sm text-gray-500">Lead Generation Manager @ Encore Real Estate</h4>
                        <p className="mt-2 text-gray-600 text-[18px] font-normal font-fellix">
                        We switched from another text marketing platform to Zeitblast. Unreliability and down time was a huge concern for us, since we switched to Zeitblast not once we experienced any downtime and the deliverability is amazing.
                        </p>
                    </div>
                </div>

               
                <div className="bg-[#f7f8fc] p-6 rounded-lg  flex flex-col  ">
                    <Image src="/reliable-card-2.png" alt="Compliance Icon" width={480} height={120} />
                    <h2 className="text-3xl font-bold text-gray-800 mt-4 ">Build in A2P 10DLC compliance feature</h2>
                    <p className="mt-2 text-gray-600 text-[18px] font-normal font-fellix">
                        Stay compliant effortlessly with our built-in features designed to meet all regulatory requirements. Focus on your business while we handle compliance.
                    </p>
                    <button className="mt-4 bg-[#06ab77] w-[150px] hover:text-black text-white font-bold py-2 px-6 rounded-full transition-all duration-200">
                        Learn More
                    </button>

                    
                    <div className="mt-6 bg-white p-4 rounded-lg text-left w-full">
                        <h3 className=" text-gray-800">Jay Bustamante</h3>
                        <h4 className="text-sm text-gray-500">Real Estate Investor @ Smart REI</h4>
                        <p className="mt-2 text-gray-600 text-[18px] font-normal font-fellix">
                        Compliance was a huge concern for us, but with the built-in features, we now manage our campaigns confidently and without any legal worries.
                        </p>
                    </div>
                </div>
            </div>
            <AccuratePage />
            <PlanPage   />
          
        </div>
       </>
    );
}
