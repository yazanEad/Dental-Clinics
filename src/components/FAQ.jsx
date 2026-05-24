import { useState } from "react";
import HeaddingWrapper from "./HeaddingWrapper";
import { FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It’s recommended to visit the dentist every six months for regular checkups and cleanings.",
  },
  {
    question: "Do you offer emergency dental care?",
    answer:
      "Yes, we provide prompt emergency dental care to address urgent issues like pain, injuries, or tooth loss.",
  },
  {
    question: "Are dental X-rays safe?",
    answer:
      "Yes, dental X-rays are safe and use minimal radiation. We also take precautions to ensure your safety.",
  },
  {
    question: "What should I do if I have a toothache?",
    answer:
      "Rinse with warm salt water, take over-the-counter pain relief, and schedule an appointment with us immediately.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Absolutely! We specialize in gentle, child-friendly dental care for kids of all ages.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <HeaddingWrapper
        titleOne="FAQ"
        titleTwo="Answers to your most common concerns"
      />
      <div className="questionAnswer container-fluid container-lg">
        <div className="col-10 col-lg-8 mx-auto ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-bottom py-3"
              style={{ cursor: "pointer" }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <p className="faq-question mb-0">{faq.question}</p>
                <div className="faq-icon ">
                  <FiPlus
                    className={` ${openIndex === index ? "rotate" : ""}`}
                  />
                </div>
              </div>
              <p
                className={`faq-answer mt-3  ${
                  openIndex === index ? "open" : ""
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
