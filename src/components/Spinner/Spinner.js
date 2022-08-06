import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <Loader
        type="ThreeDots"
        color="#2196f3"
        height={180}
        width={180}
        timeout={3000}
      />
    </div>
  );
}
