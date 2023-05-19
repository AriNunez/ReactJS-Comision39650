import { Button } from "@mui/material";

const Counter = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div style={{ margin: "10px", display: "flex", gap: "40px" }}>
      <Button variant="contained" color="error" onClick={restar}>
        -
      </Button>
      <h2>{counter}</h2>
      <Button variant="contained" color="success" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
