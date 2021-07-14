import { Link } from 'react-router-dom';
const Blog = ({blogs}) => {
    return (
        <>
            <div className = 'container'>
                <h1 style = {{color: "#555", textAlign: 'center'}}>Blogs</h1>
                <div className = 'flex'>
                    {blogs.map((blog) => (
                    <div key = {blog.id}>
                        <Link to = {`/blogs/${blog.id}`}>
                            <h3 className = "">
                            {blog.title}
                            </h3>
                            <span>Author: {blog.author}</span>
                        </Link>
                    </div>
                ))} 
                </div>
            </div>
        </>);
}
 
export default Blog;