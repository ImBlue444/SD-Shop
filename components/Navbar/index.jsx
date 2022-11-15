import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logoMain}>
        <h1>{"SempreDomenica"}</h1>
        <div>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Cerca..."
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
