import React, { useState } from "react";
import "./App.css"; // Import the SCSS file

const BurningFire = () => {
  const [tf_x, setTf_x] = useState(0.2);
  const [tf_y, setTf_y] = useState(0.5);

  function getBig() {
    setTf_x(0.3);
    setTf_y(0.6);
  }
  function getSmall() {
    setTf_x(0.2);
    setTf_y(0.5);
  }

  const inlineStyle = {
    position: "relative",
    width: "500px",
    height: "500px",
    background: "#f5db8f",
    filter: "blur(20px) contrast(30)",
    border: "250px solid #000",
    borderBottomColor: "transparent",
    borderRadius: "40%",
    boxSizing: "border-box",
    transition: "all 0.75s ease-in-out",
    transform: `scale(${tf_x}, ${tf_y})`,
  };

  return (
    <>
      <button onClick={getBig}>Click me</button>
      <section className="section">
        <div className="inner" onMouseEnter={getBig} onMouseLeave={getSmall}>
          <div className="upper">
            <img className="jiggling" src="/Jiggling.png" />
            <div id="ui" style={inlineStyle}>
              <div class="fire">
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn heat"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
                <div class="burn"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BurningFire;
