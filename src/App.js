import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LoginForm from "./Components/LoginForm/LoginForm";


// function App() {
//   return (
//     <div>
//     <Header />
//     <Main />
//     <Footer />
//     </div>

//   )
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div>
      <LoginForm />
        {/* <Header />
        <Main />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
