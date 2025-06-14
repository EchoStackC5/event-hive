import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollegeDetail from "../components/CollegeDetail";
import CollegeEvents from "../components/CollegeEvents";

export default function ViewCollege() {
    return (
        <>
            <Navbar />
            <CollegeDetail />
            <CollegeEvents />
            <Footer />
        </>
    );
}