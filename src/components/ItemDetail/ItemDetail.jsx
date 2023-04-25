import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { Button } from "@mui/material";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <div className={styles.containerDetalleProducto}>
        <div className={styles.containerImagen}>
          <img src={product.img} alt="imagen.producto" />
        </div>
        <div className={styles.containerDetalle}>
          <h2>{product.title}</h2>
          <h2>{product.description}</h2>
          <h2>${product.price}</h2>
          <Link to="/">
            <Button variant="contained">Regresar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
