import React, { useState } from "react";
import style from "./styles/login.module.scss";
import Title from "./../assets/Title";
import Auth from "./auth";
import Axios from "./../axios";
import { withRouter } from "react-router-dom";
import LoadingPage from "./../components/loadingPage/loadingPage";
import validator from "validator";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErr, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const emailHandler = (e) => {
    return setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    return setPassword(e.target.value);
  };
  const getLogin = () => {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      setErr(true);
      return setErrMessage("Please email or password");
    }
    // checking EMail
    if (!validator.isEmail(email)) {
      setLoading(false);
      setErr(true);
      return setErrMessage("Invalid Email");
    }
    const data = {
      email: email,
      password: password,
    };
    Axios.post("/user/logIn", data).then((res) => {
      if (!res.data.status) {
        setLoading(false);
        setErr(true);
        return setErrMessage(res.data.message);
      }
      if (res.data.status) {
        setLoading(false);
        return new Auth(props.history, res.data.token).login();
      }
    });
  };
  let data;
  isLoading
    ? (data = <LoadingPage />)
    : (data = (
        <div className={style.loginform}>
          <Title Title='Admin Zone' />
          <form
            className='mt-5'
            style={{ borderTop: "5px solid #2e8bc0", borderRadius: "20px" }}>
            {isErr ? (
              <span
                style={{
                  color: "Red",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}>
                * {errMessage}
              </span>
            ) : null}
            <div className='form-group '>
              <input
                onChange={emailHandler}
                value={email}
                type='text'
                className='form-control'
                placeholder='Email'
                required='required'
              />
            </div>
            <div className='form-group'>
              <input
                onChange={passwordHandler}
                value={password}
                type='password'
                className='form-control'
                placeholder='Password'
                required='required'
              />
            </div>
            <div className='form-group'>
              <button
                type='button'
                className='btn btn-primary btn-block '
                onClick={getLogin}>
                Log in
              </button>
            </div>
          </form>
        </div>
      ));
  return data;
}
export default withRouter(Login);
