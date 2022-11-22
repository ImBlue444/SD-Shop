import styles from "./styles.module.scss";
import { AiFillCaretRight } from "react-icons/ai";
import { useEffect, useState } from "react";

function Categories(props) {
  const [catIsActive, setCatisActive] = useState(props.isActive);
  useEffect(() => {
    setCatisActive(props.isActive);
  }, [props.isActive]);

  return (
    <div className={catIsActive ? styles.Categories : styles.CategoriesHidden}>
      <ul className={styles.List}>
        <div className={styles.Group}>
          <li
            className={styles.Close}
            onClick={() => props.childToParent(false)}
          >
            X
          </li>
          <li>Novità</li>
          <li>Tendenze</li>
          <li>Pacchetti</li>
          <li>Pupazzi</li>
          <li>
            Baby <AiFillCaretRight />
          </li>
          <li>4 Zampe</li>
          <li>Alfabeto</li>
          <li>
            Feste <AiFillCaretRight />
          </li>
          <li>Sicilia Bedda</li>
          <li>
            Città <AiFillCaretRight />
          </li>
          <li>
            Scuola <AiFillCaretRight />
          </li>
          <li>
            Cucina <AiFillCaretRight />
          </li>
          <li>Carta modelli</li>
          <li>Games</li>
          <li>Meme</li>
          <li>
            Varie <AiFillCaretRight />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Categories;
