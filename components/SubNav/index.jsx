import styles from "./styles.module.scss";
import { RiArrowDownSFill } from "react-icons/ri/index";
import Categories from "../Categories/index";
import { useState } from "react";

function SubNav() {
  const [catHandler, setCatHandler] = useState(false);
  const [childData, setChildData] = useState("");

  const childToParent = (catIsActive) => {
    setCatHandler(catIsActive);
  };
  return (
    <div className={styles.SubNav}>
      <ul className={styles.group}>
        <li>HOME</li>
        <li
          onClick={() => setCatHandler(!catHandler)}
          className={styles.categories}
        >
          Categorie <RiArrowDownSFill />
        </li>
        <li>Free</li>
        <li>Tutorial</li>
        <li>Contatti</li>
      </ul>
      <Categories isActive={catHandler} childToParent={childToParent} />
    </div>
  );
}

export default SubNav;
