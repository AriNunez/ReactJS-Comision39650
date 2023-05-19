import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  let cartLocal = JSON.parse(localStorage.getItem("cart"));
  let existInLocalStorage = cartLocal || [];

  const [cart, setCart] = useState(existInLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (producto) => {
    if (isInCart(producto.id)) {
      let carritoNuevo = cart.map((elemento) => {
        if (producto.id === elemento.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(carritoNuevo);
    } else {
      setCart([...cart, producto]);
    }
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    const productosFiltrados = cart.filter((elemento) => id !== elemento.id);
    setCart(productosFiltrados);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let producto = cart.find((elemento) => elemento.id === id);
    return producto?.quantity;
  };
  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
