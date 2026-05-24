import { Link } from "react-router-dom";
import TalkToUs from "../../components/TalkToUs";
import TeamList from "../../components/TeamList";

function Team() {
  return (
    <div>
      <div>
        <div>
          <div className="container-fluid container-lg ">
            <div className="text-center mt-5 ">
              <p className="fw-medium">Meet our team</p>
              <h1 className=" my-4 col-12 col-lg-9 mx-auto">
                Professionals committed to exceptional care
              </h1>
              <Link to="/contact">
                <button className="butt">Contact us</button>
              </Link>
            </div>
          </div>
          <TeamList />
          <TalkToUs />
        </div>
      </div>
    </div>
  );
}

export default Team
