import React,{useEffect} from "react"

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import Footer from "./Footer"

import portfolio1 from "../img/portfolio/portfolio-1.jpg"
import portfolio2 from "../img/portfolio/portfolio-2.jpg"
import portfolio3 from "../img/portfolio/portfolio-3.jpg"
import portfolio4 from "../img/portfolio/portfolio-4.jpg"
import portfolio5 from "../img/portfolio/portfolio-5.jpg"
import portfolio6 from "../img/portfolio/portfolio-6.jpg"
import portfolio7 from "../img/portfolio/portfolio-7.jpg"
import portfolio8 from "../img/portfolio/portfolio-8.jpg"
import portfolio9 from "../img/portfolio/portfolio-9.jpg"

const Portfolio = () => {
 useEffect(() => {
   AOS.init({duration:"1800"})
},[])
  return (
    <section  data-aos="fade-up" className="portfolio">
      <h1 className="prtfl__title">Portfolio</h1>
      <div className="images">
        <img className="img1" src={portfolio1} alt="" />
        <img className="img1" src={portfolio2} alt="" />
        <img className="img1" src={portfolio3} alt="" />
        <img className="img4" src={portfolio4} alt="" />
        <img className="img5" src={portfolio5} alt="" />
        <img className="img1" src={portfolio6} alt="" />
        <img className="img1" src={portfolio7} alt="" />
        <img className="img1" src={portfolio8} alt="" />
        <img className="img1" src={portfolio9} alt="" />
      </div>
      {/* <Footer /> */}
    </section>
  )
}

export default Portfolio
