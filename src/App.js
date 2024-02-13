// App.js

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Product 1",
          price: 10,
          description: "Description of Product 1",
          details: "Details of Product 1",
          image:
            "https://via.assets.so/shoe.png?id=1&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 2,
          name: "Product 2",
          price: 20,
          description: "Description of Product 2",
          details: "Details of Product 2",
          image:
            "https://via.assets.so/shoe.png?id=2&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 3,
          name: "Product 3",
          price: 30,
          description: "Description of Product 3",
          details: "Details of Product 3",
          image:
            "https://via.assets.so/shoe.png?id=3&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 4,
          name: "Product 4",
          price: 40,
          description: "Description of Product 4",
          details: "Details of Product 4",
          image:
            "https://via.assets.so/shoe.png?id=4&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 5,
          name: "Product 5",
          price: 50,
          description: "Description of Product 5",
          details: "Details of Product 5",
          image:
            "https://via.assets.so/shoe.png?id=5&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 6,
          name: "Product 6",
          price: 60,
          description: "Description of Product 6",
          details: "Details of Product 6",
          image:
            "https://via.assets.so/shoe.png?id=6&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 7,
          name: "Product 7",
          price: 70,
          description: "Description of Product 7",
          details: "Details of Product 7",
          image:
            "https://via.assets.so/shoe.png?id=7&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 8,
          name: "Product 8",
          price: 80,
          description: "Description of Product 8",
          details: "Details of Product 8",
          image:
            "https://via.assets.so/shoe.png?id=8&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 9,
          name: "Product 9",
          price: 90,
          description: "Description of Product 9",
          details: "Details of Product 9",
          image:
            "https://via.assets.so/shoe.png?id=9&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 10,
          name: "Product 10",
          price: 100,
          description: "Description of Product 10",
          details: "Details of Product 10",
          image:
            "https://via.assets.so/shoe.png?id=10&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 11,
          name: "Product 11",
          price: 110,
          description: "Description of Product 11",
          details: "Details of Product 11",
          image:
            "https://via.assets.so/shoe.png?id=11&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 12,
          name: "Product 12",
          price: 120,
          description: "Description of Product 12",
          details: "Details of Product 12",
          image:
            "https://via.assets.so/shoe.png?id=12&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 13,
          name: "Product 13",
          price: 130,
          description: "Description of Product 13",
          details: "Details of Product 13",
          image:
            "https://via.assets.so/shoe.png?id=13&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 14,
          name: "Product 14",
          price: 140,
          description: "Description of Product 14",
          details: "Details of Product 14",
          image:
            "https://via.assets.so/shoe.png?id=14&q=95&w=360&h=360&fit=fill",
        },
        {
          id: 15,
          name: "Product 15",
          price: 150,
          description: "Description of Product 15",
          details: "Details of Product 15",
          image:
            "https://via.assets.so/shoe.png?id=15&q=95&w=360&h=360&fit=fill",
        },
      ],
      selectedProduct: null,
    };
  }

  handleProductClick = (product) => {
    this.setState({ selectedProduct: product });
  };

  handleCloseOverlay = () => {
    this.setState({ selectedProduct: null });
  };

  render() {
    const { products, selectedProduct } = this.state;
    return (
      <div className="App">
        <h1>Products</h1>
        <div className="products">
          {products.map((product) => (
            <div
              key={product.id}
              className="product"
              onClick={() => this.handleProductClick(product)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <div className="overlay" onClick={this.handleCloseOverlay}>
            <div
              className="overlay-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={this.handleCloseOverlay}
              >
                X
              </button>
              <h2>{selectedProduct.name}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <p>Description: {selectedProduct.description}</p>
              <p>Price: ${selectedProduct.price}</p>
              <p>Details: {selectedProduct.details}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
