import { useState, useEffect, useContext } from "react";
// import { products } from "./../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));

    // let productoEncontrado = products.find(
    //   (producto) => producto.id === Number(id)
    // );
    // setProduct(productoEncontrado);
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Producto agregado`,
      showConfirmButton: true,
      timer: 1500,
    });
  };
  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
