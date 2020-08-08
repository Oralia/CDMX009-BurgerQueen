import React, { Fragment } from "react";
import styles from "./style.module.css";

const ShowName = ({ userName, image }) => {
  return (
    <Fragment>
      <div>
        <img src={image} alt="logo" className={styles.userLogo} />

        <p>{userName}</p>
      </div>
    </Fragment>
  );
};

export default ShowName;
