import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Portfolio from "./pages/portfolio";
import Profile from "./pages/profile";
import Register from "./pages/register";
import ArticlePage from "./pages/article-page";
import NewsPage from "./pages/home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NewsPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/article/:id" component={ArticlePage} />
        <Route path="/news/:segment" component={NewsPage} />
        {/* TODO*/}
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
