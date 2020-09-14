import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import authenticate from "../../services/authenticate";
import UserContext from "../../Context";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, errors, setError } = useForm();
  const context = useContext(UserContext);
  const history = useHistory();

  const onSubmit = async (data) => {
    const { username, password } = data;

    await authenticate(
      "http://localhost:8888/api/user/login",
      {
        username,
        password,
      },
      (user) => {
        console.log("User", user);
        console.log("Context-user", context.user);
        context.logIn(user);
        history.push("/");
      },
      (e) => {
        console.log("Error", e);
        setError("username", {
          type: "manual",
        });
      }
    );
  };

  return (
    <PageWrapper>
      <ContentWrapper title="Login" layout="column">
        <form
          className={styles["login-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true, maxLength: 80 })}
          />
          {errors.username && <span> Invalid username or password </span>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true, minLength: 6 })}
          />

          <div className={styles["submit-div"]}>
            <input
              className={styles["form-submit"]}
              type="submit"
              value={"Login"}
            />
          </div>
        </form>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Login;
