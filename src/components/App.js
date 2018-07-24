import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Faqs from "./Faqs";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/faqs" component={Faqs} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
