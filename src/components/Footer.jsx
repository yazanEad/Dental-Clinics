

import { FaTwitter, FaLinkedinIn, FaFacebookF, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/dentify_logo.svg";

const Footer = () => {
  return (
    <footer className=" container-fluid container-lg">
      <div className="footer-section">
        <div className="row g-4">
          {/*  */}
          <div className="col-lg-4 col-md-12">
            <div className="footer-logo d-flex align-items-center mb-3">
              <Link to="/" className="navbar-brand logo">
                <div className="logoImge">
                  <img src={logo} className="" alt="" />
                </div>
                Dentify
              </Link>
            </div>
            <p className="footer-description mb-4">
              Innovative solutions, proven <br /> success & growth
            </p>
            <Link to="/contact">
              <button className="butt">Contact us</button>
            </Link>
          </div>

          {/*  */}
          <div className="col-lg-2 col-md-4 col-6 ms-auto">
            <p className="footer-title">Quick Links</p>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/404">404</Link>
              </li>
            </ul>
          </div>

          {/*  */}
          <div className="col-lg-2 col-md-4 col-6">
            <p className="footer-title">Main Pages</p>
            <ul className="footer-links">
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">Blogs</Link>
              </li>
              <li>
                <Link to="">Dentists</Link>
              </li>
            </ul>
          </div>

          {/*  */}
          <div className="col-lg-3 col-md-4">
            <p className="footer-title">Follow us</p>
            <ul className="social-links">
              <li>
                <Link to="">
                  <FaTwitter className="social-icon twitter" /> Twitter
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaLinkedinIn className="social-icon linkedin" /> Linkedin
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaFacebookF className="social-icon facebook" /> Facebook
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaLink className="social-icon link" /> Buy Template
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
