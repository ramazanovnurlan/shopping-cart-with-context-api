import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import Color from "./Colors";
import "../css/Detail.css";

export class Details extends Component {
  static contextType = ProductContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item.id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const { addCart } = this.context;
    return (
      <>
        {product.map((item) => (
          <div className="details" key={item.id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <Color colors={item.colors}/>
              <p>{item.description}</p>
              <p>{item.content}</p>
              <Link to="/cart" className="cart" onClick={()=>addCart(item.id)}>
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Details;
