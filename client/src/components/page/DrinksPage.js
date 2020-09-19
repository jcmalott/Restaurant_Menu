import React from "react";
import {connect} from "react-redux";
import {fetchMealItems} from "../../actions";
import DisplayItems from "../subcomponents/DisplayItems";

class DrinksPage extends React.Component {
  componentDidMount(){
    this.props.fetchMealItems("drinks");
  }

  render(){
    return(<div><DisplayItems /></div>);
  }
}

export default connect(null, {fetchMealItems})(DrinksPage);
