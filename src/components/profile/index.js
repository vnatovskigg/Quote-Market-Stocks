import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserContext from "../../Context";
import styles from "./index.module.css";

const Profile = () => {
  const [stocks, setStocks] = useState([]);
  const context = useContext(UserContext);
  const history = useHistory();
  const params = useParams();

  const getData = async (id) => {
    const res = await fetch(`http://localhost:8888/api/user?id=${id}`);
    if (!res.ok) {
      history.push("/error");
    } else {
      const user = await res.json();
      setStocks(user.stocks);
    }
  };

  const logout = () => {
    context.logOut();
    history.push("/");
  };

  useEffect(() => {
    const id = params.id;
    getData(id);
  });

  return (
    <div className={styles.container}>
      <h3>{`You've added ${stocks.length} stocks to your Portfolio`}</h3>
      <h3 className={styles.text}>
        Go to the Portfolio page to manage your stocks or search for new stocks
        to add
      </h3>
      <button className={styles.button} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
