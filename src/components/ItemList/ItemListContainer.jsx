import ItemList from "./ItemList";
import { products } from "./../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");
    if (categoryName) {
      const itemCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((error) => console.log(error));
    // const productosFiltrados = products.filter(
    //   (producto) => producto.category === categoryName
    // );
    // const tarea = new Promise((resolve, reject) => {
    //   resolve(categoryName ? productosFiltrados : products);
    // });

    // tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
