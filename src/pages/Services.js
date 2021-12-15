import React, { useEffect } from "react";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import { faToriiGate } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: "1800" });
  }, []);
  return (
    <section data-aos="fade-up" className="services_parts">
      <div className="services">
        <h1 className="servc__title">services</h1>
        <p>
          Laborum repudiandae omnis voluptatum consequatur mollitia ea est
          voluptas ut
        </p>
      </div>
      <section className="cards">
        <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
          <FontAwesomeIcon className="meter" icon={faArrowCircleDown}>
            {" "}
          </FontAwesomeIcon>
          <h1>Lorem Ipsum</h1>
          <p>
            Voluptatum deleniti atque corrupti quos <br /> dolores et quas
            molestias excepturi
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
          <FontAwesomeIcon className="meter" icon={faFileArchive}>
            {" "}
          </FontAwesomeIcon>
          <h1>Sed Perspiciatis</h1>
          <p>
            Duis aute irure dolor in reprehenderit in
            <br /> voluptate velit esse cillum dolore
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
          <FontAwesomeIcon className="meter" icon={faTachometerAlt}>
            {" "}
          </FontAwesomeIcon>
          <h1>Magni Dolores</h1>
          <p>
            Excepteur sint occaecat cupidatat non <br /> proident, sunt in culpa
            qui officia
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
          <FontAwesomeIcon className="meter" icon={faLayerGroup}>
            {" "}
          </FontAwesomeIcon>
          <h1>Nemo Enim</h1>
          <p>
            At vero eos et accusamus et iusto odio <br /> dignissimos ducimus
            qui blanditiis
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
          <FontAwesomeIcon className="meter" icon={faStarAndCrescent}>
            {" "}
          </FontAwesomeIcon>
          <h1>MDele Cardo</h1>
          <p>
            Quis consequatur saepe eligendi voluptatem <br /> consequatur dolor
            consequuntur
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-easing="ease-in-out">
          <FontAwesomeIcon className="meter" icon={faToriiGate}>
            {" "}
          </FontAwesomeIcon>
          <h1>Divera Don</h1>
          <p>
            Modi nostrum vel laborum. Porro fugit error sit <br /> minus
            sapiente sit aspernatur
          </p>
        </div>
      </section>
      {/* <Footer /> */}
    </section>
  );
};

export default Services;
