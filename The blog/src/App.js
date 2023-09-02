import'./app.scss'
import Home from './pages/home'
import Navbar from './components/navbar'
import Profile from './pages/profile';
import Create from './pages/create';
import About from './pages/about';
import Categories from './pages/categories';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import BlogDetails from './components/blogDetails';
import Notfound from './pages/noutFound';
function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/blogs/:id' element={<BlogDetails/>}/>
            <Route path='*' element={<Notfound/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

