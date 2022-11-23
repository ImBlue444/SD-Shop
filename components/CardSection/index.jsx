import styles from "./styles.module.scss";
import Image from "next/image";
import { useState } from "react";

function CardSection({ data }) {
  const [fetchData, setFetchData] = useState(data);

  return (
    <div className={styles.CardSection}>
      <ul className={styles.Cards}>
        {fetchData.map((e) => (
          <li className={styles.Card} key={e.title + "Listed"}>
            <h2 key={e.title}>{e.category}</h2>
            <Image
              priority="true"
              loading="eager"
              alt="productImage"
              src={e.image}
              width={150}
              height={150}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardSection;
