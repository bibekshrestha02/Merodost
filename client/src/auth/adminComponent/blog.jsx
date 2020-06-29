import React, { useState, useEffect } from "react";
import Title from "./../../assets/Title";
import Axios from "./../../axios";
import LoadingPage from "./../../components/loadingPage/loadingPage";
import { withRouter, Link } from "react-router-dom";

function Blog(props) {
  const [blogs, setBlogs] = useState();

  const [isLoading, setLoading] = useState(true);
  const deleteHandler = (id) => {
    const status = window.confirm("Are You Sure?");
    if (status) {
      return Axios.delete(`/api/${id}`).then((res) => {
        if (res.data.status) {
          alert("deleted");
          return window.location.reload();
        }
      });
    } else {
      return null;
    }
  };
  useEffect(() => {
    Axios.get("/api").then((res) => {
      if (res.data.status) {
        setBlogs(res.data.data);
        return setLoading(false);
      }
    });
  }, []);
  let data;
  isLoading
    ? (data = <LoadingPage />)
    : (data = (
        <div>
          <Title Title='Blog Post' />
          <div
            style={{ height: "90vh", overflow: "scroll", marginTop: "20px" }}>
            {blogs.map((blog, i) => {
              return (
                <div
                  key={i}
                  className='card-body mt-3 w-100 container-fluid'
                  style={{ backgroundColor: "#f7f9f8" }}>
                  <h5
                    className='card-title'
                    style={{ color: "#2e8bc0", fontWeight: 600, fontSize: 16 }}>
                    {`${blog.title}`.toLocaleUpperCase()}
                  </h5>
                  <p className='card-text'>{blog.summery}</p>
                  <Link
                    to={{
                      pathname: "/admin/update",
                      search: `?id=${blog._id}`,
                    }}>
                    <span className='btn btn-primary mr-3'>Update</span>
                  </Link>
                  <span
                    className='btn btn-danger'
                    onClick={() => deleteHandler(blog._id)}>
                    Delete
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ));
  return data;
}
export default withRouter(Blog);
