import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progressbar, setprogressbar] = useState("0%");
  const scrollStick = {
    height: "5px",
    background: "#2e8bc0",
    width: progressbar,
  };
  const progresscontainer = {
    width: "100%",
    height: "5px",
    background: " #ccc",
  };
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  };
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setprogressbar(`${scrollPostion}%`);
  };
  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };
  useEffect(() => {
    listenToScrollEvent();
  });
  return (
    <div style={progresscontainer}>
      <div style={scrollStick} id='myBar'></div>
    </div>
  );
}
