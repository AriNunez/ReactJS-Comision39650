import { useState, useEffect } from "react";
import { products } from "./../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productoEncontrado = products.find(
      (producto) => producto.id === Number(id)
    );
    setProduct(productoEncontrado);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
