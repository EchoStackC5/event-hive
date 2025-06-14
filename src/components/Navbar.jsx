export default function Navbar() {
    return (
        <nav className="flex justify-between px-8 py-4">
            <h1 className="font-bold text-heading">
                <span>Event</span>
                <span className="text-primary"> Hive</span>
            </h1>
            <div className="flex justify-center gap-4">
                <button className="text-primary"><a href="#">Login</a></button>
                <button className="bg-primary rounded-md py-2 px-4 text-white"><a href="#">Signup</a></button>
            </div>
        </nav>
    );
}