import "./home.css";

import HeroSection from "../../components/componentsHome/HeroSection";

import HeaddingWrapper from "../../components/HeaddingWrapper";
import IntroductionCards from "../../components/componentsHome/IntroductionCards";
import videoOne from "../../assets/VideoOne.mp4";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import { stats, services, blogPosts } from "../../assets/assets";
import AboutSection from "../../components/componentsHome/AboutSection";
import Features from "../../components/componentsHome/Features";
import HowItWorks from "../../components/componentsHome/HowItWorks";

import ServicesList from "../../components/ServicesList";
import BlogList from "../../components/BlogList";
import FAQ from "../../components/FAQ";
import TalkToUs from "../../components/TalkToUs";
import TestimonialList from "../../components/componentsHome/TestimonialList";
import Statistics from "../../components/Statistics";

function Home() {
  return (
    <div>
      <HeroSection />

      <section className="">
        <HeaddingWrapper
          titleOne="Introduction"
          titleTwo="A commitment to healthier, brighter smiles"
        />
        <IntroductionCards />
        <div className="container-fluid container-lg">
          <div className="video-wrapper">
            <video
              className="video-element"
              src={videoOne}
              autoPlay
              loop
              muted
              playsInline
            />
            <Link to="https://www.youtube.com/" className="video-icon">
              <AiFillCaretRight />
            </Link>
          </div>
        </div>
        <Statistics stats={stats.slice(0, 4)} />
      </section>

      <section>
        <HeaddingWrapper
          titleOne="Services"
          titleTwo="Personalized solutions for better oral health"
        />
        <ServicesList services={services} />
        <AboutSection />
      </section>

      <section className="feature">
        <HeaddingWrapper
          titleOne="Feature"
          titleTwo="Delivering more than just dental care & ideas"
        />
        <Features />
      </section>

      <section>
        <HeaddingWrapper
          titleOne="How It Works"
          titleTwo="The process of achieving dental excellence"
        />
        <HowItWorks />
      </section>

      <section>
        <HeaddingWrapper
          titleOne="Testimonial"
          titleTwo="What our patients say about us & service!!"
        />
        <TestimonialList />
      </section>

      <section>
        <HeaddingWrapper
          titleOne="Blogs"
          titleTwo="Stay updated with dental wellness tips"
        />
        <BlogList blogs={blogPosts.slice(0, 3)} />
      </section>

      <FAQ />

      <TalkToUs />
    </div>
  );
}

export default Home;
