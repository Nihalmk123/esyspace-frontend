import React from "react";
import HomeImage from "../../assets/Homepage_img.png";

const HeroSection = () => {
  return (
    <div>
      <section className="hero_section p-3 p-md-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1
                className="text-md-left"
                style={{ padding: "0px 16px" }}
              >
                Coworking Software to streamline operations & enhance retention
              </h1>
              <p
                className="text-md-left"
                style={{ padding: "0px 16px" }}
              >
                Manage resources and operations of your coworking space
                seamlessly. Inspire confidence to get back to the office –
                designed for coworking spaces of all sizes
              </p>
              <button className="btn button mx-3" >Start Free Trail</button>
            </div>
            <div className="col-md-6">
              <img src={HomeImage} alt="Hero Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
