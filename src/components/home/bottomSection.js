import React from "react";
import { NavLink } from "react-router-dom";

const BottomSection = () => {
  return (
    <section className="hero">
      <div className="hero-box-container">
        <NavLink to="/about" className="hero-box">
          <span className="hero-box__circle hero-box__circle--blue"></span>
          <h2 className="hero-box__title">What is DoItNow?</h2>
          <p className="hero-box__body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non omnis
            animi laboriosam eius quod laborum culpa at excepturi veniam labore
            reiciendis, aperiam accusamus nam! Et pariatur sapiente accusantium
            quisquam nihil?
          </p>
        </NavLink>
        <NavLink to="/about/#aboutus" className="hero-box">
          <span className="hero-box__circle hero-box__circle--green"></span>
          <h2 className="hero-box__title">Who are We ?</h2>
          <p className="hero-box__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            optio voluptatibus natus. Quasi eos adipisci non. Minus soluta sed
            natus dolore, esse quasi, necessitatibus at, molestias pariatur
            voluptatum hic voluptates!
          </p>
        </NavLink>
        <NavLink to="/learn" className="hero-box">
          <span className="hero-box__circle hero-box__circle--orange"></span>
          <h2 className="hero-box__title">Start Learning ..</h2>
          <p className="hero-box__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            quaerat fuga beatae repellendus magni reiciendis praesentium itaque
            aspernatur necessitatibus! Iusto qui exercitationem accusamus
            voluptatem ratione possimus odio obcaecati! At, quidem.
          </p>
        </NavLink>
      </div>
    </section>
  );
};

export default BottomSection;
