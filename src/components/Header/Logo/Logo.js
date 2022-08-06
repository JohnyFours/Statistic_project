import React from "react";
import logoImg from "../../../assets/logo.png";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.wrapLogo}>
      <img className={styles.logo} src={logoImg} alt="logo.png" />
      <span className={styles.logoText}>STATISTIC</span>
    </div>
  );
}
