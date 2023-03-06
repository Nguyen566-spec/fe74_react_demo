import React, { Component } from "react";
import Cart from "./Cart";
import { DataContext } from "./context";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

console.log(React);

export default class Home extends Component {
  data = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    selected: null,
    cart: [],
  };
  setSelected = (p) => {
    this.setState({
      selected: p,
    });
  };
  handleAddToCart = (p) => {
    const cloneCart = [...this.state.cart];
    const existed = cloneCart.find((c) => c.product.id === p.id);
    if (!existed) {
      const cartItem = {
        product: p,
        quantity: 1,
      };
      cloneCart.push(cartItem);
    } else {
      existed.quantity++;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleDeleteCartItem = (id) => {
    const cloneCart = [...this.state.cart];
    const existed = cloneCart.findIndex((c) => c.product.id === id);
    //if (existed) {
    cloneCart.splice(existed, 1);
    //}
    this.setState({
      cart: cloneCart,
    });
  };
  handleRemove = () => {
    this.setState({
      cart: [],
    });
  };
  handleIncreaseQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const existed = cloneCart.find((c) => c.product.id === id);
    if (existed) {
      existed.quantity++;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleDecreaseQuantity = (id) => {
    const cloneCart = [...this.state.cart];
    const existed = cloneCart.find((c) => c.product.id === id);
    const exist = cloneCart.findIndex((c) => c.product.id === id);
    if (existed) {
      existed.quantity--;
    }
    if (existed.quantity === 0) {
      cloneCart.splice(exist, 1);
    }
    this.setState({
      cart: cloneCart,
    });
  };
  totalItem = () =>
    this.state.cart.reduce((total, item) => total + item.quantity, 0);
  render() {
    return (
      <DataContext.Provider
        value={{
          cart: this.state.cart,
        }}
      >
        {/* <Data2Context.Provider value={123}> */}
        <h1 className="display-1">Shopping online</h1>
        <button
          type="button"
          className="btn btn-success m-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Cart ({this.totalItem()})
        </button>
        <ProductList
          data={this.data}
          onAddToCart={this.handleAddToCart}
          setSelected={this.setSelected}
        />
        {this.state.selected && (
          <ProductDetail selected={this.state.selected} />
        )}
        <Cart
          data={this.state.cart}
          onDeleteCartItem={this.handleDeleteCartItem}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onRemove={this.handleRemove}
        />
        {/* </Data2Context.Provider> */}
      </DataContext.Provider>
    );
  }
}
