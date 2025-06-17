import { Link } from "react-router";
export default function EventCard() {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative px-3 py-3 rounded-md">
                <img
                    src="https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnRzfGVufDB8fDB8fHww"
                    alt="Event"
                    className="w-full h-48 object-cover rounded-xl"
                />
                <span className="absolute top-6 left-8 bg-violet-100 text-violet-600 text-xs font-semibold px-2 py-1 rounded-md">
                    FREE
                </span>
            </div>
            <div className="p-4 space-y-2">
                <Link to="/view-event" className="text-base font-medium text-gray-900 leading-snug">
                    BestSelller Book Bootcamp – write, Market & Publish Your Book – Lucknow
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
