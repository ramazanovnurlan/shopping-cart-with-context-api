import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import Header from "./components/Header";
import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      // CONTEXT API - dan məlumatları component'lərə ötürürük(children component'lərə ötürürük)
      <ProductProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </ProductProvider>
    );
  }
}

export default App;
