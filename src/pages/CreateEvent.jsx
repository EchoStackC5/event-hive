import Navbar from "../components/Navbar";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { Navigate, useNavigate } from "react-router";

export default function CreateEvent() {
    const navigae = useNavigate();
    const { data, isLoading, error} = useSWR("/colleges", apiFetcher);
    
    const postEvent = async (data) => {
        try {
            const response = await apiClient.post("/events", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }
            })
            console.log(response.data);
            navigae(`/view-event?id=${response.data.data.id}`);
                
        } catch (error) {
            console.log(error);
            
        }

        
    }

    if(!localStorage.getItem("ACCESS_TOKEN")){
        return <navigate to = {"login"}/>
    }


    
    return (
        <>
            <Navbar />
            <section className="bg-gray-100">
                <h1 className=" flex text-3xl font-bold items-center justify-center py-4">Create Event</h1>
                <form action= {postEvent} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-around items-center">
                        <div>
                            <p className="text-xs font-bold mt-10">Select College </p>
                            <select name="college" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                {isLoading ? <option className="animate-pulse">Loading ...</option>  : error ? <option className="text-red-500">something went wrong</option>: data.data.map((college) => (
                                    <option key={college.id} value={college.id}>
                                        {college.name}
                                    </option>
                                ))}
                            </select>
                        </div>
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
                                name="venue"
                                placeholder="Enter event venue" />
                        </div>
                        {/* <div className="flex space-x-10">
                            <div>
                                <p className="text-xs font-bold mt-10">Start time</p>
                                <input type="time" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="startTime"
                                    placeholder="Enter start time"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-bold mt-10">End time</p>
                                <input type="time" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="endTime"
                                    placeholder="Enter end time"
                                />
                            </div>
                        </div> */}
                        <div className="flex space-x-10">
                            <div>
                                <p className="text-xs font-bold mt-10">Start date</p>
                                <input type="datetime-local" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="start"
                                    placeholder="Enter start date"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-bold mt-10">End date</p>
                                <input type="datetime-local" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="end"
                                    placeholder="Enter end date"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold text-3xl py-20 flex justify-around items-center">Event Description</h1>
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Event image</label>
                            <input type="file" id="eventImageUpload" name="image" className="hidden" />
                            <label
                                htmlFor="eventImageUpload"
                                className="cursor-pointer flex items-center justify-center w-[700px] h-[300px] px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-[#F2F2F266]">
                                Click to upload image
                            </label>
                        </div>
                        <div className="mb-4 w-[700px]">
                            <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700 mb-1">Event Description</label>
                            <textarea id="eventDescription"
                                name="description"
                                rows="5"
                                placeholder="Type here"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400">
                            </textarea>
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Event Tags</label>
                            <select multiple name="tags" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                <option value="social"> Social</option>
                                <option value="eduaton"> Education</option>
                                <option value="science-fair"> Science Fair</option>
                                <option value="business"> Business</option>

                            </select>
                           
                        </div>
                    </div>
                <div className="flex justify-around items-center py-10">
                    <SubmitButton title={"Create Event"} className="h-10 w-170 rounded-md text-white bg-primary hover:bg-blue-800"/>
                    {/* <button className="">Create Event</button> */}
                </div>
                
                </form>

                
            </section>
        </>
    );
}