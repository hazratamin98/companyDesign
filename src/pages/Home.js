import React, { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

import Navbar from "./Navbar"

import Portfolio from "./Portfolio"
import Services from "./Services"
import Footer from "./Footer"
import About from "./About"
import Slider from "./Slider"
import OurTeam from "./OurTeam"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faFileArchive } from "@fortawesome/free-solid-svg-icons"
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons"
import { faToriiGate } from "@fortawesome/free-solid-svg-icons"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <section complete__body>
      <div className="">
        <Slider />
        {/* <img src={background} alt="" /> */}
        <div className="img_text" data-aos="fade-down">
          <h1>Welcome to Company</h1>
          <p>
            Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est
            quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
            Similique ea voluptatem. Esse doloremque accusamus repellendus
            deleniti vel. Minus et tempore modi architecto.
          </p>
          <button>Read More</button>
        </div>
      </div>
      <About />

      <Services />

      <Portfolio />
      {/* <OurTeam /> */}
    </section>
  )
}

export default Home
