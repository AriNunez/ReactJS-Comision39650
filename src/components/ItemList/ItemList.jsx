import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div>
      {
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            minHeight: "90vh",
            padding: "40px",
            gap: "20px",
          }}
        >
          {items.map((item) => {
            return <ItemCard item={item} key={item.id} />;
          })}
        </div>
      }
    </div>
  );
};

export default ItemList;
