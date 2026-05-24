import ServicesList from "../../components/ServicesList";
import TalkToUs from "../../components/TalkToUs";
import {  services } from "../../assets/assets";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="container-fluid container-lg ">
        <div className="text-center mt-5 ">
          <p className="fw-medium">Services</p>
          <h1 className=" my-4 col-12 col-lg-9 mx-auto">
            Expertise in preventive and restorative care
          </h1>
          <Link to="/contact">
            <button className="butt">Contact us</button>
          </Link>
        </div>
      </div>
      <ServicesList services={services} />
      <TalkToUs />
    </div>
  );
}

export default Services
