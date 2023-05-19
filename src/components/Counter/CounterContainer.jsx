import { useState, useEffect } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    counter < stock
      ? setCounter(counter + 1)
      : Swal.fire("Ha llegado al valor maximo disponible");
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <Counter counter={counter} sumar={sumar} restar={restar} onAdd={onAdd} />
    </div>
  );
};

export default CounterContainer;
