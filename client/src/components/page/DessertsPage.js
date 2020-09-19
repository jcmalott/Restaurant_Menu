import React from "react";
import {connect} from "react-redux";
import {fetchMealItems} from "../../actions";
import DisplayItems from "../subcomponents/DisplayItems"

class DessertsPage extends React.Component {
  componentDidMount(){
    this.props.fetchMealItems("desserts");
  }

  render(){return(<div><DisplayItems /></div>)};
}

export default connect(null, {fetchMealItems})(DessertsPage);
