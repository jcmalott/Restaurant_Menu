import React from "react";
import TopLogo from "../subcomponents/TopLogo";
import Footer from "../subcomponents/Footer";

import topLogo from "../../images/logo.png"
import backgroundFood from "../../images/background_food.png"

const HomePage = () => {
  return(
    <div className="page-container">
      <TopLogo displayImage={topLogo}/>
      <div className="homepage-wrapper">
        <img className="homepage-image" src={backgroundFood} alt="Background Food"></img>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
