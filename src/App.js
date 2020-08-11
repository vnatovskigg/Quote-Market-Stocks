import React, { useState, useEffect } from "react";
import UserContext from "./Context";
import getCookie from "./services/cookie";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true,
    });
  };

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    setUser({
      loggedIn: false,
    });
  };

  useEffect(() => {
    const token = getCookie("x-auth-token");

    if (!token) {
      logOut();
      setLoading(false);
      return;
    }

    fetch("http://localhost:9999/api/user/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((promise) => {
        return promise.json();
      })
      .then((res) => {
        if (res.status) {
          logIn({
            username: res.user.username,
            id: res.user._id,
          });
        } else {
          logOut();
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./styles/App.css";
// import Nav from "./components/navigation";
// import About from "./components/about";
// import Contact from "./components/contact";
// import Screen from "./components/stock-screen";
// import Footer from "./components/footer";
// import StockTV from "./components/screener-widget";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className="main">
//           <Nav />
//           <StockTV />
//           {/* <Screen /> */}
//           <Switch>
//             {/* <Route path="/" exact component={Home} /> */}
//             <Route path="/about" component={About} />
//             <Route path="/contact" component={Contact} />
//           </Switch>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
