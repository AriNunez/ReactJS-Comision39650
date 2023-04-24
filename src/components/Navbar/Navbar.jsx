// import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../assets/images/logo-empresa.png";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src={imgLogo}
        alt="logo de la empresa"
        className={styles.logoEmpresa}
      />
      <ul className={styles.menuNavbar}>
        <a href="." className={styles.enlaces}>
          <li>Todos</li>
        </a>
        <a href="." className={styles.enlaces}>
          <li>Hardware</li>
        </a>
        <a href="." className={styles.enlaces}>
          <li>Periféricos</li>
        </a>
      </ul>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
