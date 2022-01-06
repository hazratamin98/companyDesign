import React, { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import { faSkype } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: "1800", once: true })
  }, [])
  return (
    <section data-aos="fade-up" className="footer">
      <div className="up__parts">
        <div className="company">
          <h1>Company</h1>
          <p>
            A108 Adam Street <br /> New York, NY 535022 <br /> United States
          </p>
          <p>
            {" "}
            <strong>Phone:</strong> +1 5589 55488 55 <br />
            <strong>Email:</strong> info@example.com <br />
          </p>
        </div>
        <div className="useful">
          <h1> useful Links</h1>
          <ul className="list_item">
            <li>
              {" "}
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              {"  "}
              Home
            </li>{" "}
            <li>
              {" "}
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              {"  "}
              About us
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Services
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Terms of services
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Privacy policy
            </li>
          </ul>
        </div>
        <div className="Our__Services">
          <h1> Our Services</h1>
          <ul className="list_item">
            <li>
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Web Design
            </li>
            <li>
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Web Development
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Product Development
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Marketing
            </li>
            <li>
              <FontAwesomeIcon
                className="null"
                icon={faChevronCircleRight}
              ></FontAwesomeIcon>
              Graphic Design
            </li>
          </ul>
        </div>
        <div className="join">
          <h1>Join Our Newsletter</h1>
          <p>
            Tamen quem nulla quae legam multos aute sint <br /> culpa legam
            noster magna
          </p>
          <form className="form_input">
            <input className="email" type="email" name="email" />
            <input type="submit" value="Subscribe" className="Subscribe" />
          </form>
        </div>
      </div>
      <div className="down__parts">
        <div className="copyrighy">
          {" "}
          &copy; <span>Company </span> All Rights Reserved{" "}
          <p>
            Designed by <a href="https://bootstrapmade.com/"> BootstrapMade</a>
          </p>
        </div>
        <div className="footer__icon">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSkype}></FontAwesomeIcon>
        </div>
      </div>
    </section>
  )
}

export default Footer
