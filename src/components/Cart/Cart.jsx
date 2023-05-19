import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({
  cart,
  totalCarrito,
  deleteProductById,
  navigate,
  clearCartWithAlert,
}) => {
  return (
    <div>
      <div className="container-carrito">
        <div className="container-prod-en-carrito">
          {cart.map((item) => {
            return (
              <div key={item.id} className="card-prod-en-carrito">
                <img src={item.img} alt="img-producto" />
                <div className="cart-prod-info">
                  <h2>{item.title}</h2>
                  <h2>${item.price}</h2>
                  <h2>Cantidad: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="info-carrito">
          {cart.length > 0 ? (
            <div className="btn-carrito">
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Terminar compra
              </Button>
              <Button onClick={clearCartWithAlert} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}

          <h1>Total: ${totalCarrito}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
