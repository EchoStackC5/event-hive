import { Star, MoreHorizontal } from "lucide-react";

export default function CollegeCard() {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Image Container */}
            <div className="relative">
                <img 
                    src={'https://images.unsplash.com/photo-1603437119287-4a3732b685f9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                    alt="Harvard University" 
                    className="w-full h-64 object-cover"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-35 left-4 bg-white rounded-full px-3 py-2 flex items-center gap-1 shadow-md">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-800">4.8</span>
                </div>
                
                {/* Exclusive Badge */}
                <div className="absolute top-35 right-4 bg-black text-white px-3 py-3 rounded-full text-xs font-semibold">
                    EXCLUSIVE
                </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 mb-2">Harvard University</h1>
                        <div className="flex items-center gap-2">
                            <h2 className="text-gray-600 text-sm">Cambridge, Massachusetts, UK</h2>
                        </div>
                    </div>
                    
                    {/* Menu Button */}
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
            </div>
        </div>
    );
}