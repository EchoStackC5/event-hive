import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";
import createEventImg from "../assets/images/createEventImg.svg";
import { Link } from "react-router";
// import CreateEvent from "../components/CreateEvent";
import BlogCard from "../components/BlogCard";
import Brands from "../components/brands";
export default function Home() {
    return (
        < div className="space-y-12">
            <Navbar />
            <HeroWithFilter />
            <UpcomingEvents />
           <div className="bg-[#0B0B84] w-full py-2 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                
                <div className="w-full md:w-1/2 ">
                    <img
                        src={createEventImg}
                        alt="Create Event"
                        className="w-full h-auto object-contain "
                    />
                </div>

                
                <div className="w-full md:w-1/2 text-white space-y-4 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl font-semibold">
                        Make your own Event
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit.
                    </p>
                    <Link
                        to="/create-event"
                        className="inline-block mt-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:opacity-90 transition"
                    >
                        Create Events
                    </Link>
                </div>
            </div>
        </div>
        <Brands/>
            {/* Make your own event section goes here */}
            {/* Join these brands section goes here */}
            <TrendingColleges />
            <OurBlogs />
            <Footer />
        </div>
    );
}