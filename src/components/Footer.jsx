import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-8">
            
            <div className="text-center mb-6">
                <h1 className="text-xl font-bold">
                    <span className="text-white">Event</span>
                    <span className="text-primary ml-1">Hive</span>
                </h1>
            </div>

        
            <div className="flex justify-center mb-8">
                <div className="flex gap-2 flex-wrap justify-center">
                    <input 
                        className="bg-white rounded text-black px-4 py-2 text-sm min-w-60" 
                        type="email" 
                        placeholder="Enter your mail" 
                        name="email" 
                    />
                    <button 
                        className="bg-primary hover:bg-purple-600 rounded py-2 px-6 text-sm font-medium transition-colors" 
                        type="button"
                    >
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="flex justify-center gap-8 mb-6 flex-wrap text-sm">
                <span className="cursor-pointer hover:text-purple-400">Home</span>
                <span className="cursor-pointer hover:text-purple-400">About</span>
                <span className="cursor-pointer hover:text-purple-400">Services</span>
                <span className="cursor-pointer hover:text-purple-400">Get in touch</span>
                <span className="cursor-pointer hover:text-purple-400">FAQs</span>
            </div>

            
            <hr className="border-white mx-8 mb-6" />

           
            <div className="flex justify-between items-center mx-8 flex-wrap gap-4 md:flex-nowrap">
               
                <div className="flex gap-4 text-sm order-1 md:order-1">
                    <button className="bg-primary px-3 py-1 rounded text-xs">English</button>
                    <button className="hover:text-purple-400">Hindi</button>
                </div>

              
                <div className="flex gap-3 order-2 md:order-2">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                        <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                        <Instagram className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                        <Facebook className="w-4 h-4" />
                    </div>
                </div>

               
                <p className="text-xs text-gray-300 order-3 md:order-3 w-full md:w-auto text-center md:text-right">
                    Non Copyrighted © 2025 Upload by EventHive
                </p>
            </div>


        </footer>
    );
}