import './UsersList.css'
import User from '../User/User'

const userList =  [
    {
        "id": "60d0fe4f5311236168a109d4",
        "title": "mr",
        "firstName": "Valentin",
        "lastName": "Ortega",
        "picture": "https://randomuser.me/api/portraits/med/men/3.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d5",
        "title": "mrs",
        "firstName": "Sibylle",
        "lastName": "Leibold",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d6",
        "title": "mrs",
        "firstName": "Elisa",
        "lastName": "Lorenzo",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d7",
        "title": "mr",
        "firstName": "Leevi",
        "lastName": "Savela",
        "picture": "https://randomuser.me/api/portraits/med/men/67.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d8",
        "title": "mrs",
        "firstName": "Karoline",
        "lastName": "Sviggum",
        "picture": "https://randomuser.me/api/portraits/med/women/61.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d9",
        "title": "ms",
        "firstName": "Nuria",
        "lastName": "Leon",
        "picture": "https://randomuser.me/api/portraits/med/women/93.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109da",
        "title": "mr",
        "firstName": "Lance",
        "lastName": "Foster",
        "picture": "https://randomuser.me/api/portraits/med/men/13.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109db",
        "title": "miss",
        "firstName": "Naomi",
        "lastName": "Rodrigues",
        "picture": "https://randomuser.me/api/portraits/med/women/39.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109dc",
        "title": "mr",
        "firstName": "Evan",
        "lastName": "Roux",
        "picture": "https://randomuser.me/api/portraits/med/men/59.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109dd",
        "title": "mr",
        "firstName": "Miguel",
        "lastName": "Lima",
        "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
    }
]

function showUsers() {
   return userList.map((user) => {
       return (
           <User key={user.id} userDetail={user}/>
       )
    })
}
function UsersList() {

    return (
        <div className='all-users'>
            <h4>Rendered Users Here</h4>
            <div className='users-list'>
            {showUsers()}
            </div>
        </div>
    )
}

export default UsersList