import React, { useState, useEffect } from "react";
import Title from "./../../assets/Title";
import Axios from "./../../axios";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
function AddBlogs(props) {
  const [title, setTitle] = useState("");
  const [summery, setsummery] = useState("");
  const [first, setfirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setthird] = useState("");
  const [writtenBy, setwrittenBy] = useState("");
  const [photo, setPhoto] = useState("");
  const [isErr, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  // handler
  const titleHandler = (e) => {
    return setTitle(e.target.value);
  };
  const summeryHandler = (e) => {
    return setsummery(e.target.value);
  };
  const firstHandler = (e) => {
    return setfirst(e.target.value);
  };
  const secondHandler = (e) => {
    return setSecond(e.target.value);
  };
  const thirdHandler = (e) => {
    return setthird(e.target.value);
  };
  const writtenByHandler = (e) => {
    return setwrittenBy(e.target.value);
  };
  const id = queryString.parse(props.location.search).id;
  useEffect(() => {
    Axios.get(`api/${id}`).then((res) => {
      const { data } = res.data;
      setthird(data.third);
      setTitle(data.title);
      setSecond(data.second);
      setfirst(data.first);
      setwrittenBy(data.writtenBy);
      setPhoto(data.photo);
      setsummery(data.summery);
    });
  }, [id]);
  const updateHandler = () => {
    if (!title || !first || !summery || !second || !third || !writtenBy) {
      setErr(true);
      return setErrMessage("Fill up the from");
    }
    const data = {
      title: title,
      summery: summery,
      first: first,
      second: second,
      third: third,
      photo: photo,
      writtenBy: writtenBy,
    };
    const status = window.confirm("Are You Sure?");
    if (status) {
      return Axios.patch(`/api/${id}`, data).then((res) => {
        if (res.data.status) {
          alert("updated");
          setErr(false);
          return props.history.push("/admin");
        }
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <Title Title='Update Blog' />
      <div>
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
        <input
          type='Text'
          value={title}
          onChange={titleHandler}
          className='form-control mt-1'
          placeholder='Title'
        />
        <textarea
          className='form-control mt-3'
          rows='3'
          value={summery}
          onChange={summeryHandler}
          placeholder='Summery'></textarea>
        <textarea
          className='form-control mt-3'
          rows='3'
          value={first}
          onChange={firstHandler}
          placeholder='first Paragraph'></textarea>
        <textarea
          className='form-control mt-3'
          rows='3'
          value={second}
          onChange={secondHandler}
          placeholder='Second Paragraph'></textarea>
        <textarea
          value={third}
          onChange={thirdHandler}
          className='form-control mt-3'
          rows='3'
          placeholder='Third Paragraph'></textarea>
        <input
          type='Text'
          value={writtenBy}
          onChange={writtenByHandler}
          placeholder='written by'
          className='form-control mt-3'
        />

        <input
          type='button'
          onClick={updateHandler}
          className='btn btn-primary mt-3'
          value='Submit'
        />
      </div>
    </>
  );
}
export default withRouter(AddBlogs);
