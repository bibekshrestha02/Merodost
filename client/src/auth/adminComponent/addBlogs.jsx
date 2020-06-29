import React, { useState } from "react";
import Title from "./../../assets/Title";
import Axios from "./../../axios";
export default function AddBlogs() {
  const [title, setTitle] = useState("");
  const [summery, setsummery] = useState("");
  const [first, setfirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setthird] = useState("");
  const [writtenBy, setwrittenBy] = useState("");
  const [photo, setPhoto] = useState("");
  const [photoData, setPhotoData] = useState("");
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
  const [isErr, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const photoHandler = (e) => {
    setPhotoData(e.target.files[0]);
    return setPhoto(e.target.value);
  };
  // onSubmit
  const onSubmit = () => {
    if (
      !photo ||
      !title ||
      !first ||
      !summery ||
      !second ||
      !third ||
      !writtenBy
    ) {
      setErr(true);
      return setErrMessage("Fill up the from");
    }
    const formData = new FormData();
    formData.append("photo", photoData);
    formData.append("title", title);
    formData.append("first", first);
    formData.append("second", second);
    formData.append("third", third);
    formData.append("summery", summery);
    formData.append("writtenBy", writtenBy);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    Axios.post("/api/", formData, config).then((response) => {
      if (response.data.status) {
        setPhoto("");
        setSecond("");
        setTitle("");
        setfirst("");
        setthird("");
        setsummery("");
        setwrittenBy("");
        return alert("Successfully added");
      }
      alert("Something went wrong");
    });
  };
  return (
    <div>
      <Title Title='Add Blog' />
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
          onChange={titleHandler}
          value={title}
          type='Text'
          className='form-control mt-1'
          placeholder='Title'
        />
        <textarea
          onChange={summeryHandler}
          value={summery}
          className='form-control mt-3'
          rows='3'
          placeholder='Summery'></textarea>
        <textarea
          onChange={firstHandler}
          value={first}
          className='form-control mt-3'
          rows='3'
          placeholder='first Paragraph'></textarea>
        <textarea
          onChange={secondHandler}
          value={second}
          className='form-control mt-3'
          rows='3'
          placeholder='Second Paragraph'></textarea>
        <textarea
          onChange={thirdHandler}
          value={third}
          className='form-control mt-3'
          rows='3'
          placeholder='Third Paragraph'></textarea>
        <input
          placeholder='Written By'
          type='text'
          onChange={writtenByHandler}
          value={writtenBy}
          className='form-control mt-3'
        />

        <input
          type='file'
          onChange={photoHandler}
          value={photo}
          className='form-control mt-3'
        />
        <input
          onClick={onSubmit}
          type='button'
          className='btn btn-primary mt-3'
          value='Submit'
        />
      </div>
    </div>
  );
}
