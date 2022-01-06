import React from "react"
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Blog from "./pages/Blog"

import Portfolio from "./pages/Portfolio"
import Footer from "./pages/Footer"
import Services from "./pages/Services"
import OurTeam from "./pages/OurTeam"

import Navbar from "./pages/Navbar"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />

        {/* <Route path="/Blog" component={Blog} /> */}

        <Route path="/Contact" component={Contact} />

        <Route path="/Portfolio" component={Portfolio} />

        <Route path="/services" component={Services} />

        <Route path="/OurTeam" component={OurTeam} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
