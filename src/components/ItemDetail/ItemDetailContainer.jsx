import { useState, useEffect } from "react";
import { products } from "./../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

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

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
