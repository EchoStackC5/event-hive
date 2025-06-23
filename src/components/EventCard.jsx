import { Link } from "react-router";
import { imageBaseUrl } from "../api/client";

export default function EventCard({event}) {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative px-3 py-3 rounded-md">
                <img
                    src={`${imageBaseUrl}/${event.image}`} 
                    alt="Event"
                    className="w-full h-48 object-cover rounded-xl"
                />
                <span className="absolute top-6 left-8 bg-violet-100 text-violet-600 text-xs font-semibold px-2 py-1 rounded-md">
                    FREE
                </span>
            </div>
            <div className="p-4 space-y-2">
                <Link to={`/view-event?id=${event.id}`} className="text-base font-medium text-gray-900 leading-snug">
                    {event.title}
                </Link>
                <p className="text-sm text-violet-600 font-medium">
                    Saturday, March 18, 9.30PM
                </p>
                <p className="text-xs text-gray-400 font-medium">
                    ONLINE EVENT – Attend anywhere
                </p>
            </div>
        </div>
    );
}
