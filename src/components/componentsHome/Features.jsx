import {
  LuDatabase,
  LuMonitorUp,
  LuClipboardCheck,
  LuBox,
  LuLayers,
} from "react-icons/lu";
import { BsClipboardHeart } from "react-icons/bs";
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../../utils/motionPresets";

const dentalServices = [
  {
    id: 1,
    title: "Preventive care",
    description:
      "Regular checkups and cleanings help maintain optimal oral health and prevent potential issues.",
    icon: <LuDatabase/>,
  },
  {
    id: 2,
    title: "Advanced technology",
    description:
      "Our state-of-the-art equipment ensures precise diagnostics and effective treatments for every patient.",
    icon: <LuMonitorUp />,
  },
  {
    id: 3,
    title: "Cosmetic solutions",
    description:
      "Transform your smile with teeth whitening, veneers, and other advanced aesthetic treatments.",
    icon: <LuClipboardCheck />,
  },
  {
    id: 4,
    title: "Emergency care",
    description:
      "Immediate assistance for dental emergencies, ensuring your comfort and quick resolution of urgent issues.",
    icon: <BsClipboardHeart />,
  },
  {
    id: 5,
    title: "Personalized treatments",
    description:
      "Every service is tailored to meet your unique dental needs, ensuring the best possible noted outcomes.",
    icon: <LuBox />,
  },
  {
    id: 6,
    title: "Family-friendly services",
    description:
      "We provide comprehensive care for patients of all ages, making us the perfect choice for your family.",
    icon: <LuLayers />,
  },
];
function Features() {
  return (
      <section className="feature-section">
        <div className="container-fluid container-lg">
          <div className="row g-5">
            
            {dentalServices.map((service, index) => (
              <motion.div
                className="feature-card col-12 col-md-6 col-lg-4 "
                key={service.id}
                variants={cardAppear}
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                custom={index}
              >
                <div className="icon-wrapper">{service.icon}</div>
                <h6>{service.title}</h6>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Features;
