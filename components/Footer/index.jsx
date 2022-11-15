import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className={styles.FooterComponent}>
      <footer className={styles.footer}>
        <ul>
          <h2>Contatti</h2>
          <li>{"Telefono: Orari: "}</li>
          <li>Sede Legale</li>
          <li>Email</li>
        </ul>
        <ul>
          <h2>Trasparenza</h2>
          <li>
            <Link href="/">Privacy policy</Link>
          </li>
          <li>
            <Link href="/">Cookie policy</Link>
          </li>
        </ul>
        <ul className={styles.socialList}>
          <li>
            <Link href="/">
              <BsFacebook />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsYoutube />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsLinkedin />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
