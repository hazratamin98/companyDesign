import React from "react"
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Price from "./pages/Pricing"
import Portfolio from "./pages/Portfolio"
import Footer from "./pages/Footer"
import Services from "./pages/Services"
import OurTeam from "./pages/OurTeam"

import Navbar from "./pages/Navbar"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
         
        <Route path="/Blog">
          <Blog />
        </Route>
      
        <Route path="/Contact">
          <Contact />
        </Route>

        {/* <Route path="/Footer">
          <Footer />
        </Route> */}
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Pricing">
          <Price />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        
        {/* <Route path="/services" render={(props) => (props.location.pathname !== "/Home") && 
  <Footer />}> 
</Route> */}
        <Route path="/OurTeam">
          <OurTeam />
        </Route>
        
      </Switch>
      {/* <Route path="/Footer">
        <Footer />
      </Route> */}
    </Router>
  )
}

export default App
