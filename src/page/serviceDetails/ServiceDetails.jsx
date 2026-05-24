import { useParams } from "react-router-dom"
import {  services } from "../../assets/assets";
import { IoMdCheckmark } from "react-icons/io";

import "./serviceDetails.css"
import TalkToUs from "../../components/TalkToUs";


function ServiceDetails() {
    let {id} = useParams()
  
    let service = services.filter((ele) => ele.Slug === id)[0];
    // console.log(service);
   
  return (
    <div>
      <div className="container-fluid container-lg">
        <div className=" text-center py-5">
          <div className="icon-imge bg">
            <img src={service.Icon} alt="" />
          </div>
          <h1 className="serviceDetails_tilte my-3">{service.Name}</h1>
          <p className="serviceDetails_description ">{service.Name}</p>
        </div>

        <div className="serviceDetails_image">
          <img src={service.CoverImage} alt="" />
        </div>
        <div className="serviceDetails_container col-12 col-lg-10 mx-auto ">
          <h3 className="my-4">About Service</h3>
          {service.Content.intro.map((intro) => {
            return <p className="serviceDetails_description ">{intro}</p>;
          })}
          {service.Content.sections.map((item) => {
            return (
              <>
                <h4 className="my-4">{item.title}</h4>
                <p className="serviceDetails_description ">{item.body}</p>
              </>
            );
          })}
          <ul className="serviceDetails_list my-5">
            {service.Features.map((featur) => {
              return (
                <>
                  <li className="serviceDetails_item">
                    <div className="serviceDetails_icon">
                      <IoMdCheckmark />
                    </div>
                    {featur}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <TalkToUs />
    </div>
  );
}

export default ServiceDetails
