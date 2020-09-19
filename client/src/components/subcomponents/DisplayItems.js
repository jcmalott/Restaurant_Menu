import React from "react";
import TopLogo from "../subcomponents/TopLogo";
import Footer from "../subcomponents/Footer";
import SearchBar from "../subcomponents/SearchBar";
import MealItemsList from "../subcomponents/MealItemsList";

import topLogo from "../../images/background_food.png";

const DisplayItems = ({addItemButton}) => {
  return(
    <div className="page-container">
      <TopLogo displayImage={topLogo}/>
      <SearchBar />
      <MealItemsList addItemButton={addItemButton}/>
      <Footer />
    </div>
  );
}

export default DisplayItems;
