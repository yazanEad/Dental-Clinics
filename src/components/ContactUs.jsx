import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../utils/motionPresets";
function ContactUs() {
  return (
    <div>
      <div className="container-fluid container-lg ">
        <motion.div
          className="text-center mt-5 "
          variants={cardAppear}
          initial="hidden"
          whileInView="visible"
          viewport={cardViewport}
          custom={0}
        >
          <p className="fw-medium">Connect with us</p>
          <h1 className=" my-4 col-12 col-lg-9 mx-auto">
            Reach out for assistance and expert care
          </h1>
        </motion.div>
      </div>
      {/* >>>>>>>>>>>>>>>>>> */}
      <div className="container-fluid container-lg ">
        <div className="row  align-items-center g-5 mt-3">
          <motion.div
            className="col-12 col-lg-7"
            variants={cardAppear}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            custom={0}
          >
            <div className="contact-form">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Name"
                  />
                </div>

                <div className="col-md-6">
                  <label>Email Address</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="myname@email.com"
                  />
                </div>

                <div className="col-md-12">
                  <label>Phone number</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="+123 456 789"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="">Message</label>
                  <textarea
                    className="form-control custom-input"
                    rows="4"
                    placeholder="Write your idea"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn submit-btn w-100">Submit</button>
                </div>
              </form>
            </div>
          </motion.div>
          <div className="col-12 col-lg-5">
            <Link>
              <motion.div
                className="contact-box d-flex gap-4"
                variants={cardAppear}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                custom={1}
              >
                <TfiEmail />
                <div>
                  <p className="contact-box-title">Email Address</p>
                  <p className="contact-box-text mb-0">
                    contact@muzamalhussani.com
                  </p>
                </div>
              </motion.div>
            </Link>
            <Link>
              <motion.div
                className="contact-box d-flex  gap-4"
                variants={cardAppear}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                custom={2}
              >
                <FiPhone />
                <div>
                  <p className="contact-box-title">Phone Number</p>
                  <p className="contact-box-text mb-0">+123 456 789</p>
                </div>
              </motion.div>
            </Link>
            <Link>
              <motion.div
                className="contact-box d-flex gap-4"
                variants={cardAppear}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                custom={3}
              >
                <IoLocationOutline />
                <div>
                  <p className="contact-box-title">Location - 01</p>
                  <p className="contact-box-text mb-0">
                    123 Harmony Lane, Suite 200 New york
                  </p>
                </div>
              </motion.div>
            </Link>
            <Link>
              <motion.div
                className="contact-box d-flex gap-4"
                variants={cardAppear}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                custom={4}
              >
                <IoLocationOutline />
                <div>
                  <p className="contact-box-title">Location - 01</p>
                  <p className="contact-box-text mb-0">
                    456 Wellness Avenue, Building A Los Angeles
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs
