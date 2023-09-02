import { Link, useParams } from "react-router-dom"


const Bloglist = ({blogs, title}) => {
    
    return ( 

        <div className="blog_list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                    <Link to={ `/blogs/${blog.id}` }>
                        <div className="blog_preview" key={blog.id}>
                            <div className="texts">
                                <h2>{blog.title}</h2>
                                <p>Written by {blog.author}</p>
                            </div>
                        </div>
                     </Link>

            ))}
        </div>
     );
}
 
export default Bloglist;