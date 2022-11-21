import styles from "../Toolbar/styles.module.scss";
import { FaUserAlt } from "react-icons/fa/index";
import { FaHeart } from "react-icons/fa/index";
import { BsFillInfoCircleFill } from "react-icons/bs/index";

function Toolbar() {
  return (
    <div className={styles.toolBar}>
      <div className={styles.toolDiv}>
        <span>
          <FaUserAlt />
        </span>
        <span className={styles.Fav}>
          <FaHeart />
        </span>
        <span>Trad</span>
        <span className={styles.Info}>
          <BsFillInfoCircleFill />
        </span>
      </div>
    </div>
  );
}

export default Toolbar;
