import details from '../assets/images/details.jpg'
import bicon from '../assets/images/bicon.png'
import map from '../assets/images/map.png'
import gmap from '../assets/images/gmap.png'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'lucide-react'
import { useSearchParams } from 'react-router'
import useSWR from 'swr'
import { apiFetcher } from '../api/client'
import { imageBaseUrl } from '../api/client'
import { useEffect } from 'react'

export default function EventDetail() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const { data, isLoading, error } = useSWR(`/events/${id}`, apiFetcher);
    useEffect(() =>{
        scrollTo(0, 0)
    }, [id]);

    if (isLoading) {
        return (
            <div>
                <p>loading event detail...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>something went wrong</p>
            </div>
        );
    }

    return (
        <section>
            <div>
                <img className='h-170 w-[100%] px-7 rounded-2xl' src={`${imageBaseUrl}/${data.data.image}`} alt="" />
                {/* <div className='inset-0 opacity-20 bg-black absolute h-160 w-[100%] px-7'></div> */}
            </div>
            <button className='flex bg-primary h-10 w-20 justify-center items-center text-white rounded-md absolute top-25 left-20'>
                <img className='h-3 w-4' src={bicon} alt="" />
                Back
            </button>
            <div className=' flex absolute top-50 left-10 items-center px-30'>
                <div className='text-white'>
                    <h1 className='font-bold text-5xl'>{data.data.title} <br />in {data.data.venue}</h1>
                    <p className='font-bold text-3xl mt-7'>{data.data.college.name}</p>
                    <p className='text-sm w-[60%] py-3 mt-7'>{data.data.description}</p>
                    <button className='flex'>
                        <img className='h-4 w-4' src={map} alt="" />
                        view map
                    </button>
                </div>

                <div className='flex flex-col h-60 w-120 bg-white py-4 px-6 rounded-md'>
                    <h1 className='font-bold text-sm mb-4'>Date & time</h1>
                    <p className='text-xs mb-4 text-gray-400'>{data.data.start}</p>
                    <button className='text-primary mb-4 pr-25 text-xs'>Add to calender</button>
                    <button className='text-white bg-primary text-xs h-8 w-50 mb-2 rounded-sm'>Book now</button>
                    <button className='text-white bg-gray-300 h-8 w-50 mb-4 text-xs rounded-sm'>Program protector</button>
                    <p className='text-gray-400 pl-15 text-sm'>No Refunds</p>
                </div>
            </div>

            <div className='flex justify-around py-10'>
                <div className='w-[40%]'>
                    <h1 className='font-bold'>Description</h1>
                    <p className='text-xs mt-4 text-gray-400'>{data.data.description}
                    </p>
                    <p className='text-xs mt-5 text-gray-400'>{data.data.description}
                    </p>
                    <h1 className='font-bold mt-7'>Hours</h1>
                    <p className='mt-4 text-xs text-gray-400'>Weekdays hour: <span className='text-primary font-bold'>7PM - 10PM</span></p>
                    <p className='mt-4 text-xs text-gray-400'>Sunday hours: <span className='text-primary font-bold'>7PM - 10PM</span></p>
                    <h1 className='font-bold mt-7'>Organizer Contact</h1>
                    <p className='text-xs mt-5 text-gray-400'>Please go to <span className='text-primary'>www.sneakypeeks.com</span> and refer the FAQ section for more detail</p>
                </div>
                <div>
                    <h1 className='font-bold'>Event Location</h1>
                    <img className='h-50 w-90 mt-4' src={gmap} alt="" />
                    <h1 className='font-small mt-7'>{data.data.title} in {data.data.venue}</h1>
                    <p className='text-xs text-gray-400 mt-4'>Dummy location generation model by RSU ... Our approach generates <br /> more realistic dummy locations</p>
                    <h1 className='font-bold mt-7'>Tags</h1>
                    <div className='flex space-x-4'>
                        {data.data.tags.map((tag, index) => {
                            return (
                                <p key={index} className='bg-gray-100 h-6 w-27 rounded-sm flex justify-center items-center text-xs'>{tag}</p>
                            );
                        })};
                    </div>

                    <h1 className='font-bold mt-7'>Share with friends</h1>
                    <div className='flex mt-4 space-x-4'>
                        <div className='bg-blue-600 h-9 w-9 text-white rounded-md items-center justify-center flex'><Facebook /></div>
                        <div className='bg-green-600 h-9 w-9 text-white rounded-md items-center justify-center flex'><Instagram /></div>
                        <div className='bg-blue-700 h-9 w-9 text-white rounded-md items-center justify-center flex'><Linkedin /></div>
                        <div className='bg-blue-500 h-9 w-9 text-white rounded-md items-center justify-center flex'><Twitter /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}