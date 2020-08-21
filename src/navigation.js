import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Portfolio from "./pages/portfolio";
import Profile from "./pages/profile";
import Register from "./pages/register";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        // TODO
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
