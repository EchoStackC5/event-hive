import roorkee from "../assets/images/roorkee.jpg"
export default function CollegeDetail() {
    // defining the college objects


    return (
        <section className="min-h-screen  p-6 flex flex-col justify-center items-center bg-gray-100 bg-cover m-0 ">
            <div className=" rounded-2xl overflow-hidden">
               <img src={roorkee} alt="" className="md:w-310 md:h-140 px-2 rounded-2xl  "  />
            </div>
            <h2 className="text-2xl font-bold pr-250 pt-4" >IIT Roorke</h2>
            <div className="w-290 p-4 rounded-md px-4">
                <p className="text-sm ">
                    DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement
                </p>
                <p className="text-sm pt-4">
                    DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement
                </p>
                <p className="text-sm pt-4">
                    DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement
                </p>
                <p className="text-sm pt-4">
                    DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement
                </p>
            </div>
        </section>
    );
}