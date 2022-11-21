import styles from "./styles.module.scss";
import { RiArrowDownSFill } from "react-icons/ri/index";
import Categories from "../Categories/index";
import { useState } from "react";

function SubNav() {
  const [catHandler, setCatHandler] = useState(false);
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
        <li>Novità</li>
        <li>Tendenza</li>
        <li>Pacchetti</li>
      </ul>
      <Categories isActive={catHandler} />
    </div>
  );
}

export default SubNav;
