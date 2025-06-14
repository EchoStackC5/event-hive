import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/EventDetail";
import SimilarEvents from "../components/SimilarEvents";

export default function ViewEvent() {
    return (
        <>
            <Navbar />
            <EventDetail />
            <SimilarEvents />
            <Footer />
        </>
    );
}