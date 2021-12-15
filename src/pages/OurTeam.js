import React, { useEffect } from "react"
import P_ONE from "../img/team/team-1.jpg"
import P_TWO from "../img/team/team-2.jpg"
import P_THREE from "../img/team/team-3.jpg"
import P_FOUR from "../img/team/team-4.jpg"

import Footer from "./Footer"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: "1800" })
  }, [])
  return (
    <section data-aos="fade-up" className="ourteam">
      <div className="heaading_team">
        <h1 className="team_title">OUR TEAM</h1>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos{" "}
          <br />
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <section className="Teams_card">
        <div className="card_1 " data-aos="fade-down">
          <img src={P_ONE} alt="p-one" />
          <div className="card_container">
            <h1> Walter White</h1>
            <p>Chief Executive Officer</p>
          </div>
        </div>

        <div className="card_1" data-aos="fade-right">
          <img src={P_TWO} alt="p-one" />
          <div className="card_container">
            <h1> Sarah Jhonson</h1>
            <p>Product Manager</p>
          </div>
        </div>

        <div className="card_1" data-aos="fade-left">
          <img src={P_THREE} alt="p-one" />
          <div className="card_container">
            <h1> William Anderson</h1>
            <p>CTO</p>
          </div>
        </div>

        <div className="card_1" data-aos="fade-up">
          <img src={P_FOUR} alt="p-one" />
          <div className="card_container">
            <h1>Amanda Jepson</h1>
            <p>Accountant</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default OurTeam
