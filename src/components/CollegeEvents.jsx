import EventCard from "./EventCard";

export default function CollegeEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div>
                <h1>
                    <span>College</span>
                    <span>Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
        </section>
    );
}