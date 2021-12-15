import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import {
  faYoutube,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <nav className="Navbar">
      <div className="logo">
        <span className="COM">DISCRETE</span>
        <span>SOL </span>
      </div>
      <div className="combain">
        <ul
          // className="nav__links"
          className={
            showMediaIcons ? "nav__links mobile_menu_link " : "nav__links"
          }
        >
          <li className="active">
            <Link to="/">HOME </Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/OurTeam">OurTeam</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/Portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/Pricing">PRICING</Link>
          </li>
          <li>
            <Link to="/Blog">BLOG</Link>
          </li>
        </ul>
        <div className="underline">
          <span> | </span>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faYoutube}> </FontAwesomeIcon>
          <FontAwesomeIcon icon={faGithub}> </FontAwesomeIcon>
          <FontAwesomeIcon icon={faFacebook}> </FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter}> </FontAwesomeIcon>
        </div>
      </div>
      <svg
        onClick={() => setShowMediaIcons(!showMediaIcons)}
        xmlns="http://www.w3.org/2000/svg"
        class="hum_menu"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  )
}

export default Navbar
