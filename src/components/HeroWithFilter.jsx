import { Search } from "lucide-react";

export default function HeroWithFilter() {
    return (
        <section className="bg-[url('./assets/images/hero.png')] h-[596px] bg-cover w-full md:w-[95%] mx-auto relative overflow-y-hidden">
            <h1 className="md:text-big-heading text-xl text-white md:w-[30%] w-[90%] mx-auto text-center pt-32">
                MADE FOR THOSE WHO DO
            </h1>
            
            <form className="bg-navy-blue w-[90%] mx-auto py-6 px-4 md:px-10 flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 rounded-md absolute -bottom-20 md:-bottom-12 left-1/2 transform -translate-x-1/2">
                
                <div className="flex flex-col md:w-1/3 w-full">
                    <label className="text-white" htmlFor="type">Looking for</label>
                    <select name="type" id="type" className="bg-white p-2 rounded-md">
                        <option disabled selected>Choose event type</option>
                        <option value="drama">Drama</option>
                        <option value="tech">Tech</option>
                    </select>
                </div>

                <div className="flex flex-col md:w-1/3 w-full">
                    <label className="text-white" htmlFor="location">Location</label>
                    <select name="location" id="location" className="bg-white p-2 rounded-md">
                        <option disabled selected>Choose location</option>
                        <option value="accra">Accra</option>
                        <option value="kumasi">Kumasi</option>
                    </select>
                </div>

                <div className="flex flex-col md:w-1/3 w-full">
                    <label className="text-white" htmlFor="when">When</label>
                    <input type="datetime-local" name="when" id="when" className="bg-white p-2 rounded-md" />
                </div>

                <div className="bg-primary text-white size-14 flex justify-center items-center rounded-md self-center md:self-auto">
                    <Search />
                </div>
            </form>
        </section>
    );
}
