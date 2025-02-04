import { TBlogs } from "@/app/(ComonLayout)/Types/Types";
import Blog from "./Blog";

const Blogs = async() => {
    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json()
    return (
        <div className="w-11/12 mx-auto">
            <div className="md:grid grid-cols-3 gap-4 ">
                {
                    blogs.map((blog:TBlogs, idx:number)=> <Blog key={idx} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;