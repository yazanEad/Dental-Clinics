import avatar_1 from "../../assets/avatar_1.webp";
import pictureBefore_1 from "../../assets/pictureBefore_1.jpg";
import pictureAfter_1 from "../../assets/pictureAfter_1.jpg";

import avatar_2 from "../../assets/avatar_2.webp";
import pictureBefore_2 from "../../assets/pictureBefore_2.jpg";
import pictureAfter_2 from "../../assets/pictureAfter_2.jpg";

import avatar_3 from "../../assets/avatar_3.webp";
import pictureBefore_3 from "../../assets/pictureBefore_3.jpg";
import pictureAfter_3 from "../../assets/pictureAfter_3.jpg";

import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: "comment_1",
    name: "Daniel Smith",
    avatar: avatar_1,
    comment:
      "Outstanding service and clear communication. Their solutions delivered results expectations.",
    pictureBefore: pictureBefore_1,
    pictureAfter: pictureAfter_1,
  },
  {
    id: "comment_2",
    name: "Lisa Green",
    avatar: avatar_2,
    comment:
      "Professional, efficient, and result-driven. We couldn’t have asked for a better dental clinic. ",
    pictureBefore: pictureBefore_2,
    pictureAfter: pictureAfter_2,
  },
  {
    id: "comment_3",
    name: "John Smith",
    avatar: avatar_3,
    comment:
      "Fast, effective guidance. The team’s approach ensured we met our goals within the timeframe.",
    pictureBefore: pictureBefore_3,
    pictureAfter: pictureAfter_3,
  },
];
function TestimonialList() {
  return (
    <div className="container-fluid container-lg">
      <div className="testimonial row g-4 ">
        <TestimonialCard testimonial={testimonials} />
      </div>
    </div>
  );
}

export default TestimonialList;
