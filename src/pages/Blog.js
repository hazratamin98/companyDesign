import React, { useEffect } from "react"
import Footer from "./Footer"
import blg1 from "../img/blog-1.jpg"
import blg2 from "../img/blog-2.jpg"
import blg3 from "../img/blog-3.jpg"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: "1400" })
  }, [])
  return (
    <div className="p_blog">
      <div className="blog" data-aos="fade-up">
        <img src={blg1} />
        <h1>
          Dolorum optio tempore voluptas dignissimos <br /> cumque fuga qui
          quibusdam quia reiciendis
        </h1>
        <div>
          <div className="blog_span">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              john Doe{" "}
            </span>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              jan 1,2020{" "}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>{" "}
              12 comments
            </span>
          </div>
          <p>
            Similique neque nam consequuntur ad non maxime aliquam quas.
            Quibusdam animi <br /> praesentium. Aliquam et laboriosam eius aut
            nostrum quidem aliquid dicta. Et eveniet <br /> enim. Qui velit est
            ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod{" "}
            <br />
            quos aut ut et sit sunt. Voluptate porro consequatur assumenda
            perferendis dolore.
          </p>
        </div>
        <div className="bttn">
          <button type="submit" className="read_btn">
            Read More
          </button>
        </div>
      </div>

      <div className="blog" data-aos="fade-up">
        <img src={blg2} />
        <h1>Nisi magni odit consequatur autem nulla dolorem</h1>
        <div>
          <div className="blog_span">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              john Doe{" "}
            </span>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              jan 1,2020{" "}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>{" "}
              12 comments
            </span>
          </div>
          <p>
            Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam
            quis illum voluptatum <br />
            et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui
            officiis est in non aliquid <br /> veniam laborum. Id ipsum qui aut.
            Sit aliquam et quia molestias laboriosam. Tempora <br />
            nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis
            et sint quos sed <br /> voluptas. Maxime sed tempore enim omnis non
            alias odio quos distinctio.
          </p>
        </div>
        <div className="bttn">
          <button type="submit" className="read_btn">
            Read More
          </button>
        </div>
      </div>

      <div className="blog" data-aos="fade-up">
        <img src={blg3} />
        <h1>
          Possimus soluta ut id suscipit ea ut. In quo quia et <br /> soluta
          libero sit sint.
        </h1>
        <div>
          <div className="blog_span">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              john Doe{" "}
            </span>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              jan 1,2020{" "}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon_blog"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>{" "}
              12 comments
            </span>
          </div>
          <p>
            Aut iste neque ut illum qui perspiciatis similique recusandae non.
            Fugit autem dolorem <br /> labore omnis et. Eum temporibus fugiat
            voluptate enim tenetur sunt omnis. Doloremque <br /> est saepe
            laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut
            dolores velit.
          </p>
        </div>
        <div className="bttn">
          <button type="submit" className="read_btn">
            Read More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
