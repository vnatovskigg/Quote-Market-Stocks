import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import PageWrapper from "../../components/page-wrapper";
import ContentWrapper from "../../components/content-wrapper";
import authenticate from "../../services/authenticate";
import UserContext from "../../Context";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, errors, getValues } = useForm();
  const context = useContext(UserContext);
  const history = useHistory();

  const onSubmit = async (data) => {
    const { username, password } = data;
    console.log(username, password);

    await authenticate(
      "http://localhost:8888/api/user/register",
      {
        username,
        password,
      },
      (user) => {
        console.log("Success");
        context.logIn(user);
        history.push("/");
      },
      (e) => {
        console.log("Error", e);
      }
    );
  };

  return (
    <PageWrapper>
      <ContentWrapper title="Register" layout="column">
        <form
          className={styles["register-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true, maxLength: 80 })}
          />

          {errors.username && <span>Required field</span>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true, minLength: 6 })}
          />

          {errors.password && (
            <span>Password must be at least 6 characters long</span>
          )}

          <input
            type="password"
            placeholder="Repeat Password"
            name="rePassword"
            ref={register({
              required: true,
              minLength: 6,
              validate: (value) => value === getValues("password"),
            })}
          />

          {errors.rePassword && <span>Passwords must match</span>}

          <div className={styles["submit-div"]}>
            <input
              className={styles["form-submit"]}
              type="submit"
              value={"Register"}
            />
          </div>
        </form>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Register;
