import { Star, MoreHorizontal } from "lucide-react";
import { Link } from "react-router";
import { imageBaseUrl } from "../api/client";

export default function CollegeCard({college}) {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Image Container */}
            <div className="relative">
                <img
                    src={`${imageBaseUrl}/${college.image}`}
                    alt={college.name}
                    className="w-full h-64 object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute top-50 left-4 bg-white rounded-full px-3 py-2 flex items-center gap-1 shadow-md">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-800">4.8</span>
                </div>

                {/* Exclusive Badge */}
                <div className="absolute top-50 right-4 bg-black text-white px-3 py-3 rounded-full text-xs font-semibold">
                    EXCLUSIVE
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h1>
                        <div className="flex items-center gap-2">
                            <h2 className="text-gray-600 text-sm">{college.address}</h2>
                        </div>
                    </div>

                    {/* Menu Button */}
                    <Link
                        to="/view-college"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors inline-flex items-center justify-center"
                    >
                        <MoreHorizontal className="w-5 h-5 text-gray-400" />
                    </Link>
                </div>
            </div>
        </div>
    );
}