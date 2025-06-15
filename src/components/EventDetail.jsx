import details from '../assets/images/details.jpg'
import bicon from '../assets/images/bicon.png'
import map from '../assets/images/map.png'
import gmap from '../assets/images/gmap.png'
import { Facebook, Instagram, Twitter, Linkedin} from 'lucide-react'

export default function EventDetail() {
    return (
        <section>
            <div>
                <img className='h-130 w-[100%] px-7 rounded-2xl' src={details} alt="" />
            </div>
            <button className='flex bg-primary h-10 w-20 justify-center items-center text-white rounded-md absolute top-25 left-20'>
                <img className='h-3 w-4' src={bicon} alt="" />
                Back
            </button>

            <div className=' flex absolute top-50 left-10 items-center px-30'>
                <div className='text-white'>
                    <h1 className='font-bold text-4xl'>Dream world wide <br />in jakatra</h1>
                    <p className='font-bold text-2xl mt-7'>IIIT Sonepat</p>
                    <p className='text-xs w-[60%] py-3'>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
                    <button className='flex'>
                        <img className='h-4 w-4' src={map} alt="" />
                        view map
                    </button>
                </div>

                <div className='flex flex-col h-60 w-120 bg-white py-4 px-6 rounded-md'>
                    <h1 className='font-bold text-sm mb-4'>Date & time</h1>
                    <p className='text-xs mb-4 text-gray-400'>Saturday, March 18 2023, 9:30PM</p>
                    <button className='text-primary mb-4 pr-25 text-xs'>Add to calender</button>
                    <button className='text-white bg-primary text-xs h-8 w-50 mb-2 rounded-sm'>Book now</button>
                    <button className='text-white bg-gray-300 h-8 w-50 mb-4 text-xs rounded-sm'>Program protector</button>
                    <p className='text-gray-400 pl-15 text-sm'>No Refunds</p>
                </div>
            </div>

            <div className='flex justify-around py-10'>
                <div className='w-[40%]'>
                    <h1 className='font-bold'>Description</h1>
                    <p className='text-xs mt-4 text-gray-400'>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
                    </p>
                    <p className='text-xs mt-5 text-gray-400'>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.
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
                    <h1 className='font-small mt-7'>Dream world wide in jakatra</h1>
                    <p className='text-xs text-gray-400 mt-4'>Dummy location generation model by RSU ... Our approach generates <br /> more realistic dummy locations</p>
                    <h1 className='font-bold mt-7'>Tags</h1>
                    <div className='flex space-x-4'>
                        <p className='bg-gray-100 h-6 w-27 rounded-sm flex justify-center items-center text-xs'>Indonesia event</p>
                        <p className='bg-gray-100 h-6 w-26 rounded-sm flex justify-center items-center text-xs'>Jaskaran event</p>
                        <p className='bg-gray-100 h-6 w-8 rounded-sm flex justify-center items-center text-xs'>UI</p>
                    </div>
                     <div className='mt-3 flex space-x-3'>
                            <p className='bg-gray-100 h-6 w-15 rounded-sm flex justify-center items-center text-xs'>Seminar</p>
                            <p className='bg-gray-100 h-6 w-26 rounded-sm flex justify-center items-center text-xs'>Jaskaran event</p>
                        </div>

                    <h1 className='font-bold mt-7'>Share with friends</h1>
                    <div className='flex mt-4 space-x-4'>
                        <div className='bg-blue-600 h-9 w-9 text-white rounded-md items-center justify-center flex'><Facebook /></div>
                        <div className='bg-green-600 h-9 w-9 text-white rounded-md items-center justify-center flex'><Instagram /></div>
                        <div className='bg-blue-700 h-9 w-9 text-white rounded-md items-center justify-center flex'><Linkedin/></div>
                        <div className='bg-blue-500 h-9 w-9 text-white rounded-md items-center justify-center flex'><Twitter /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}