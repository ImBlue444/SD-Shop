import styles from "./styles.module.scss";
import { SlMagnifier } from "react-icons/sl/index";
import { FaShoppingCart } from "react-icons/fa/index";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logoMain}>
        <h1 className={styles.logoSmall}>{"SD"}</h1>
        <h1 className={styles.logoBig}>{"SempreDomenica"}</h1>
      </div>
      <div className={styles.searchSection}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Cerca..."
        ></input>
        <button className={styles.searchButton}>
          <SlMagnifier color="white" />
        </button>
      </div>
      <div className={styles.CartSection}>
        <button className={styles.Cart}>
          <FaShoppingCart color="white" />
        </button>
        <span className={styles.cartInfo}>
          <p>Prodotti: 10</p>
          <p>€: 85.00</p>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
