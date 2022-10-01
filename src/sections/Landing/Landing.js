import React from "react";
import { Parallax } from "react-parallax";

import placeholder from "../../assets/images/placeholder.jpg";

const Landing = () => {
  return (
    <section id="landing">
      <Parallax bgImage={placeholder} strength={500}>
        <div className="parallax">
          <div>Text</div>
        </div>
      </Parallax>
    </section>
  );
};

export default Landing;
