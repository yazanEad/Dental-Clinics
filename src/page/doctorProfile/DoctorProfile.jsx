import "./doctorProfile.css"; // تأكد من استيراد ملف الـ CSS
import {doctors} from "../../assets/assets"
import { useParams } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import TalkToUs from "../../components/TalkToUs";


export default function DoctorProfile() {

  let { doctor_id } = useParams();
  let doctorData = doctors.filter((ele) => ele.slug === doctor_id)[0];
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [doctor_id]);
  return (
    <div>
      <div className="container-fluid container-lg profile-container">
        <div className="row g-5">
          {/*  */}
          <div className="col-lg-4 col-md-5">
            <div className="left-sidebar shadow-sm">
              <div className="profile-img">
                <img src={doctorData.image} alt={doctorData.imageAlt} />
              </div>

              <h6 className="doctor-name">{doctorData.name}</h6>
              <div className="doctor-role">{doctorData.role}</div>

              <div className="contact-details">
                <h6 className="info-title">Contact Info</h6>
                <div className="contact-item">
                  <MdEmail />
                  <p>{doctorData.email}</p>
                </div>

                <div className="contact-item">
                  <FaPhone />
                  <p>{doctorData.phone}</p>
                </div>

                <div className="contact-item">
                  <IoLocationSharp />
                  <p>{doctorData.location}</p>
                </div>
              </div>

              <button className="butt btn-book">Book Now</button>
            </div>
          </div>

          {/*  */}
          <div className="col-lg-8 col-md-7 ps-lg-5">
            <div className="content-section">
              <h4 className="section-title">Introduction:</h4>
              <p>{doctorData.introduction}</p>
            </div>

            <div className="content-section">
              <h5 className="section-title">Experience:</h5>
              <p className="mb-4">{doctorData.experience.description}</p>

              <ul className="highlights-list">
                {doctorData.experience.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h5 className="section-title">Availability</h5>
              <div className="availability-box d-flex align-items-center gap-3">
                <FiClock />
                <p className="mb-0">{doctorData.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TalkToUs/>
    </div>
  );
}
