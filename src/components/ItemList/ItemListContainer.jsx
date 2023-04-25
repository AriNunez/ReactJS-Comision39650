import ItemList from "./ItemList";
import { products } from "./../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (producto) => producto.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
