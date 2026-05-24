import { Link } from "react-router-dom";
import Img01 from "../../assets/Img01.jpg";
import Img02 from "../../assets/Img02.jpg";
import Img03 from "../../assets/Img03.jpg";
import Img04 from "../../assets/Img04.jpg";
import "./about.css"
import { stats } from "../../assets/assets"
import Stat from "../../components/Stat";
import { AiFillCaretRight } from "react-icons/ai";
import aboutGoals from "../../assets/AboutGoals.webp"
import why_us from "../../assets/why_us.webp";
import { FaPlus } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import VideoTwo from "../../assets/VideoTwo.mp4";
import HeaddingWrapper from "../../components/HeaddingWrapper";
import TeamList from "../../components/TeamList";
import TalkToUs from "../../components/TalkToUs";



function About() {
  return (
    <div>
      <div className="container-fluid container-lg ">
        <div className="text-center mt-5 ">
          <p className="fw-medium">About us</p>
          <h1 className=" my-4 col-12 col-lg-7 mx-auto">
            A modern dental care home for families
          </h1>
          <p className=" col-12 col-lg-6 mx-auto">
            Dedicated to providing exceptional dental care that combines
            advanced techniques
          </p>
          <Link to="/contact">
            <button className="butt">Contact us</button>
          </Link>
        </div>
      </div>
      {/* >>>>>>>>>>>> */}
      <div>
        <div className="container-fluid container-lg">
          <div className="image-layout row ">
            <div className="col-12 col-md-4">
              <div className="imge imge1 ">
                <img src={Img01} alt="" />
              </div>
            </div>
            <div className=" col-12 col-md-4  d-flex flex-column  gap-1 gap-md-3">
              <div className="imge imge2 ">
                <img src={Img02} alt="" />
              </div>
              <div className="imge imge3 ">
                <img src={Img03} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="imge img4 ">
                <img src={Img04} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* >>>>>>>>>>>> */}
      <div className="container-fluid container-lg">
        <div className="d-flex  align-items-center flex-column-reverse flex-md-row gap-5">
          <div className="col">
            <div className=" statistic row  row-cols-2 g-3">
              {stats.map((s) => {
                return <Stat key={s.id} item={s} />;
              })}
            </div>
          </div>
          <div className="col">
            <h2>Caring for your family’s oral health needs</h2>
            <p className="my-4">
              We are committed to delivering exceptional dental care with
              precision and compassion. Our goal is to ensure your oral health
              while creating beautiful, confident smiles.
            </p>
            <div className="d-flex align-items-center gap-2">
              <Link to="https://www.youtube.com/" className="videoAbout-icon">
                <AiFillCaretRight />
              </Link>
              <p className="mb-0 text-dark watch-video">Watch video</p>
            </div>
          </div>
        </div>
      </div>
      {/* >>>>>>>>>>>> */}
      <div className="about-goals">
        <div className="container-fluid container-lg">
          <div className="row row-cols-1 row-cols-md-2 align-items-center g-5">
            <div className="col">
              <div className="about-goals__image ">
                <img src={aboutGoals} alt="About goals" />
              </div>
            </div>

            <div className="about-goals__content col">
              <p className="about-goals__subtitle">About goals</p>

              <h2 className="about-goals__title">
                A trusted partner for all your dental needs
              </h2>

              <div className="about-goals__mission mt-5">
                <h6 className="about-goals__mission-title">Our Mission:</h6>

                <p className="about-goals__mission-text">
                  Provide exceptional dental care that promotes lifelong oral
                  health, enhances confidence, and prioritizes patient comfort
                  through personalized treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* >>>>>>>>>>>> */}
      <div className="why-us">
        <div className="container-fluid container-lg">
          <div className="row row-cols-1 row-cols-md-2 flex-row-reverse align-items-center g-5">
            <div className="col">
              <div className="why-us__image ">
                <img src={why_us} alt="About goals" />
              </div>
            </div>

            <div className="why-us__content col">
              <p className="why-us__subtitle">Why us!!</p>

              <h2 className="why-us__title">
                Expertise, precision, and care for every patient
              </h2>

              <div className=" my-5">
                <div className="we-provide row align-items-center  g-4 ">
                  <div className=" col-3 col-lg-2">
                    <div className="we-provide__icon ">
                      <FaPlus />
                    </div>
                  </div>
                  <div className="col-9 col-lg-10">
                    <p className="we-provide__title">Patient-centered care</p>
                    <p className="we-provide__text col-12 col-lg-7">
                      Focused on your comfort and satisfaction at every visit.
                    </p>
                  </div>
                </div>

                <div className="we-provide row align-items-center  g-5">
                  <div className="col-3 col-lg-2">
                    <div className="we-provide__icon ">
                      <FaRegUserCircle />
                    </div>
                  </div>

                  <div className="col-9 col-lg-10">
                    <p className="we-provide__title">Cutting-edge technology</p>
                    <p className="we-provide__text col-12 col-lg-7">
                      Delivering precise, efficient treatments using advanced
                      tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* >>>>>>>>>>>> */}
      <div className="video-about">
        <video src={VideoTwo} autoPlay loop muted playsInline />
        <Link to="https://www.youtube.com/" className="video-icon">
          <AiFillCaretRight />
        </Link>
      </div>
      {/* >>>>>>>>>>>> */}
      <section>
        <HeaddingWrapper
          titleOne="Meet our team"
          titleTwo="Professionals committed to exceptional care"
        />
        <TeamList />
      </section>
      {/* >>>>>>>>>>>> */}
      <TalkToUs />
    </div>
  );
}

export default About
