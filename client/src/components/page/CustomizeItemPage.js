import React from "react";
import MealItemsList from "../subcomponents/MealItemsList";
import Footer from "../subcomponents/Footer"

import mealImage from "../../images/burger_fries.png";

const CustomizeItemPage = () => {
  return(
    <div className="page-container menu-item-container">
      <div className="menu-item-top-container">
        <img src={mealImage} alt="Meal"></img>
      </div>
      <MealItemsList displayInfo={displayInfo} isButton={true}/>
      <Footer />
    </div>
  );
}

const displayInfo = [
  {
    title: "Cheese",
    image: mealImage
  },
  {
    title: "Pickles",
    image: mealImage
  },
  {
    title: "Ketchup",
    image: mealImage
  },
  {
    title: "Mustard",
    image: mealImage
  },
  {
    title: "Onions",
    image: mealImage
  }
];

export default CustomizeItemPage;
