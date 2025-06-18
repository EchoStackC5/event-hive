import { Link } from "react-router";
import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { ClipLoader } from "react-spinners";



export default function TrendingColleges() {
    // where colleges is url
    // limit and skip enables you to load your desired number of images from
    const { data, error, isLoading } = useSWR("/colleges?limit=3&skip=3", apiFetcher);
    console.log(data);
     
    if(isLoading) {
        return(<div className="flex justify-center items-center">
            <ClipLoader size={100}/>
        </div>);
    }

    if(error) {
        return(
        <div className="flex justify-center items-center">
            <p className="">something went wrong</p>
        </div>
        );
    }

    return (
        <section className="mt-20 w-[90%] mx-auto space-y-8">
            <h1 className=" text-[16px] md:text-[36px] font-medium">
                <span>Trending</span>
                <span className="text-primary">colleges</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.data.map(college => <CollegeCard key={college.id}
                    college={college} />)}
            </div>
            <div className="flex justify-center items-center">
                <Link to="#">
                    <button className="bg-primary text-white px-6 py-2 font-medium rounded-md">Load more...</button>
                </Link>
            </div>
        </section>
    );
}