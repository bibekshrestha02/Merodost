import React, { useState } from "react";
import style from "./style/contact.module.scss";
import { Link } from "react-router-dom";
import Title from "./../../assets/Title";
import Axios from "./../../axios";
import validator from "validator";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isErr, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const emailHandler = (e) => {
    return setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    return setMessage(e.target.value);
  };
  const nameHandler = (e) => {
    return setName(e.target.value);
  };
  const formHandler = () => {
    if (!email || !message || !name) {
      setErr(true);
      return setErrMessage("Please fill up the form");
    }
    //  cheking the Email
    if (!validator.isEmail(email)) {
      setErr(true);
      return setErrMessage("Invalid Email");
    }
    const data = {
      email: email,
      message: message,
      name: name,
    };
    Axios.post("/contact", data).then((res) => {
      if (res.data.status) {
        setErr(false);
        alert("Thank You for Your Kind Response");
        setName("");
        setMessage("");
        return setEmail("");
      }
    });
  };
  return (
    <div className={`${style.contact} pb-4 container-fluid`}>
      <Title Title='CONTACT US' />
      <div className='row pt-5'>
        <div className={`${style.contacts} col-lg-6 col-sm-12`}>
          <span className='address'>Sarlahi, Province 2, Nepal</span>
          <span
            className='phone'
            style={{ color: "#2e8bc0", cursor: "pointer" }}>
            <i className='fa fa-phone mr-2'></i>9866123983
          </span>
          <span
            className='email'
            style={{ color: "#2e8bc0", cursor: "pointer" }}>
            <i className='fa fa-envelope mr-2'></i>shresthabbks@gmail.com
          </span>
          <div className='pt-4'>
            <Link to='/' className={`fa fa-facebook ${style.icon}`}></Link>
            <Link to='/' className={`fa fa-twitter ${style.icon}`}></Link>
            <Link to='/' className={`fa fa-google ${style.icon}`}></Link>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <form className={style.form}>
            {isErr ? (
              <span
                style={{
                  color: "Red",
                  textAlign: "center",
                  fontWeight: "bold",
                }}>
                * {errMessage}
              </span>
            ) : null}

            <input
              value={name}
              type='text'
              className='form-control'
              onChange={nameHandler}
              placeholder='Name'
            />
            <input
              value={email}
              className='form-control mt-3'
              type='email'
              onChange={emailHandler}
              placeholder='Email'
            />
            <textarea
              value={message}
              onChange={messageHandler}
              rows='4'
              className='form-control mt-3'
              cols='50'
              placeholder='Message'></textarea>
            <input
              onClick={formHandler}
              className='btn btn-block mt-3 btn-primary'
              type='button'
              value='CONTACT US'
            />
          </form>
        </div>
      </div>
    </div>
  );
}
