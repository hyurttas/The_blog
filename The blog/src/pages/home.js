import { useState, useEffect } from 'react'
import Bloglist from '../components/blog'
import useFetch from '../components/useFetch';
const Home = () => {
    const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <>
        <div className="content">
            <div className='home'>
                {error && <div>{error}</div>}
                {pending &&  <div>Loading..</div>}            
                {blogs && <Bloglist blogs = {blogs} title={"Blogs"}/> }
            </div>
        </div>
        </>
     );
}
 
export default Home;