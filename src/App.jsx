import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Home from './page/home/Home';
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import Services from "./page/services/Services";
import Team from "./page/team/Team";
import Blogs from "./page/blogs/Blogs";
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ServiceDetails from './page/serviceDetails/ServiceDetails';
import BlogDetails from './page/blogDetails/BlogDetails';
import DoctorProfile from './page/doctorProfile/DoctorProfile';
import { useEffect } from 'react';
import Test from './components/Test';

function App() {
  let location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <Test/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services/:id" element={<ServiceDetails />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/team/:doctor_id" element={<DoctorProfile />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:slug" element={<BlogDetails />}></Route>
      </Routes>

      <footer>
        <Newsletter />
        <Footer />
      </footer>
    </>
  );
}

export default App
