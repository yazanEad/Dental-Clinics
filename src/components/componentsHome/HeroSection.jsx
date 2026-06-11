import heroImige from '../../assets/heroImage.jpg'
import { FiPhone } from "react-icons/fi";
import { motion } from "motion/react";

const heroTitle = "Bringing brighter smiles to your family";
let heroTitleLetterIndex = 0;
const heroTitleWords = heroTitle.split(" ").map((word, wordIndex, words) => {
  const letters = word.split("").map((letter) => ({
    letter,
    index: heroTitleLetterIndex++,
  }));

  if (wordIndex < words.length - 1) {
    heroTitleLetterIndex++;
  }

  return {
    letters,
    word,
  };
});

const appearViewport = {
  once: true,
  amount: 0.4,
};

const appearItem = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const titleLetter = {
  hidden: {
    opacity: 0,
    y: 34,
    rotateX: -70,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.55,
      delay: 0.16 + index * 0.025,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function HeroSection() {
  return (
    <section className="hero-section pt-3 pb-5 ">
      <div className="container-fluid container-lg">
        <div className="row row-cols-1 row-cols-md-2 align-items-center  g-4">
          {/* Left */}
          <div className="col ">
            {/* Community */}
            <motion.div
              className="community-box mb-3"
              variants={appearItem}
              initial="hidden"
              whileInView="visible"
              viewport={appearViewport}
              custom={0}
            >
              <p className="mb-0 ms-2 small-text">
                Healthy smiles, happy lives.
              </p>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="hero-title"
              initial="hidden"
              whileInView="visible"
              viewport={appearViewport}
              aria-label={heroTitle}
            >
              {heroTitleWords.map((word, wordIndex) => (
                <motion.span
                  key={`${word.word}-${wordIndex}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={appearViewport}
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {word.letters.map(({ letter, index }) => (
                    <motion.span
                      key={`${letter}-${index}`}
                      variants={titleLetter}
                      custom={index}
                      style={{
                        display: "inline-block",
                        transformOrigin: "bottom",
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {wordIndex < heroTitleWords.length - 1 ? "\u00A0" : ""}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="hero-desc mt-2"
              variants={appearItem}
              initial="hidden"
              whileInView="visible"
              viewport={appearViewport}
              custom={0.35}
            >
              Experience personalized dental care designed to meet your unique
              needs. From preventive checkups to advanced oral health and
              confidence are always at their best.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="d-flex  gap-3 my-4"
              variants={appearItem}
              initial="hidden"
              whileInView="visible"
              viewport={appearViewport}
              custom={0.48}
            >
              <button className="butt">Book Now</button>

              <div className=" d-flex  align-items-center gap-3">
                <div className="contactIcon">
                  <FiPhone />
                </div>
                <div>
                  <p className="mb-0 text-black contactTitle">Contact us</p>
                  <p className="mb-0 contactNmber">(123) 456 789</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="col hero-img"
            variants={appearItem}
            initial="hidden"
            whileInView="visible"
            viewport={appearViewport}
            custom={0.25}
          >
            <img src={heroImige} alt="" className="img-fluid " />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection

