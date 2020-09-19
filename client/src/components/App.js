import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import HomePage from "./page/HomePage";
import OrderPage from "./page/OrderPage";
import CheckoutPage from "./page/CheckoutPage";
import MealsPage from "./page/MealsPage";
import SidesPage from "./page/SidesPage";
import DrinksPage from "./page/DrinksPage";
import DessertsPage from "./page/DessertsPage";
import BasicItemPage from "./page/BasicItemPage";
import CustomizeItemPage from "./page/CustomizeItemPage";
import history from "../history";

const App = () => {
    return(
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/order" exact component={OrderPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
            {/* do the ones below using only one link */}
            <Route path="/order/:menu_category" exact component={MealsPage} />
            {/* <Route path="/sides" exact component={SidesPage} />
            <Route path="/drinks" exact component={DrinksPage} />
            <Route path="/desserts" exact component={DessertsPage} /> */}
            <Route path="/order/:menu_category/menu_item/:id" exact component={BasicItemPage} />
            <Route path="/customize_item" exact component={CustomizeItemPage} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
