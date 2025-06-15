import BlogCard from "./BlogCard";

export default function OurBlogs() {
    return (
        <section className="mt-20 w-[90%] mx-auto space-y-6">
            <h1 className=" text-[16px] md:text-[36px] font-medium">
                <span>Our</span>
                <span className="text-primary">Blogs</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <BlogCard key={n} />)}
            </div>
        </section>
    );
}