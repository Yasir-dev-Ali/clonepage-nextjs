import Image from "next/image";
import Footer from "../Footer/page";

export default function Banner() {
    return (
       
        <>
        <div className="py-20 flex justify-center w-full md:w-[80%]  z-0 mx-auto">
            <div
                className="flex flex-col items-center justify-center rounded-2xl   px-8 py-16 relative overflow-hidden text-center bg-cover bg-center"
                style={{ backgroundImage: "url('/bg-a1dcc49a.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",width: "100%" }}
            >
                
                <div className="absolute inset-0  bg-opacity-50 rounded-2xl"></div>
                    
                    
                <Image

                    src="/Brand-logo.svg"
                    alt="Brand Logo"
                    width={190}
                    height={50}
                    className="mb-6 relative z-10"
                />
                    
                    
                <h1 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                Not sure what plan is best for you?
                </h1>

               
                <p className="mt-3  text-white relative z-10 max-w-2xl text-2xl">
                See how our system can work for your business

                </p>

                {/* Call-to-Action Button */}
                <div className="mt-6 relative z-10">
                    <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md  transition">
                        Request a Demo
                    </button>
                </div>
            </div>
         
        </div>
        <Footer />
        </>
    );
}
