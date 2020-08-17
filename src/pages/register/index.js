// import React, { useState, useContext } from "react";
// import { useForm } from "react-hook-form";
// import styles from "./index.module.css";
// import PageWrapper from "../../components/page-wrapper";
// import authenticate from "../../utils/authenticate";
// import UserContext from "../../Context";
// import { useHistory } from "react-router-dom";

// const Register = () => {
//   const { register, handleSubmit, errors, reset } = useForm({
//     mode: "onSubmit",
//     reValidateMode: "onSubmit",
//   });
//   const context = useContext(UserContext);
//   const history = useHistory();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     await authenticate(
//       "http://localhost:8888/api/user/register",
//       {
//         username,
//         password,
//       },
//       (user) => {
//         console.log("Success");
//         context.logIn(user);
//         history.push("/");
//       },
//       (e) => {
//         console.log("Error", e);
//       }
//     );
//   };

//   return (
//     <PageWrapper>
//       <div className={styles.wrapper}>
//         <div className={styles.heading}>
//           <h1>Register</h1>
//         </div>
//         <div className={styles.content}>
//           <form
//             className={styles["contact-form"]}
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               ref={register({ required: true, maxLength: 80 })}
//             />

//             {errors.name && <span>Username is required</span>}

//             <input
//               type="text"
//               placeholder="Password"
//               name="password"
//               ref={register({ required: true, minLength: 6 })}
//             />

//             {errors.email && (
//               <span>Password must be at least 6 characters long</span>
//             )}

//             <input
//               type="text"
//               placeholder="Repeat Password"
//               name="rePassword"
//               ref={register({ required: true, minLength: 6 })}
//             />

//             <div className={styles["submit-div"]}>
//               <input
//                 className={styles["form-submit"]}
//                 type="submit"
//                 value={"Register"}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </PageWrapper>
//   );
// };

// export default Register;
