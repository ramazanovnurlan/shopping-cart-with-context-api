import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./section/Products";
import Details from "./section/Details";
import Cart from "./section/Cart";
import Payment from "./section/Payment";

export class Section extends Component {
  render() {
    return (
      <section>
        <Switch>
          {/* Route path da yazdığımız səyfəyə yönləndirərək, component'də yazdığımız məlumatları gətirir */}
          <Route path="/" component={Products} exact />
          <Route path="/product" component={Products} exact />
          <Route path="/product/:id" component={Details} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/payment" component={Payment} exact />
        </Switch>
      </section>
    );
  }
}

export default Section;
