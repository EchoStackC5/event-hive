import EventCard from "./EventCard";

export default function CollegeEvents() {
    return (
        <section className=" min-h-screen mt-0 w-[full] mx-auto bg-gray-100 flex flex-col  bg-cover m-0 mb-20  ">
            <div>
                <h1 className="pl-26 pt-5 text-3xl font-bold space-x-2">
                    <span>College</span>
                    <span className="text-primary">Events</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pl-4 pr-4 gap-5 mt-5 space-x-1">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
        </section>
    );
}

