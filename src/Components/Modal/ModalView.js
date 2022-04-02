import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalView.css";
import { Component } from "react";
import Loader from "../Common/Loader";
import UserDetail from "../UserDetail/UserDetail";

class ModalView extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
      userID: props.userID,
      user: null,
    };
  }

  componentDidMount() {
    fetch(`https://dummyapi.io/data/v1/user/${this.props.userID}`, {
      headers: {
        "app-id": "6215cedea431431b816edb89",
      },
    })
      .then((data) => data.json())
      .then((user) => {
        this.setState({ user: user });
      })
      .catch((err) => console.log("there was an error fetching the user"));
  }

  renderModal() {
    return (
      <>
        <Modal.Body>
        <UserDetail 
          userDetail={this.state.user}
        />

        </Modal.Body>
      </>
    );
  }

  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Detail
          </Modal.Title>
        </Modal.Header>
        {this.state.user ? this.renderModal() : <Loader />}
        <Modal.Footer>
          <Button onClick={() => this.props.onHide(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalView;
