import styles from "./styles.module.scss";
import { RiArrowDownSFill } from "react-icons/ri/index";

function SubNav() {
  return (
    <div className={styles.SubNav}>
      <ul className={styles.group}>
        <li>HOME</li>
        <li className={styles.subCat}>
          Categorie <RiArrowDownSFill />
        </li>
        <li>Novità</li>
        <li>Tendenza</li>
        <li>Pacchetti</li>
      </ul>
    </div>
  );
}

export default SubNav;
