import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const { data:blog, error, pending } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const deleteBlog = () =>{
        fetch("http://localhost:8000/blogs/" + blog.id,{
            method: 'DELETE'
            
        })
        .then(()=>{
            navigate("/")
        })
    }

    return ( 
        <div className="content">
            <div className="blog-details">
                {pending && <div>Loading...</div>}
                {error && <div>{Error}</div>}
                {blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                        <div className="blog-body">{ blog.body }</div>
                        <button onClick={deleteBlog}>Delete</button>
                    </article>
                )}
            </div>
        </div>
     );
}
 
export default BlogDetails;