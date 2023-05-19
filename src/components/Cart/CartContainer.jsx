import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  const navigate = useNavigate();
  let totalCarrito = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Desea vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("El carrito fue vaciado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Acción cancelada", "", "error");
      }
    });
  };
  return (
    <div>
      <Cart
        cart={cart}
        totalCarrito={totalCarrito}
        deleteProductById={deleteProductById}
        navigate={navigate}
        clearCartWithAlert={clearCartWithAlert}
      />
    </div>
  );
};

export default CartContainer;
