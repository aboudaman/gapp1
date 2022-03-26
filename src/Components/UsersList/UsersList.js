import "./UsersList.css";
import User from "../User/User";
import { Component } from "react";
import Loader from "../Common/Loader";
import ModalView from "../Modal/ModalView";

class UsersList extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      userClicked: false,
      modalShow: false,
    };
  }

  handleClick(user, show) {
    console.log("clicked User", user);
    this.setState({
      userClicked: true,
      modalShow: show,
    });
  }

  showUsers() {
    return this.props.allUsers.map((user) => {
      return (
        <User
          userDetailReq={this.handleClick.bind(this)}
          key={user.id}
          userDetail={user}
          userClicked={this.state.userClicked}
        />
      );
    });
  }

  handleModalShow(show) {
    this.setState({
      modalShow: show,
    });
  }

  render() {
    return (
      <>
        {!this.props.allUsers ? (
          <Loader />
        ) : (
          <div className="all-users">
            <div className="users-list">{this.showUsers()}
            </div>
          </div>
        )}
        <>
          {/* <Button variant="primary" onClick={() => this.handleModalShow(true)}>
            Launch vertically centered modal
          </Button> */}

          <ModalView
            show={this.state.modalShow}
            onHide={this.handleModalShow.bind(this)}
          />
        </>
      </>
    );
  }
}

export default UsersList;
