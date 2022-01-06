import React, { useState } from "react"
import emailjs from "emailjs-com"
import * as yup from "yup"

import Footer from "./Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons"
import { faVoicemail } from "@fortawesome/free-solid-svg-icons"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"

const Result = () => {
  return <p>Your message has been successfully send.</p>
}

const Contact = () => {
  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_664b8y9",
        "template_31fx9wd",
        e.target,
        "user_bR0hYva0yRKfAeaG4BwDb"
      )
      .then(
        (res) => {
          console.log(res)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    showResult(true)
  }

  setTimeout(() => {
    showResult(false)
  }, 5000)

  return (
    <div className="container">
      <section className="upper_wrapper">
        <div className="location">
          <span>
            <FontAwesomeIcon icon={faSearchLocation}></FontAwesomeIcon>
          </span>
          <div className="loc">
            <h1>Location</h1>
            <p>
              A108 Adam Street <br /> New York, NY 535022
            </p>
          </div>
        </div>
        <div className="location">
          <span>
            <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
          </span>
          <div className="loc">
            <h1>Email</h1>
            <p>
              info@example.com <br /> contact@example.com
            </p>
          </div>
        </div>
        <div className="location">
          <span>
            <FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon>
          </span>
          <div className="loc">
            <h1>Call</h1>
            <p>
              +1 5589 55488 51 <br /> +1 5589 22475 14
            </p>
          </div>
        </div>
      </section>

      <section className="down__wrapper">
        <form className="contact_form" onSubmit={sendEmail}>
          <div className="input_field">
            <input
              className="contact_input"
              type="text"
              id="fname"
              name="name"
              placeholder="Your Name.."
            />

            <input
              className="contact_input"
              type="email"
              id="email"
              name="user_email"
              placeholder="Your Email.."
            ></input>
          </div>
          <input
            className="contact_input"
            type="text"
            id="subject"
            placeholder="Subject"
          />

          <textarea placeholder="Message" name="message" placeholder="Message">
            {" "}
          </textarea>
          <button type="submit" className="send_btn">
            Send Message
          </button>
          <div className="email_text"> {result ? <Result /> : null}</div>
        </form>
      </section>
    </div>
  )
}

export default Contact
