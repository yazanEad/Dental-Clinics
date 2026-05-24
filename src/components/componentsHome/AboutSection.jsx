import { IoMdCheckmark } from "react-icons/io";
import aboutImage from "../../assets/aboutImage.jpg"

function AboutSection() {
  return (
    <section className="why">
      <div className="container-fluid container-lg">
        <div className="why_container row row-cols-1 row-cols-md-2 flex-column-reverse flex-md-row  align-items-center  g-5">
          {/* Left */}
          <div className="col why_image">
            <img src={aboutImage} alt="" className="img-fluid " />
          </div>
          <div className="col ">
            <h3 className="">Why choose us: </h3>
            <p className="why_description my-3">
              We are dedicated to providing exceptional dental care that
              prioritizes your comfort, convenience, and lasting results. Here’s
              what makes us stand out:
            </p>
            <ul className="why_list my-4">
              <li className="why_item">
                <div className="why_icon">
                  <IoMdCheckmark />
                </div>
                Compassionate care with a focus
              </li>
              <li className="why_item">
                <div className="why_icon">
                  <IoMdCheckmark />
                </div>
                State-of-the-art technology for treatments
              </li>
              <li className="why_item">
                <div className="why_icon">
                  <IoMdCheckmark />
                </div>
                Personalized solutions to every smile
              </li>
            </ul>
            <button className="butt">Abou Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
