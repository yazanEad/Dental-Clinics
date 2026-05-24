import { IoLocationOutline } from "react-icons/io5";

function TalkToUs() {
  return (
    <div>
      <section className="talkToUs-section">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 g-3 align-items-center">
            {/* <!-- Left Side --> */}
            <div className="col">
              <div className="talkToUs-info mb-5 mb-lg-0">
                <h2 className="talkToUs-title">
                  Talk to us about your <br />
                  dental concerns
                </h2>

                <div className="location-box d-flex align-items-start gap-3">
                  <div className="icon-box">
                    <IoLocationOutline />
                  </div>
                  <div>
                    <h6>New York, NY</h6>
                    <p>123 Smile Street, Suite 101, New York, NY 10001</p>
                  </div>
                </div>

                <div className="location-box  d-flex align-items-start gap-3 mt-4">
                  <div className="icon-box">
                    <IoLocationOutline />
                  </div>
                  <div>
                    <h6>Los Angeles, CA</h6>
                    <p>456 Bright Avenue, Building B, Los Angeles, CA 90012</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right Side --> */}
            <div className="col">
              <div className="talkToUs-form">
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
                    <label>Phone number</label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="">Email address</label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="">Select date*</label>
                    <input type="date" className="form-control custom-input" />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TalkToUs;
