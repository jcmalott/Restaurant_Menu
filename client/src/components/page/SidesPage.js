import React from "react";
import {connect} from "react-redux";
import {fetchMealItems} from "../../actions";
import DisplayItems from "../subcomponents/DisplayItems";

// import shoppingCart from "../../images/checkout.png";

class SidesPage extends React.Component {
  componentDidMount() {
    this.props.fetchMealItems("sides");
  }

  render(){
    return(<div><DisplayItems /></div>)
  }
}

export default connect(null, {fetchMealItems})(SidesPage);
