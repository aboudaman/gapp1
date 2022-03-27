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
      userID: null,
    };
  }

  handleClick(user, show) {
    this.setState({
      userClicked: true,
      modalShow: show,
      userID: user.id,
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

  showUserDetail() {
    //   console.log('clicked detail')
    //   console.log(this.state.userID)
    return (
      <ModalView
        show={this.state.modalShow}
        onHide={this.handleModalShow.bind(this)}
        userID={this.state.userID}
      />
    );
  }

  render() {
    return (
      <>
        {!this.props.allUsers ? (
          <Loader />
        ) : (
          <div className="all-users">
            <div className="users-list">{this.showUsers()}</div>
          </div>
        )}
        <>
          {/* <Button variant="primary" onClick={() => this.handleModalShow(true)}>
            Launch vertically centered modal
          </Button> */}
          {this.state.modalShow && this.showUserDetail()}
        </>
      </>
    );
  }
}

export default UsersList;
