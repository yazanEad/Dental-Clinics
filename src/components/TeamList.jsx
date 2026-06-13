import {doctors} from "../assets/assets"
import TeamCard from "./TeamCard";

function TeamList({ animateOnLoad = false }) {
  return (
    <div className="container container-lg">
      <div className="teamList row row-cols-1  row-cols-md-2  row-cols-lg-3 g-4 ">
        {doctors.map((doc, index)=>{
            return (
              <TeamCard
                key={doc.slug}
                doctor={doc}
                index={index}
                animateOnLoad={animateOnLoad}
              />
            )
        })}
      </div>
    </div>
  );
}

export default TeamList
