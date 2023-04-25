// import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../assets/images/logo-empresa.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Link to="/">
        <img
          src={imgLogo}
          alt="logo de la empresa"
          className={styles.logoEmpresa}
        />
      </Link>

      <div className={styles.menuNavbar}>
        <Link to="/">
          <Button variant="contained">TODOS</Button>
        </Link>
        <Link to="/category/hardware">
          <Button variant="contained">HARDWARE</Button>
        </Link>
        <Link to="/category/perifericos">
          <Button variant="contained">PERIFERICOS</Button>
        </Link>
      </div>
      {/* <ul className={styles.menuNavbar}>
        <a href="." className={styles.enlaces}>
          <li>Todos</li>
        </a>
        <a href="." className={styles.enlaces}>
          <li>Hardware</li>
        </a>
        <a href="." className={styles.enlaces}>
          <li>Periféricos</li>
        </a>
      </ul> */}
      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
