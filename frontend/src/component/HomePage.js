import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import pic from "../images/col.jpg";
import photo from "../images/row.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Nav /> */}
      <div className="nav-ul"></div>
      {/*<div className="row">
        <span className="col-5">
          <img className="home-pic" src={pic} alt="" />
        </span>
      </div>
      <div className="col-12">
        <span>
          <img className="home-photo" src={photo} alt="" />
        </span>
        <span>
          <h1 className="mt-5 ms-5">Welcome</h1>
          <div className="mt-5 ms-5">
            <button className="button" onClick={(e) => navigate("/register")}>
              Register
            </button>
            <button className="button" onClick={(e) => navigate("/login")}>
              Login
            </button>
          </div>
        </span>
      </div> */}

      <div className="row">
        <span className="col-4">
          <img src={pic} alt="" className="home-pic" />
        </span>
        <div className="col-6">
          <span>
            {/* <img src={Diamond} alt="smallbar" className="bar" /> */}
            <img src={photo} alt="smallbar" className="home-photo" />
          </span>
          <span>
            {/* <img src={Diamond} alt="smallbar" className="bar" /> */}
            <img src={photo} alt="smallbar" className="home-photo" />
          </span>
          <span>
            <h1 className="name">Welcome</h1>
            <div className="mt-5 ms-5">
              <button
                className="btn btn-secondary me-4"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
              <button
                className="btn btn-secondary me-4"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
