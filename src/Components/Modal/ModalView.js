import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalView.css";
import { Component } from "react";
import Loader from "../Common/Loader";

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
          <h4>
            {this.state.user.firstName} {this.state.user.lastName}
          </h4>
          <div>
            <img src={this.state.user.picture} alt="User" width="150px" />
          </div>

          <h6>Address</h6>
          <p>City: {this.state.user.location.city}</p>
          <p>Country: {this.state.user.location.country}</p>
          <p>State: {this.state.user.location.state}</p>
          <p>Street: {this.state.user.location.street}</p>
          <p>Timezone: {this.state.user.location.timezone}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.onHide(false)}>Close</Button>
        </Modal.Footer>
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
      </Modal>
    );
  }
}

export default ModalView;
