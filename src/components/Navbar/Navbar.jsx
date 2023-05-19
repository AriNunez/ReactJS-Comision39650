import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import imgLogo from "../../assets/images/logo-empresa.png";
import { Link, Outlet } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src={imgLogo}
            alt="logo de la empresa"
            className={styles.logoEmpresa}
          />
        </Link>

        <div className={styles.menuNavbar}>
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                <Button variant="contained">{category.title}</Button>
              </Link>
            );
          })}
        </div>

        <div>
          <CartWidget />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
