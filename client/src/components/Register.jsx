import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";


import { userRegister } from "../store/user";
import useInput from "../hooks/useInput";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const firstName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const user = JSON.parse(localStorage.getItem("user"));  

  useEffect(() => {
    if(user){
      if(location.pathname === "/register"){
        navigate("/login");
      }
    }
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(userRegister({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    })
    ).then((regUser) => {
      if(!regUser.error) navigate("/login")
    })
    .catch(err => console.log("CATCH",err));
  };


  return (
    <div class="container">
      <div class="col-sm-4 login-form pt-5">
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group col-md-6 pb-3">
            <label for="FirstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              {...firstName}
              id="FirstName"
              placeholder="first name"
              required
            />
          </div>

          <div class="form-group col-md-6 pb-3">
            <label for="LastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              {...lastName}
              id="LastName"
              placeholder="last name"
              required
            />
          </div>

          <div class="form-group col-md-6 pb-3">
            <label for="Email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              {...email}
              id="Email"
              placeholder="email"
              required
            />
          </div>

          <div class="form-group col-md-6 pb-3">
            <label for="Password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              {...password}
              id="Password"
              placeholder="password"
              required
            />
          </div>

          {/* <div class="form-group col-md-6 pb-3">
            <label for="confirmPassword" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              {...confirmPassword}
              id="confirmPassword"
              placeholder="password"
              required
            />
          </div> */}

          <button type="submit" class="btn btn-primary">
            Register
          </button>
          <p class="mt-2">
              ¿Ya tenés una cuenta?&nbsp;
              <a href="/login">Ingresá acá</a>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Register;




// import React, { useState } from "react";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [user, setUser] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confPassword, setConfPassword] = useState("");
//   const [birthday, setBirthday] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("/api/register", {
//         firstName: firstName,
//         lastName: lastName,
//         password: password,
//         confPassword: confPassword,
//         birthday: birthday,
//         email: email,
//       })
//       .then((res) => {
//         setUser(res.data);
//       });
//     navigate("/login");
//   };

//   return (
//     <div class="container">
//       <div class="col-sm-4 login-form pt-5">
//         <h2>Create User</h2>
//         <form onSubmit={handleSubmit}>
//           <div class="form-group col-md-6 pb-3">
//             <label for="FirstName" class="form-label">
//               First Name
//             </label>
//             <input
//               type="text"
//               class="form-control"
//               id="FirstName"
//               placeholder="first name"
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />
//           </div>

//           <div class="form-group col-md-6 pb-3">
//             <label for="LastName" class="form-label">
//               Last Name
//             </label>
//             <input
//               type="text"
//               class="form-control"
//               id="LastName"
//               placeholder="last name"
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />
//           </div>

//           <div class="form-group col-md-6 pb-3">
//             <label for="Email" class="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               class="form-control"
//               id="Email"
//               placeholder="email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div class="form-group col-md-6 pb-3">
//             <label for="Password" class="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               class="form-control"
//               id="Password"
//               placeholder="password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div class="form-group col-md-6 pb-3">
//             <label for="confirmPassword" class="form-label">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               class="form-control"
//               id="onfirmPassword"
//               placeholder="password"
//               onChange={(e) => setConfPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" class="btn btn-primary">
//             Register
//           </button>
//           <p class="mt-2">
//               ¿Ya tenés una cuenta?&nbsp;
//               <a href="/login">Ingresá acá</a>
//             </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;



