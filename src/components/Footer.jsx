import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-blue text-white mt-20">
            <h1 className="flex justify-center text-heading py-3"><span className="font-bold">Event</span>
                <span className="text-primary font-bold"> Hive</span></h1>
            <form className="flex justify-center gap-4">
                <input className="bg-white rounded-md text-black px-4" type="email" placeholder="Enter your mail" name="email" />
                <button className="bg-primary rounded-md py-2 px-4" type="submit">Subscribe</button>
            </form>
            <div className="flex justify-center gap-8 py-4">
                <span>Home</span>
                <span>About</span>
                <span>Service</span>
                <span>Get in Touch</span>
                <span>FAQs</span>
            </div>
            <hr className="w-[94%] mx-auto" />
            <div className="flex justify-around gap-64 py-4">
                <div className="flex gap-6">
                    <button>English</button>
                    <button>French</button>
                    <button>Hindi</button>
                </div>
                <div className="flex gap-4">
                    <Linkedin />
                    <Instagram />
                    <Facebook />
                </div>
                <p>Noncopyrighted &copy;2025 Upload by EventHive</p>
            </div>
        </footer>
    );
}