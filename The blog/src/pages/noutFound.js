import {Link} from 'react-router-dom'
const Notfound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>The page cannot be found</p>
            <Link className='Link' to="/">Back to home page</Link>
        </div>
     );
}
 
export default Notfound
