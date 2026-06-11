import { useParams } from "react-router-dom"
import {  services } from "../../assets/assets";
import { IoMdCheckmark } from "react-icons/io";

import "./serviceDetails.css"
import TalkToUs from "../../components/TalkToUs";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../../utils/motionPresets";


function ServiceDetails() {
    let {id} = useParams()
  
    let service = services.filter((ele) => ele.Slug === id)[0];
    // console.log(service);
   
  return (
    <div>
      <div className="container-fluid container-lg">
        <motion.div
          className=" text-center py-5"
          variants={cardAppear}
          initial="hidden"
          whileInView="visible"
          viewport={cardViewport}
          custom={0}
        >
          <div className="icon-imge bg">
            <img src={service.Icon} alt="" />
          </div>
          <h1 className="serviceDetails_tilte my-3">{service.Name}</h1>
          <p className="serviceDetails_description ">{service.Name}</p>
        </motion.div>

        <motion.div
          className="serviceDetails_image"
          variants={cardAppear}
          initial="hidden"
          whileInView="visible"
          viewport={cardViewport}
          custom={0}
        >
          <img src={service.CoverImage} alt="" />
        </motion.div>
        <motion.div
          className="serviceDetails_container col-12 col-lg-10 mx-auto "
          variants={cardAppear}
          initial="hidden"
          whileInView="visible"
          viewport={cardViewport}
          custom={0}
        >
          <h3 className="my-4">About Service</h3>
          {service.Content.intro.map((intro, index) => {
            return <p key={index} className="serviceDetails_description ">{intro}</p>;
          })}
          {service.Content.sections.map((item, index) => {
            return (
              <motion.div
                key={item.title}
                variants={cardAppear}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                custom={index}
              >
                <h4 className="my-4">{item.title}</h4>
                <p className="serviceDetails_description ">{item.body}</p>
              </motion.div>
            );
          })}
          <ul className="serviceDetails_list my-5">
            {service.Features.map((featur, index) => {
              return (
                  <motion.li
                    key={featur}
                    className="serviceDetails_item"
                    variants={cardAppear}
                    initial="hidden"
                    whileInView="visible"
                    viewport={cardViewport}
                    custom={index}
                  >
                    <div className="serviceDetails_icon">
                      <IoMdCheckmark />
                    </div>
                    {featur}
                  </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <TalkToUs />
    </div>
  );
}

export default ServiceDetails
