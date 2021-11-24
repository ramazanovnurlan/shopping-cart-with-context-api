import React, { Component } from "react";

export const ProductContext = React.createContext(); // ProductContext adında CONTEXT API yaradırıq

export class ProductProvider extends Component {
  state = {
    products: [
      {
        id: "1",
        title: "Nike Shoes 01",
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3108f319-4f10-4728-9965-e94e0885f688/free-run-5-mens-road-running-shoes-mL8SDd.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        id: "2",
        title: "Nike Shoes 02",
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8f3cbbc0-91ea-4c7b-81f8-ca94632a1756/revolution-6-next-nature-mens-road-running-shoes-XcXMbX.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        id: "3",
        title: "Nike Shoes 03",
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4aef4c73-4f92-4341-a1c9-9f3414521ac8/air-max-excee-mens-shoes-vl97pm.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        id: "4",
        title: "Nike Shoes 04",
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b7f1729c-1a2c-45cc-a6bd-46402cc0a0bb/waffle-one-mens-shoes-4cW37x.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        id: "5",
        title: "Nike Shoes 05",
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80fead13-fcf6-4e09-a2d4-41ffe209a504/quest-4-mens-road-running-shoes-8k2ngj.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        id: "6",
        title: "Nike Shoes 06",
        src: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2dc210dd-9208-4a92-9b0f-aff9b678f006/speedrep-mens-training-shoes-k4JGjh.png",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <ProductContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductContext;
