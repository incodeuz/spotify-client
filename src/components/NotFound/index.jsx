import React from "react";
import GifError from "../../assets/err.gif";

const NotFound = () => {
  return (
    <div
      style={{
        overflowY: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: "#F6F9FB",
        height: "100vh",
      }}
    >
      <img style={{ margin: "auto" }} width="60%" src={GifError} alt="" />
    </div>
  );
};

export default NotFound;
