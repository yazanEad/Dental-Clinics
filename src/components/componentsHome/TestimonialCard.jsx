import ReactCompareImage from 'react-compare-image';
import { motion } from "motion/react";
import { cardAppear, cardViewport } from "../../utils/motionPresets";





function TestimonialCard({testimonial}) {

  return (
    <>
      {testimonial.map((item, index) => (
        <motion.div
          key={item.id}
          className="col-12 col-md-6 col-lg-4"
          variants={cardAppear}
          initial="hidden"
          whileInView="visible"
          viewport={cardViewport}
          custom={index}
        >
          <div className="testimonial-card card ">
            <div className="image-wrapper position-relative">
              <ReactCompareImage
                leftImage={item.pictureBefore}
                rightImage={item.pictureAfter}
              />
              <span className=" before-badge">BEFORE</span>
              <span className=" after-badge">AFTER</span>
            </div>

            <div className="card-body ">
              <p className="testimonial-text">{item.comment}</p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <img src={item.avatar} className="avatar" alt={item.name} />
                <p className="testimonial-name mb-0">{item.name}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default TestimonialCard;
