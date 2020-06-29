import React, { useState, useEffect } from "react";
import Contact from "./components/contact/contact";
import Slide from "./components/slide/slide";
import Cards from "./components/cards/cards";
import Axios from "./axios";
import Footer from "./components/footer/footer";
import Nav from "./components/navs/nav";
import ProgressBar from "./components/progressBar/progressBar";
import LoadingPage from "./components/loadingPage/loadingPage";
function App(props) {
  const [blogs, setBlogs] = useState();
  const [isLoading, setLoading] = useState(true);
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
        <>
          <div style={{ position: "fixed", top: 0, zIndex: 1, width: "100vw" }}>
            <Nav />
            <ProgressBar />
          </div>
          <div id='home' style={{ marginTop: "85px" }}>
            <Slide />
          </div>
          <div id='blog'>
            <Cards blogs={blogs} Title='BLOGS' />
          </div>
          <div id='contact'>
            <Contact />
          </div>
          <Footer />
        </>
      ));
  return data;
}

export default App;
