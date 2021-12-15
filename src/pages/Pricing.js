import React from "react";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <div className="container_price">
      <section className="all_cards">
        <div class="card_pricing">
          <h1 className="title">Free</h1>
          <p class="price">
            {" "}
            <h4>
              <sup>$</sup> <span className="num"> 0 </span>
              <span className="month">/ month</span>
            </h4>
          </p>
          <p className="do_it">
            Aida dere <br /> Nec feugiat nisl
            <br /> Nulla at volutpat dola
            <br />
            <p className="line_through">
              Pharetra massa <br />
              Massa ultricies mi
            </p>
          </p>
          <h2 className="btn_card">
            <button>Buy Now</button>
          </h2>
        </div>

        <div class="card_pricing">
          <h1 className="title" id="business">
            Business
          </h1>
          <p class="price">
            {" "}
            <h4>
              <sup>$</sup> <span className="num"> 19 </span>{" "}
              <span className="month">/ month</span>
            </h4>
          </p>
          <p className="do_it">
            Aida dere <br /> Nec feugiat nisl
            <br /> Nulla at volutpat dola
            <br />
            Pharetra massa <br />
            <p className="line_through">Massa ultricies mi</p>
          </p>
          <h2 className="btn_card">
            <button>Buy Now</button>
          </h2>
        </div>

        <div class="card_pricing">
          <p className="title">Developer</p>
          <p class="price">
            {" "}
            <h4>
              <sup>$</sup>
              <span className="num"> 20 </span>{" "}
              <span className="month">/ month</span>
            </h4>
          </p>
          <p className="do_it">
            Aida dere <br /> Nec feugiat nisl
            <br /> Nulla at volutpat dola
            <br />
            Pharetra massa <br />
            Massa ultricies mi
          </p>
          <h2 className="btn_card">
            <button>Buy Now</button>
          </h2>
        </div>

        <div class="card_pricing">
          <h1 className="title">Ultimate</h1>
          <p class="price">
            <h4>
              <sup>$</sup>
              <span className="num"> 49 </span>
              <span className="month">/ month</span>
            </h4>
          </p>
          <p className="do_it">
            Aida dere <br /> Nec feugiat nisl
            <br /> Nulla at volutpat dola
            <br />
            Pharetra massa <br />
            Massa ultricies mi
          </p>
          <h2 className="btn_card">
            <button>Buy Now</button>
          </h2>
        </div>
      </section>
      <section className="paragrph">
        <h1 className="heading">FREQUENTLY ASKED QUESTIONS</h1>
        <p>
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
          lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla
          urna porttitor rhoncus dolor purus non.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
