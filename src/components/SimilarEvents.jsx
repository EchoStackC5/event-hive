import EventCard from "./EventCard";

export default function SimilarEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1>Other events you may like</h1>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
        </section>
    );
}