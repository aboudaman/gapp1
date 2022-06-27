import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginForm from "./Components/LoginForm/LoginForm";
import Home from "./Components/Home/Home"
import About from "./Components/About/About"

// function App() {
//   return (
//     <div>
//     <Header />
//     <Main />
//     <Footer />
//     </div>

//   )
// }
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
      currentlyLoggedUser: null,
    };
  }

  handleLogin(email, password) {
    const user = { email, password };
    // console.log(user)
    // console.log("Inside Parent Componenet");
    // console.log("Email ==> ", email);
    // console.log("Password ==> ", password);
    this.validateUserCredentials(user)
      .then((userData) => {
        // console.log("userData ==> ", userData);
        this.setState({
          currentlyLoggedUser: userData,
          isLoggedIn: true,
        });
      })
      .catch((err) => console.log(err));
  }

  validateUserCredentials(user) {
    const validUser = { email: "user@user.com", password: "abc123" };
    return new Promise((resolve, reject) => {
      if (
        user.email === validUser.email &&
        user.password === validUser.password
      ) {
        resolve(user);
      }
      reject("Ooops no user found!!!");
    });
  }

  render() {
    // console.log("isLoggedIn", this.state.isLoggedIn);
    // console.log("Current User", this.state.currentlyLoggedUser);
    return (
      <>
        {this.state.currentlyLoggedUser ? (
          <>
            <Header />
            
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path ="/users" element= {<Main />} />
              <Route path="/about" element={<About/>} />
            </Routes>
            
            <Footer />
          </>
        ) : (
          <LoginForm handleLogin={this.handleLogin.bind(this)} />
        )}
      </>
    );
  }
}

export default App;
