import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMealItem} from "../../actions";
import Footer from "../subcomponents/Footer";

class BasicItemPage extends React.Component {

  componentDidMount(){
    console.log("Mount Item Props: ", this.props);
    this.props.fetchMealItem(this.props.match.params.menu_category, this.props.match.params.id);
  }

  render(){
    const selectedItem = this.props.selectedItem;

    if(!selectedItem){
      return <div>Loading...</div>;
    }

    return(
        <div className="page-container">
          <div className="menu-item-top-container">
            <img src={selectedItem.image} alt="Meal"></img>
          </div>
          <div className="menu-item-middle-container">
            <div className="menu-item-heading">
              <span className="menu-item-title">{selectedItem.title}</span>
              <span className="menu-item-price">{selectedItem.price}</span>
            </div>
            <div className="menu-item-content">
              <p>{selectedItem.description}</p>
            </div>
          </div>
          <div className="menu-item-bottom-container">
            <Link to="/customize_item" className="customize-link">
              <button className="menu-item-button menu-item-button-customize">Customize</button>
            </Link>
            <button className="menu-item-button menu-item-button-add">+ ADD</button>
          </div>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Item Props: ", ownProps);
  console.log("Item State: ", state.selectedItems);
  return{selectedItem: state.selectedItems[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchMealItem})(BasicItemPage);
