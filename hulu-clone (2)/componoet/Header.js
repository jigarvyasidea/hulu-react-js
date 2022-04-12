import React from "react";
import "../src/styles.css";

export default function App() {
  return (
    <>
      {/* header starts */}
      <div className="header">
        <div className="header__icons">
          <div className="header__icon active">
            <span className="material-icons"> home </span>
            <p>Home</p>
          </div>
          <div className="header__icon">
            <span className="material-icons"> flash_on </span>
            <p>Trending</p>
          </div>
          <div className="header__icon">
            <span className="material-icons"> live_tv </span>
            <p>Verified</p>
          </div>
          <div className="header__icon">
            <span className="material-icons"> video_library </span>
            <p>Collections</p>
          </div>
          <div className="header__icon">
            <span className="material-icons"> search </span>
            <p>Search</p>
          </div>
          <div className="header__icon">
            <span className="material-icons"> person_outline </span>
            <p>Account</p>
          </div>
        </div>
        <img src="images/logo.png" alt="" />
      </div>
      {/* header ends */}
    </>
  );
}
