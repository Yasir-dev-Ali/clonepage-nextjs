"use client";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons"; // Import dropdown icon

export default function Frequently() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Function to toggle FAQ items (only one open at a time)
    const toggleFAQ = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className=" py-16 px-6 md:px-12 flex flex-col items-center">
            <h1 className="text-center text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl w-full">
                {/* FAQ 1 */}
                <div className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition-all" onClick={() => toggleFAQ(0)}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">How does text message lead generation work?</h2>
                        <div className={`w-8 h-8 flex items-center justify-center bg-green-500 rounded-full transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`}>
                            <DownOutlined className="text-white text-base" />
                        </div>
                    </div>
                    {openIndex === 0 && <p className="mt-3 text-gray-600">Our platform helps businesses generate leads through targeted messaging.</p>}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition-all" onClick={() => toggleFAQ(1)}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">What is the deliverability rate of your text messages?</h2>
                        <div className={`w-8 h-8 flex items-center justify-center bg-green-500 rounded-full transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}>
                            <DownOutlined className="text-white text-base" />
                        </div>
                    </div>
                    {openIndex === 1 && <p className="mt-3 text-gray-600">We ensure a high deliverability rate, following industry best practices.</p>}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition-all" onClick={() => toggleFAQ(2)}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">How many messages can I send per month?</h2>
                        <div className={`w-8 h-8 flex items-center justify-center bg-green-500 rounded-full transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}>
                            <DownOutlined className="text-white text-base" />
                        </div>
                    </div>
                    {openIndex === 2 && <p className="mt-3 text-gray-600">You can send unlimited messages based on your subscription plan.</p>}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition-all" onClick={() => toggleFAQ(3)}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Is there a contract or can I cancel at any time?</h2>
                        <div className={`w-8 h-8 flex items-center justify-center bg-green-500 rounded-full transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}>
                            <DownOutlined className="text-white text-base" />
                        </div>
                    </div>
                    {openIndex === 3 && <p className="mt-3 text-gray-600">Our service is flexible, allowing you to cancel anytime without penalties.</p>}
                </div>
                {/* FAQ 4 */}
                <div className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition-all" onClick={() => toggleFAQ(3)}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Is there a contract or can I cancel at any time?</h2>
                        <div className={`w-8 h-8 flex items-center justify-center bg-green-500 rounded-full transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}>
                            <DownOutlined className="text-white text-base" />
                        </div>
                    </div>
                    {openIndex === 4 && <p className="mt-3 text-gray-600">Our service is flexible, allowing you to cancel anytime without penalties.</p>}
                </div>
                {/* FAQ 4 */}
                <div className="bg-white rounded-lg shadow-md p-5 cursor-pointer transition-all" onClick={() => toggleFAQ(3)}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-800">Is there a contract or can I cancel at any time?</h2>
                        <div className={`w-8 h-8 flex items-center justify-center bg-green-500 rounded-full transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}>
                            <DownOutlined className="text-white text-base" />
                        </div>
                    </div>
                    {openIndex === 5 && <p className="mt-3 text-gray-600">Our service is flexible, allowing you to cancel anytime without penalties.</p>}
                </div>
            </div>
        </div>
    );
}
