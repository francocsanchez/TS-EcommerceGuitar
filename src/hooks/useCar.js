import { useState, useEffect, useMemo } from "react";

import { db } from "../data/db";
export const useCar = () => {
  const initialCart = () => {
    let localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(initialCart);
  const [products] = useState(db);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const itemExists = cart.findIndex((item) => item.id === product.id);

    if (itemExists >= 0) {
      const updateCart = [...cart];
      updateCart[itemExists].quantity++;
      setCart(updateCart);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  function handleRemoveProductFromCart(id) {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  }

  function handleIncreaseQuantity(id) {
    const updateCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    setCart(updateCart);
  }

  function handleDecreaseQuantity(id) {
    const updateCart = cart.map((product) => {
      if (product.id === id && product.quantity >= 2) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    setCart(updateCart);
  }

  function cleanCart() {
    setCart([]);
  }

  const isEmptyCar = useMemo(() => cart.length === 0, [cart]);
  const carTotal = useMemo(
    () =>
      cart.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      ),
    [cart]
  );

  return {
    products,
    cart,
    addToCart,
    handleRemoveProductFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    cleanCart,
    isEmptyCar,
    carTotal,
  };
};
