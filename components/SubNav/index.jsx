import React from "react";
import styles from "./styles.module.scss";

function SubNav() {
  return (
    <div className={styles.SubNav}>
      <ul className={styles.group}>
        <li>SubSec1</li>
        <li>SubSec2</li>
        <li>SubSec3</li>
        <li>SubSec4</li>
        <li>SubSec5</li>
      </ul>
    </div>
  );
}

export default SubNav;
