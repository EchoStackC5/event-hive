export default function BlogCard() {
    return (
         <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative px-3 py-3 rounded-md">
               <img src={'https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Blog Card" />
                <span className="absolute top-6 left-8 bg-violet-100 text-violet-600 text-xs font-semibold px-2 py-1 rounded-md">
                    FREE
                </span>
            </div>
            <div className="p-4 space-y-2">
                <h1 className="text-base font-medium text-gray-900 leading-snug">
                    BestSelller Book Bootcamp – write, Market & Publish Your Book – Lucknow
                </h1>
                <p className="text-sm text-violet-600 font-medium">
                    Saturday, March 18, 9.30PM
                </p>
                <p className="text-xs text-gray-400 font-medium">
                    ONLINE EVENT – Attend anywhere
                </p>
            </div>
        </div>
    );
}