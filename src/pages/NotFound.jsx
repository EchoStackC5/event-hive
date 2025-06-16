import {Facebook, Instagram, Twitter, Linkedin, Youtube} from "lucide-react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import notFound from "../assets/images/404.png"

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section className=" min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50 m-0">
                <img src={notFound} alt="" className="h-90 w-auto pt-10" />
                <h3 className="text-2xl font-bold pt-15">Oops!</h3>
                <p className="pt-4 md:pt-8 text-gray-500 text-lg max-w-md">We can't seem to find the page you're looking for</p>
                <div className="pt-15">
                    <button className=" bg-primary rounded-3xl px-4 py-2 text-sm text-white w-40 font-medium">
                    <a href="">Back to Homepage</a>
                </button>
                </div>
                <p className="pt-20 text-sm font-medium">Follow us on</p>
                <div className="flex gap-4 text-primary pt-5 flex-wrap justify-center ">
                   <span className="bg-slate-200 p-2 rounded-xl">
                     <Facebook/>
                   </span>
                    <span className="bg-slate-200 p-2 rounded-xl">
                        <Instagram/>
                    </span>
                    <span className="bg-slate-200 p-2 rounded-xl">
                        <Twitter/>
                    </span>
                    <span className="bg-slate-200 p-2 rounded-xl">
                        <Linkedin/>
                    </span>
                    <span className="bg-slate-200 p-2 rounded-xl">
                        <Youtube/>
                    </span>

                </div>
            </section>
            <Footer />
        </>
    );
}