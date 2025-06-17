import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-100">
                <h1 className=" flex text-3xl font-bold items-center justify-center py-4">Create Event</h1>
                <form action="" className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-around items-center">
                        <div>
                            <p className="text-xs font-bold mt-10">Event Title</p>
                            <input type="text" className="h-10 w-165 bg-white text-xs rounded-md px-2"
                                name="title"
                                placeholder="Enter event title"
                            />
                        </div>
                        <div>
                            <p className="text-xs font-bold mt-10">Event Venue</p>
                            <input type="text" className="h-10 w-165 bg-white text-xs rounded-md px-2"
                                name="text"
                                placeholder="Enter event venue" />
                        </div>
                        <div className="flex space-x-10">
                            <div>
                                <p className="text-xs font-bold mt-10">Start time</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter start time"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-bold mt-10">End time</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter end time"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-10">
                            <div>
                                <p className="text-xs font-bold mt-10">Start date</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter start date"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-bold mt-10">End date</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter end date"
                                />
                            </div>
                        </div>

                        
                    </div>
                    
                      <div>
                    <h1 className="font-bold text-3xl py-20 flex justify-around items-center">Event Description</h1>
                    <div className="mb-4 w-full">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Event image</label>
                        <input type="file" id="eventImageUpload" className="hidden " />
                        <label
                            htmlFor="eventImageUpload"
                            className="cursor-pointer flex items-center justify-center w-[700px] h-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-[#F2F2F266] ">
                        </label>
                    </div>
                    <div className="mb-4 w-[700px]">
                    <label htmlFor="event-Desciption" className="block text-sm font-medium text-gray-700 mb-1">Event Description</label>
                    <textarea id="eventDescription"
                        rows="5"
                        placeholder="Type here"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400 justify-around">
                    </textarea>
                </div>
                </div>
                </form>
                
                <div className="flex justify-around items-center py-10">
                    <button className="h-10 w-170 rounded-md text-white bg-primary">Create Event</button>
                </div>
            </section>
        </>
    );
}