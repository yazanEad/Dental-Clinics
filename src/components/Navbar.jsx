import { Link } from "react-router-dom";
import logo from "../assets/dentify_logo.svg"
import { useState } from "react";



export default function Navbar() {
     const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg  py-3 bg-white sticky-top ">
      <div className="container-fluid container-lg">
        <Link to="/" className="navbar-brand logo">
          <div className="logoImge">
            <img src={logo} className="" alt="" />
          </div>
          Dentify
        </Link>
        <button
          className={`d-blok d-lg-none menu bg-white border-0  ${open ? "open" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto  gap-4 py-4 py-lg-0 text-center">
            <li className="nav-item">
              <Link to="/about" className=" nav-link" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link ">
                Dentist
              </Link>
            </li>
          </ul>

          <Link to="/contact">
            <button className="butt">Contact us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
