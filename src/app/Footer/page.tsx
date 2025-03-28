import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#03232f] text-white py-12 w-full h-screen ">
            <div className="px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold flex items-center">
                        <Image src="/Brand-logo.svg" alt="Brand Logo" width={90} height={50} className="mr-2" />
                    </h2>
                    <p className="mt-4 text-lg">The phone system for modern business</p>
                    <div className="mt-4">
                        <p className="text-sm font-semibold">Follow us</p>
                        <div className="flex space-x-3 mt-2">
                            <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
                            <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
                            <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-400" />
                            <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
                            <FaYoutube className="text-xl cursor-pointer hover:text-gray-400" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm font-semibold">Mobile app</p>
                        <div className="flex space-x-3 mt-2">
                            <FaApple className="text-2xl cursor-pointer hover:text-gray-400" />
                            <FaGooglePlay className="text-2xl cursor-pointer hover:text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Solutions */}
                <div>
                    <h3 className="font-bold text-lg">Solutions</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>Real Estate Lead Generation</li>
                        <li>Support for Real Estate Wholesalers</li>
                        <li>Done-for-You Lead Generation</li>
                        <li>Sales Teams Solutions</li>
                        <li>Marketing Teams Solutions</li>
                        <li>Customer Support Solutions</li>
                    </ul>
                </div>

                {/* Product */}
                <div>
                    <h3 className="font-bold text-lg">Product</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>High Deliverability and Response Rates</li>
                        <li>Drip Campaigns</li>
                        <li>Multi-Market Outreach</li>
                        <li>Quick Replies</li>
                        <li>Custom Tagging</li>
                        <li>Number Validation</li>
                        <li>Auto Compliance</li>
                        <li>CRM Integration</li>
                        <li>Pricing</li>
                        <li>Get Started</li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="font-bold text-lg">Features</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>Vault Access for Real Estate</li>
                        <li>Education</li>
                        <li>Disposition and TC Support</li>
                        <li>5K Free Skip-Traced List</li>
                        <li>Hands-Free Lead Generation</li>
                        <li>Real-Time Analytics</li>
                        <li>Weekly Q&A Sessions</li>
                        <li>Vetted Lead Delivery</li>
                    </ul>
                </div>

                {/* Resources & Company */}
                <div>
                    <h3 className="font-bold text-lg">Resources</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>Blog</li>
                    </ul>
                    <h3 className="font-bold text-lg mt-6">Company</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
