import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import Frequently from "../Frequently/page";

export default function PlanPage() {
    return (
        <>
        <div className="w-full bg-white py-16 px-6 md:px-12">
          
            <h1 className="text-center text-4xl font-bold text-gray-800">
                Four Plans Loaded with Opportunities
            </h1>

            <div className="flex flex-col gap-8 mt-12 max-w-5xl mx-auto border border-gray-200 ">
                
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                    {/* Plan Title */}
                    <h1 className="text-2xl font-bold text-[#06ab77] flex items-center gap-4">
                    {`I'm Serious`}
                        <span className="border border-gray-300 px-3 py-1 text-sm rounded-lg bg-gray-100">
                            Most Popular
                        </span>
                    </h1>
                    
                    {/* Plan Description */}
                    <p className="text-lg mt-4 text-gray-600">
                        Commit to success with our Im Serious Plan, packed with advanced tools 
                        and dedicated support for real estate professionals ready to get started.
                    </p>
                    
                    {/* Price */}
                    <div className="mt-6">
                        <h2 className="text-4xl font-bold text-gray-800">$260/<span className="text-sm">month</span></h2>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="mt-6 bg-[#06ab77] hover:bg-[#048a5a] text-white font-bold py-3 w-full rounded-full transition-all duration-200">
                    Subscribe
                    </button>

                    {/* Features List */}
                    <div className="mt-6 text-lg text-gray-600 space-y-3">
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Send up to 15,000 Initial Outbound Messages
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Unlimited drip campaigns
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Free unlimited inbound & outbound active conversations
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Guaranteed Highest Delivery & Response
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> All local numbers with unlimited exchanges
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Built-in 10DLC compliance feature
                        </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="mt-6 text-center">
                        <button className="text-[#06ab77] hover:text-black font-semibold hover:underline">
                            Learn More
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-12 max-w-5xl mx-auto border border-gray-200 ">
                
                <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                    {/* Plan Title */}
                    <h1 className="text-2xl font-bold text-[#192bc2] flex items-center gap-4">
                    Time to Scale
                        <span className="border text-[#06ab77]  border-gray-300 px-3 py-1 text-sm rounded-lg bg-gray-100">
                            Most Popular
                        </span>
                    </h1>
                    
                    {/* Plan Description */}
                    <p className="text-lg mt-4 text-gray-600">
                        Commit to success with our Im Serious Plan, packed with advanced tools 
                        and dedicated support for real estate professionals ready to get started.
                    </p>
                    
                    {/* Price */}
                    <div className="mt-6">
                        <h2 className="text-4xl font-bold text-gray-800">$270/<span className="text-sm">month</span></h2>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="mt-6 bg-[#192bc2] hover:bg-[#048a5a] text-white font-bold py-3 w-full rounded-full transition-all duration-200">
                    Subscribe

                    </button>

                    {/* Features List */}
                    <div className="mt-6 text-lg text-gray-600 space-y-3">
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Send up to 15,000 Initial Outbound Messages
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Unlimited drip campaigns
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Free unlimited inbound & outbound active conversations
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Guaranteed Highest Delivery & Response
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> All local numbers with unlimited exchanges
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Built-in 10DLC compliance feature
                        </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="mt-6 text-center">
                        <button className="text-[#06ab77] hover:text-black font-semibold hover:underline">
                            Learn More
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-12 max-w-5xl mx-auto border border-gray-200 ">
                
                <div className=" bg-[#012635] p-8 rounded-lg shadow-lg w-full">
                    {/* Plan Title */}
                    <h1 className="text-2xl font-bold text-white flex items-center gap-4">
                    Market Dominator
                        <span className="border  text-[#06ab77] border-gray-300 px-3 py-1 text-sm rounded-lg bg-gray-100">
                            Most Popular
                        </span>
                    </h1>
                    
                    {/* Plan Description */}
                    <p className="text-lg mt-4 text-white">
                    Ready to dominate the market? The Market Dominator Plan is designed for top-tier professionals with a full-scale operation, offering wide resources.
                    </p>
                    
                    {/* Price */}
                    <div className="mt-6">
                        <h2 className="text-4xl font-bold text-gray-800">$260/<span className="text-sm">month</span></h2>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="mt-6 bg-white text-black hover:bg-[#048a5a] hover:text-white font-bold py-3 w-full rounded-full transition-all duration-200">
                    Subscribe
                    </button>

                    {/* Features List */}
                    <div className="mt-6 text-lg text-white space-y-3">
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Send up to 15,000 Initial Outbound Messages
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Unlimited drip campaigns
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Free unlimited inbound & outbound active conversations
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Guaranteed Highest Delivery & Response
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> All local numbers with unlimited exchanges
                        </p>
                        <p className="flex items-center gap-2">
                            <CheckOutlined className="text-[#06ab77]" /> Built-in 10DLC compliance feature
                        </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="mt-6 text-center">
                        <button className="text-white font-semibold hover:underline">
                            Learn More
                            <ArrowRightOutlined />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Frequently />
       
       
        </>
    );
}
