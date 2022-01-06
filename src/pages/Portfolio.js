import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import Footer from "./Footer";

import portfolio1 from "../img/portfolio/portfolio-1.jpg";
import portfolio2 from "../img/portfolio/portfolio-2.jpg";
import portfolio3 from "../img/portfolio/portfolio-3.jpg";
import portfolio4 from "../img/portfolio/portfolio-4.jpg";
import portfolio5 from "../img/portfolio/portfolio-5.jpg";
import portfolio6 from "../img/portfolio/portfolio-6.jpg";
import portfolio7 from "../img/portfolio/portfolio-7.jpg";
import portfolio8 from "../img/portfolio/portfolio-8.jpg";
import portfolio9 from "../img/portfolio/portfolio-9.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: "1800" });
  }, []);
  return (
    <section data-aos="fade-up" className="portfolio">
      <h1 className="prtfl__title">Portfolio</h1>
      <div className="images">
        <img className="img1" alt="team 1" src={portfolio1} />
        <img className="img1" alt="team 4" src={portfolio2} />
        <img className="img1" alt="team 2" src={portfolio3} />
        <img className="img4" alt="team 3" src={portfolio4} />
        <img className="img5" alt="team 5" src={portfolio5} />
        <img className="img1" alt="team 6" src={portfolio6} />
        <img className="img1" alt="team 7" src={portfolio7} />
        <img className="img1" alt="team 8" src={portfolio8} />
        <img className="img1" alt="team 9" src={portfolio9} />
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default Portfolio;
