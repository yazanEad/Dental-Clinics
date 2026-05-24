import {doctors} from "../assets/assets"
import TeamCard from "./TeamCard";

function TeamList() {
  return (
    <div className="container container-lg">
      <div className="teamList row row-cols-1  row-cols-md-2  row-cols-lg-3 g-4 ">
        {doctors.map((doc)=>{
            return <TeamCard key={doc.slug} doctor={doc}/>
        })}
      </div>
    </div>
  );
}

export default TeamList
