import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Nav from "./components/navigation";
import About from "./components/about";
import Contact from "./components/contact";
import Screen from "./components/stock-screen";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <Nav />
          <Screen />
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
