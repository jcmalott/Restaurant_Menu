import React from "react";
import {connect} from "react-redux";
import {fetchMealItems} from "../../actions";

import DisplayItems from "../subcomponents/DisplayItems";

class OrderPage extends React.Component {
  componentDidMount(){
    this.props.fetchMealItems("orders");
  }

  render(){
    return(<div> <DisplayItems /> </div>);
  }
}

export default connect(null, {fetchMealItems})(OrderPage);
