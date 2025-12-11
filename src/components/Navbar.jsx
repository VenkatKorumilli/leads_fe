import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate()
  const token = window.localStorage.getItem("token")
  function logout(){
  window.localStorage.removeItem("token")
  navigate("/login")
  }


  return (
    <nav className="navbar navbar-expand-lg bg-primary px-3">
      <div className="container-fluid">
        <img
          src="https://edupoly.vercel.app/fullstack-training-hyderabad.png"
          className="img-fluid"
          width="160px"
          alt="Logo"
        />
        <button 
          className="navbar-toggler text-light border-0"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            {/* <li className="nav-item">
              <Link to={"/"} className="nav-link text-light fs-5">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/addlead"} className="nav-link text-light fs-5">Add Lead</Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link text-light fs-5">Lead Table</Link>
            </li>
             {/* <li className="nav-item">
              <Link to={"/login"} className="nav-link text-light fs-5">Login</Link>
            </li>
             <li className="nav-item">
              <button className="nav-link text-light fs-5" onClick={()=>{logout()}}>Logout</button>
            </li> */}
            {
            token && (
            <li className="nav-item">
            <button className="nav-link text-light fs-5" onClick={()=>{logout()}}>Logout</button>
            </li>
            )
            }
            {
            !token && (
            <li className="nav-item">
              <Link to={"/login"} className="nav-link text-light fs-5">Login</Link>
            </li>
            )
            }
           

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
