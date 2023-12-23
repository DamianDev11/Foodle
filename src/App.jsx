import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

const App = () => {
  const [product, setProduct] = useState([
    {
      url: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pan cake",
      category: "veg",
      seller: "Seller1",
      price: "112",
    },
    {
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nice Food",
      category: "non-veg",
      seller: "Seller2",
      price: "221",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Grilled",
      category: "chinese",
      seller: "Seller3",
      price: "123",
    },
    {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lemon Food",
      category: "italian",
      seller: "Seller4",
      price: "321",
    },
    {
      url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fruit Salad",
      category: "indian",
      seller: "Seller5",
      price: "143",
    },
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pizza",
      category: "american",
      seller: "Seller6",
      price: "543",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (val)=>{
    setShowCart(val)
  }
  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} />
      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductList products={product} addToCart={addToCart} />
      )}
    </div>
  );
};

export default App;
