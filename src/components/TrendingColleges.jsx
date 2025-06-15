import { Link } from "react-router";
import CollegeCard from "./CollegeCard";

export default function TrendingColleges() {
    return (
        <section className="mt-20 w-[90%] mx-auto space-y-8">
            <h1 className=" text-[16px] md:text-[36px] font-medium">
                <span>Trending</span>
                <span className="text-primary">colleges</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <CollegeCard key={n} />)}
            </div>
            <div className="flex justify-center items-center">
               <Link to= "#">
                    <button className="bg-primary text-white px-6 py-2 font-medium rounded-md">Load more...</button>
                </Link>
            </div>
        </section>
    );
}