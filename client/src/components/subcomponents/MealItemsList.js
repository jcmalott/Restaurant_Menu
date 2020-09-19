import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class MealItemsList extends React.Component {
  render(){
    return(
      <div className="ui divided list" style={{margin: "0", paddingBottom: "100px"}}>
        {this.props.selectedItems.map(({id, image, title, price, url}) => {
          const fontSize = (title) ? "" + (500 / title.length) + "px" : 60 + "px";

          return(
            <div className="item" key={id}>
              <Link to={url} className="order-link">
                <div className="menu_img_wrapper">
                  <img className="item_icon" src={image} alt="meal menu item"/>
                </div>
                <div className="menu-link">
                  <div style={{fontSize: {fontSize}, marginLeft: "70px"}}>
                    <p style={{margin: "0"}}>{title}</p>
                    <p className="menu-price-text">{price}</p>
                  </div>
                </div>
              </Link>
              <div className="menu_button_wrapper">
                {(this.props.addItemButton && this.props.addItemButton())}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    selectedItems: Object.values(state.selectedItems)
  };
}

// export default MealItemsList;
export default connect(mapStateToProps)(MealItemsList);
