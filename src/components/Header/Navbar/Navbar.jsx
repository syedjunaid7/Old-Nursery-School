import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import navbarData from "./navbarData";
import logo from "../../../assets/images/logo.gif";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  const [click, setClick] = useState(false);
  // const [show, setShow] = useState(false)
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav-container ${show ? "show-shadow" : ""}`}>
      <div>
        {/* <FaUserCircle className="admin-logo" /> */}
        <img className="" src={logo} alt="logo" onClick={() => navigate("/")}/>
      </div>
      <div className={`navbar ${click ? "active-menu" : null}`}>
        {navbarData.map((item, index) => (
          <nav key={index}>
            <NavLink className="nav-link" to={`${item.path}`} onClick={() => setClick(false)}>
              {item.linkName}
            </NavLink>
          </nav>
        ))}
      </div>
      <div className="icon-container" onClick={() => setClick(!click)}>
        {click ? <RxCross2  className="nav-icon" onClick={() => setClick(!click)}/> : <RxHamburgerMenu className="nav-icon" onClick={() => setClick(!click)}/>}
      </div>     
    </div>
  );
}
