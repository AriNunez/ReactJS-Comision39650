import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div className={styles.containerDetalleProducto}>
        <div className={styles.containerImagen}>
          <img src={product.img} alt="imagen-producto" />
        </div>
        <div className={styles.containerDetalle}>
          <h2>{product.title}</h2>
          <h2>{product.description}</h2>
          <h2>${product.price}</h2>
        </div>
      </div>
      {product.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CounterContainer
            stock={product.stock}
            onAdd={onAdd}
            initial={cantidadTotal}
          />
        </div>
      ) : (
        <h2>No hay stock disponible</h2>
      )}
      <div>
        <Link to="/">
          <Button variant="contained">Regresar</Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
