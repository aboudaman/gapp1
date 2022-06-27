import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
       
        <div className='header'>
         <h3>Users Mail</h3>
         <div className='links'>
             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/users">Users</Link>
             <Link to="">Contact</Link>
             <Link to="">Payments</Link>
         </div>
         <div>
             <input type="text" />
             <button>Search</button>
         </div>
            
        </div>
    )
}

export default Header