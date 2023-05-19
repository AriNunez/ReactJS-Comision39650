import { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import FormCheckout from "./FormCheckout";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const checkoutFunc = (data) => {
    let totalCarrito = getTotalPrice();
    let dataOrder = {
      buyer: data,
      items: cart,
      total: totalCarrito,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));
    cart.map((producto) =>
      updateDoc(doc(db, "products", producto.id), {
        stock: producto.stock - producto.quantity,
      })
    );
    clearCart();
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      confirmEmail: "",
    },
    onSubmit: checkoutFunc,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Debe contener al menos 3 caracteres")
        .max(12, "No debe sobrepasar los 12 caracteres"),
      apellido: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Debe contener al menos 3 caracteres")
        .max(12, "No debe sobrepasar los 12 caracteres"),
      telefono: Yup.number(
        "Este campo unicamente debe contener numeros"
      ).required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Este campo debe ser un Email Valido")
        .required("Este campo es obligatorio"),
      confirmEmail: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf(
          [Yup.ref("email")],
          "Los direcciones de Email ingresadas no coinciden"
        ),
    }),
    validateOnChange: false,
  });

  const showMessageConfirmWhithId = () => {
    Swal.fire({
      title: "Muchas gracias por su compra",
      text: `Su número de orden de compra es ${orderId}`,
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <div>
      {orderId ? (
        showMessageConfirmWhithId()
      ) : (
        <FormCheckout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
