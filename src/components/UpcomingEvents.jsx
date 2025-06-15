import EventCard from "./EventCard";
import { Link } from "react-router";

export default function UpcomingEvents() {
    return (
        <section className="mt-40 w-[90%] mx-auto space-y-6">
            <div className="flex flex-col md:flex-row justify-between space-y-4">
            <div> 
                <h1 className=" text-[16px] md:text-[36px] font-medium">
                   Upcoming  
                    <span className="text-primary">Events</span>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <select className="bg-[#F1F2F5] outline-none px-1 py-2 rounded-md text-sm md:text-lg font-normal">
                    <option>Weekdays</option>
                    <option>Weekends</option>
                </select>
                <select className="bg-[#F1F2F5] outline-none px-2 py-2 rounded-md text-sm md:text-lg font-normal">
                    <option>Event Type</option>
                    <option>College Events</option>
                </select>
                <select className="bg-[#F1F2F5] outline-none px-2 py-2 rounded-md text-sm md:text-lg font-normal">
                    <option>Any Category</option>
                    <option>College Events</option>
                </select>
            </div>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
            <div className="flex justify-center items-center">
                <Link to= "#">
                    <button className="bg-primary text-white px-6 py-2 font-medium rounded-md">Load more...</button>
                </Link>
                
            </div>
        </section>
    );
}