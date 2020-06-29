import React, { useState, useEffect } from "react";
import Title from "./assets/Title";
import Cards from "./components/cards/cards";
import style from "./styles/posts.module.scss";
import { withRouter } from "react-router-dom";
import Nav from "./components/navs/nav";
import ProgressBar from "./components/progressBar/progressBar";
import LoadingPage from "./components/loadingPage/loadingPage";
import Footer from "./components/footer/footer";
import queryString from "query-string";
import Axios from "./axios";
import { NavHashLink as NavLink } from "react-router-hash-link";
function Posts(props) {
  const [blogs, setBlogs] = useState();
  const [isLoading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const id = queryString.parse(props.location.search).id;
  useEffect(() => {
    Axios.get(`api/${id}`).then((res) => {
      if (!res.data.status) {
        return props.history.push("/");
      }
      setBlogs(res.data.data);
      setRelatedBlogs(res.data.relatedData);
      setLoading(false);
    });
  }, [id, props.history]);
  let data;
  isLoading
    ? (data = <LoadingPage />)
    : (data = (
        <>
          <div style={{ position: "fixed", top: 0, zIndex: 1, width: "100vw" }}>
            <Nav />
            <ProgressBar />
          </div>
          <div style={{ paddingTop: "100px" }}>
            <span
              className='ml-5'
              style={{ fontSize: "16px", fontWeight: "600" }}>
              <NavLink className='p-1' exact smooth to={"/#home"}>
                HOME
              </NavLink>
              /
              <NavLink className='p-1' exact smooth to={"/#blog"}>
                BLOG
              </NavLink>
              / {blogs.title}
            </span>
            <Title Title={blogs.title} />
            <div className={style.blogs}>
              <p
                className='pt-3 pb-3'
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: "16px",
                }}>
                {` By ${blogs.writtenBy}`.toLocaleUpperCase()}
              </p>
              <img
                className='img-fluid rounded mx-auto d-block pb-4'
                src={blogs.photo}
                alt={blogs.title}
              />
              <div className={style.paragraph}>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{blogs.first}</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{blogs.second}</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{blogs.third}</p>
              </div>
            </div>
            <Cards blogs={relatedBlogs} Title='RELATED BLOGS' />
          </div>
          <Footer />
        </>
      ));
  return data;
}
export default withRouter(Posts);
