import React, { useState } from "react";
import "./../styles/signUp.scss";
import Axios from "./../../axios";
import validator from "validator";
export default function CreateAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConfromPassword] = useState("");
  const [name, setName] = useState("");
  const [isErr, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const conformPasswordHandler = (e) => {
    setConfromPassword(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const onSignUp = () => {
    if (!email || !password || !conformPassword || !name) {
      setErr(true);
      return setErrMessage("Fill up the form");
    }
    if (!validator.isEmail(email)) {
      setErr(true);
      return setErrMessage("Invalid Email");
    }
    const data = {
      email: email,
      password: password,
      conformPassword: conformPassword,
      name: name,
    };

    Axios.post("/user/signUp", data).then((res) => {
      //  checking the email
      if (!res.data.status) {
        setErr(true);
        return setErrMessage(res.data.message);
      }
      if (res.data.status) {
        setErr(false);
        setEmail("");
        setName("");
        setPassword("");
        setConfromPassword("");
        return alert("Account SuccessFully Created");
      }
    });
  };
  return (
    <div className='signup-form'>
      <form>
        <h2>Create Admin Account</h2>
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
        <div className='form-group'>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-user'></i>
            </span>
            <input
              type='text'
              className='form-control'
              name='username'
              placeholder='Username'
              required='required'
              value={name}
              onChange={nameHandler}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-paper-plane'></i>
            </span>
            <input
              type='email'
              className='form-control'
              name='email'
              placeholder='Email Address'
              required='required'
              value={email}
              onChange={emailHandler}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-lock'></i>
            </span>
            <input
              type='password'
              className='form-control'
              name='password'
              placeholder='Password'
              required='required'
              value={password}
              onChange={passwordHandler}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='input-group'>
            <span className='input-group-addon'>
              <i className='fa fa-lock'></i>
              <i className='fa fa-check'></i>
            </span>
            <input
              type='password'
              className='form-control'
              name='confirm_password'
              placeholder='Confirm Password'
              required='required'
              value={conformPassword}
              onChange={conformPasswordHandler}
            />
          </div>
        </div>
        <div className='form-group'>
          <button
            onClick={onSignUp}
            type='button'
            className='btn btn-primary btn-block btn-lg'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
