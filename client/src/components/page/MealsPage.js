import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchMealItems} from "../../actions";
import DisplayItems from "../subcomponents/DisplayItems";

import shoppingCart from "../../images/checkout.png";

class MealPage extends React.Component {
  componentDidMount(){
    console.log("Mount Meals Props: ", this.props);
    this.props.fetchMealItems(this.props.match.params.menu_category);
  }

  render(){
    return(<div> <DisplayItems addItemButton={addItemButton}/> </div>);
  }
}

const addItemButton = () => {
  return(
    <div>
      <Link to="/menu_item">
        <button className="menu-items-button ui button">
          <img className="menu-add-cart" src={shoppingCart} alt="shopping cart"></img>
          <p>Add To Order</p>
        </button>
      </Link>
    </div>
   );
}

const mapStateToProps = (state, ownProps) => {
  console.log("Meals Props: ", ownProps);
  console.log("Meals State: ", state);
  return{
    selectedItems: Object.values(state.selectedItems)
  };
}

export default connect(mapStateToProps, {fetchMealItems})(MealPage);
