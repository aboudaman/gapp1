import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginForm.css";
import { Component } from "react";

class LoginForm extends Component {

  constructor(props) {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleEmailInput(e) {
    // console.log(e.target.value)
    let emailInput = e.target.value
    this.setState({
      email: emailInput
    })
  }

  handlePasswordInput(e) {
    // console.log(e.target.value)
    let passwordInput = e.target.value
    this.setState({
      password: passwordInput
    })
  }

  // handleLogin() {
  //   console.log('User attempting to login')
  //   console.log(this.state)
  // }

  render() {
    return (
      <div className="login-page">
        <div className="login-page-heading">
          <h4>Login Form</h4>
        </div>
        <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => this.handleEmailInput(e)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => this.handlePasswordInput(e)}  value={this.state.password} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={() => this.props.handleLogin(this.state.email, this.state.password)} variant="primary">
            Login
          </Button>
        </Form>
      </div>
    )

  }

}

export default LoginForm;
