import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (producto) => {
    const existing = cartItems.find((item) => item.id === producto.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...producto, cantidad: 1 }]);
    }
  };

  const itemCount = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

  const total = cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, itemCount, total }}>
      {children}
    </CartContext.Provider>
  );
}
