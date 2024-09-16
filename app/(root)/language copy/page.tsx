import React from "react";
import styles from "./language01.module.css";
// import image from "../../../images/image 1.png";
import Header from "../components/Header/Header";
import Link from "next/link";


function Language01() {
  return (
    <div>
      <div className={styles.container}>
      <Header text="SignIn" />
      <div className={styles.language}>Language</div>
        <img src="../images/image 1.png" alt="" className={styles.icon} />
<form action="submit" className={styles.options}>
<input type="text" placeholder="English" className={styles.optionslist} />
<input type="text" placeholder="English" className={styles.optionslist} />
<input type="text" placeholder="English" className={styles.optionslist} />

</form>
<Link href="/signIn">
<button className={styles.btn}>Next</button>
</Link>
      </div>
    </div>
  );
}

export default Language01;
