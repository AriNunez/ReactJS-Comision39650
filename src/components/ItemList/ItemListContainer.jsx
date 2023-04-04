import ItemList from "./ItemList";

const ItemListContainer = ({ mensajeSaludo }) => {
  return (
    <div>
      <ItemList mensajeSaludo={mensajeSaludo} />
    </div>
  );
};

export default ItemListContainer;
