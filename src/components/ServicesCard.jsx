import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";



function ServicesCard({ service }) {
  return (
      <div className="service-card  col-12 col-md-6 col-lg-4">
        <Link to={`/services/${service.Slug}`}>
        <div className="service-img">
          <img src={service.CoverImage} alt="" />
        </div>
        <p className="d-flex align-items-center gap-2 mt-4 mb-3 rating">
          <FaStar className="star" /> {service.Rating}
        </p>
        <div className="d-flex justify-content-between ">
          <p className="service-title"> {service.Name}</p>
          <div className="arrow border">
            <FaArrowRight />
          </div>
        </div>
        <p className="service-desc">{service.ShortDescription}</p>
        </Link>
      </div>
    
  );
}

export default ServicesCard;
