import './Header.css'

function Header() {
    return (
       
        <div className='header'>
         <h3>Users Mail</h3>
         <div className='links'>
             <a>Home</a>
             <a>About</a>
             <a>Users</a>
             <a>Contact</a>
             <a>Payments</a>
         </div>
         <div>
             <input type="text" />
             <button>Search</button>
         </div>
            
        </div>
    )
}

export default Header