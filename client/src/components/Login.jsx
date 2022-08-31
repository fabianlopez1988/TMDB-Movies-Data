import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { userLogin } from "../store/user";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import Alert from "react-bootstrap/Alert"

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showAlert, setShowAlert] = useState(false)

  const email = useInput();
  const password = useInput();

  
  const captcha = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  
  const user = localStorage.getItem('user')

  const onChange = () => {
    if (captcha.current.getValue()) {
      setCaptchaValue(true);
    }
  };

  useEffect(() => {
    if(user){
      if(location.pathname === "/login"){
        navigate("/")
      } 
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha.current.getValue()) {
      setCaptchaValue(true);
    }

    dispatch(userLogin({
      email: email.value,
      password: password.value,
    }))
    .then(()=> {
      if(localStorage.getItem("user")) navigate("/")
      else setShowAlert(true)
    })
    .catch(err => console.log(err))
  };


  return (
    <div class="container">
      <div class="col-sm-6 login-form pt-5">
        <h2>Sign In</h2>
        <Alert variant="warning" show={showAlert} onClose={() => (setShowAlert(false))} dismissible>
        <Alert.Heading>¡Atención!</Alert.Heading>
        <p>
          E-mail o contraseña incorrectos
        </p>
      </Alert>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <p class="mt-2">
              ¿No tenés cuenta? &nbsp;
              <a href="/register">Crear cuenta</a>
            </p>
        </form>
        <div class="recaptcha pt-4">
          <ReCAPTCHA
            sitekey="6Le-5lUgAAAAAMhhuBnrbEXThYz4cFNhY-txabwp"
            onChange={onChange}
            ref={captcha}
          />
        </div>
        <div>
          {captchaValue === false && <p>Por favor hacé click en el checkbox</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;



