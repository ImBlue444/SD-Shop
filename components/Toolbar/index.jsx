import React from "react";
import styles from "../Toolbar/styles.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Toolbar() {
  return (
    <div className={styles.toolBar}>
      <div className={styles.toolDiv}>
        <span>
          <FaUserAlt />
        </span>
        <span>
          <FaHeart />
        </span>
        <span>Trad</span>
        <span>
          <BsFillInfoCircleFill />
        </span>
      </div>
    </div>
  );
}

export default Toolbar;
