import React, { useEffect } from "react"
import Footer from "./Footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faFileArchive } from "@fortawesome/free-solid-svg-icons"
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons"
import { faToriiGate } from "@fortawesome/free-solid-svg-icons"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

import OurTeam from "./OurTeam"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "600" })
  }, [])
  return (
    <div data-aos="fade-up">
      <div className="about">
        <h1 className="title">About Us</h1>
      </div>
      <section
        className="about_us"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        {" "}
        <div className="about_container">
          <div className="about__body">
            <h1>
              EUM IPSAM LABORUM <br /> DELENITI VELITENA
            </h1>
            <h3>
              Voluptatem dignissimos provident quasi corporis
              <br /> voluptates sit assum perenda sruen jonee trave
            </h3>
          </div>
          <div
            className="about__right"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <p className="start">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute{" "}
              <br />
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              <br />
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              <br />
              proident, sunt in culpa qui officia deserunt mollit anim id est
              <br />
              laborum
            </p>
            <ul className="check">
              <li>
                <FontAwesomeIcon icon={faCheckDouble}> </FontAwesomeIcon>{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequa
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckDouble}> </FontAwesomeIcon>
                Duis aute irure dolor in reprehenderit in voluptate velit
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckDouble}> </FontAwesomeIcon>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute
                <br />
                irure dolor in reprehenderit in
              </li>
              <p className="end">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </ul>
          </div>
        </div>
      </section>

      <OurTeam />
      {/* <Footer /> */}

      {/* {this.props.children} */}
    </div>
  )
}

export default About
