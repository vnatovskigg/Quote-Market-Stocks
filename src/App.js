import React, { useState, useEffect } from "react";
import UserContext from "./Context";
import getCookie from "./services/cookie";

const App = (props) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true,
    });
  };

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    setUser({
      user: null,
      loggedIn: false,
    });
  };

  const addToWatchlist = async (quote, id) => {
    const promise = await fetch(`http://localhost:8888/api/user/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        stock: quote,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await promise.json();
    setUser({
      user: data,
      loggedIn: true,
    });
    setUpdate(!update);
  };

  useEffect(() => {
    const token = getCookie("x-auth-token");

    if (!token) {
      logOut();
      // setLoading(false);
      return;
    }

    fetch("http://localhost:8888/api/user/verify", {
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
            stocks: res.user.stocks,
            username: res.user.username,
            id: res.user._id,
          });
        } else {
          logOut();
        }
        // setLoading(false);
      });
  }, [update]);

  // if (loading) {
  //   return <div>Loading....</div>;
  // }

  return (
    <UserContext.Provider
      value={{
        user,
        logIn,
        logOut,
        addToWatchlist,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
