import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav>
            <h1 className="logo">The Blog</h1>
            <div className="nav-texts">
                <NavLink className="NavLink" to="/">Home</NavLink>
                <NavLink className="NavLink" to="/create">New Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;