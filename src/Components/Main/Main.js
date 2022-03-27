import "./Main.css";
import UsersList from "../UsersList/UsersList";
import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      searchUser: "",
      allUsers: null,
      allUsersFiltered: null
    };
  }
  componentDidMount() {
    fetch("https://dummyapi.io/data/v1/user", {
      headers: {
        "app-id": "6215cedea431431b816edb89",
      },
    })
      .then((data) => data.json())
      .then((users) => {
        this.setState({
          isLoading: false,
          allUsers: users.data,
          allUsersFiltered: users.data
        })
      })
  }

  handleSearch(e) {
    const searchVal = e.target.value.toLowerCase()
    this.setState({
      searchUser: searchVal,
    })
    const filteredUsers = this.state.allUsersFiltered.filter((user) => {
        return user.firstName.toLowerCase().startsWith(searchVal)
    })
    
    this.setState({allUsers: filteredUsers})
  }
  render() {
    return (
      <div className="main">
        <h4 className="user-title">Users</h4>
        <div className="search-box">
          <input
            onChange={(e) => this.handleSearch(e)}
            placeholder="Search User"
            value={this.state.searchUser}
            type="text"
          />
        </div>

        <UsersList allUsers={this.state.allUsers}/>
      </div>
    );
  }
}

export default Main;
