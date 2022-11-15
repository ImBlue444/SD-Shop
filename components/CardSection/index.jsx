import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
const axios = require("axios");
import { useState, useEffect } from "react";

function CardSection() {
  const URL = "https://fakestoreapi.com/products/";
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then(function (response) {
        // handle success
        setFetchData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className={styles.CardSection}>
      <ul className={styles.Cards}>
        {fetchData.map((e) => (
          <li className={styles.Card} key={e.title + "Listed"}>
            <h2 key={e.title}>{e.category}</h2>
            <Image alt="productImage" src={e.image} width={150} height={150} />
            <p>
              {"€"}
              {e.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardSection;
