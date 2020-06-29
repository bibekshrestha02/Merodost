import React, { useState, useEffect } from "react";
import Title from "./../../assets/Title";
import Axios from "./../../axios";
import LoadingPage from "./../../components/loadingPage/loadingPage";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isMessage, setIsMessage] = useState(false);

  useEffect(() => {
    Axios.get("/contact").then((res) => {
      if (res.data.data.length === 0) {
        setIsMessage(false);
        return setLoading(false);
      }
      setIsMessage(true);
      setMessages(res.data.data);
      setLoading(false);
    });
  }, []);
  const deleteHandler = (id) => {
    const status = window.confirm("Are You Sure?");
    if (status) {
      return Axios.delete(`/contact/${id}`).then((res) => {
        if (res.data.status) {
          alert("Message Delted");
          return window.location.reload();
        }
      });
    } else {
      return null;
    }
  };
  let data;
  if (isLoading) {
    data = <LoadingPage />;
  } else {
    data = (
      <div
        style={{
          height: "100vh",
          overflow: "scroll",
          paddingBottom: "10px",
        }}>
        <Title Title={"Contact Message"} />
        <div style={{ height: "100vh", overflow: "scroll" }}>
          {messages.map((message, i) => {
            return (
              <div
                key={i}
                className='card-body mt-3 w-100 container-fluid'
                style={{ backgroundColor: "#f7f9f8" }}>
                <h5
                  className='card-title'
                  style={{ color: "#2e8bc0", fontWeight: 600, fontSize: 16 }}>
                  <font color='black'> Name:</font> {message.name}
                </h5>
                <h5
                  className='card-title'
                  style={{ color: "#2e8bc0", fontWeight: 600, fontSize: 16 }}>
                  <font color='black'> Email:</font> {message.email}
                </h5>
                <h5
                  className='card-title'
                  style={{ color: "#2e8bc0", fontWeight: 600, fontSize: 16 }}>
                  <font color='black'> Message:</font> {message.message}
                </h5>
                <h5
                  className='card-title'
                  style={{ color: "#2e8bc0", fontWeight: 600, fontSize: 16 }}>
                  <font color='black'> Date: </font>
                  {new Date(message.date).toUTCString()}
                </h5>
                <div className='card-body pb-4'>
                  <span
                    className='btn btn-danger float-right'
                    onClick={() => deleteHandler(message._id)}>
                    Delete
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  const noMessage = (
    <div
      style={{
        height: "100vh",
      }}>
      <Title Title={"Contact Message"} />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}>
        <h4 style={{ color: "red" }}>No messages</h4>
      </div>
    </div>
  );

  return isMessage ? data : noMessage;
}
