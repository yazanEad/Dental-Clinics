
import { Link } from "react-router-dom";
import step01 from "../../assets/step01.png"
import step02 from "../../assets/step02.webp";
import step03 from "../../assets/step03.jpg";
const OurWork = [
  {
    id: "01",
    title: "Schedule your visit",
    description:
      "Book an appointment at your convenience through our easy scheduling system, and we’ll ensure a hassle-free experience from the start.",
    image: step01,
  },
  {
    id: "02",
    title: "Begin your journey",
    description:
      "Medical knowledge and practices continually evolve perfectly match your goals of treatment complications with early intervention.",
    image: step02,
  },
  {
    id: "03",
    title: "Cosmetic solutions",
    description:
      "Transform your smile with teeth whitening, veneers, and other advanced aesthetic treatments.",
    image: step03,
  },
];
function HowItWorks() {
  return (
    <div className="container-fluid container-lg">
      <div className="howItWorks">
        {OurWork.map((work) => {
          return (
            <div
              key={work.id}
              className="work-container row row-cols-1 row-cols-md-2  align-items-center  g-5 "
            >
              {/* Left */}
              <div className="col work-image">
                <img src={work.image} alt="" className="img-fluid " />
              </div>
              <div className="col">
                <div className="d-flex">
                  <div className="word-id me-3">{work.id}</div>
                  <h5 className="">{work.title} </h5>
                </div>
                <p className="work-description my-3">{work.description}</p>
                <Link to="/contact">
                  <button className="butt">Contact us</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks
