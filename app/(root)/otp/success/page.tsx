import React from "react";
import styles from "./success.module.css";
import Link from "next/link";

// import image from "../../../images/loginSuccesssfulyy.png";
// import done from "../../../images/done.png";


function Success() {
  return (
    <div>
      <div className={styles.mainC}>
        <div className={styles.login}>Login Successfully</div>
        <img src="/images/loginSuccesssfulyy.png" alt="" className={styles.imgg} />
        <div className={styles.biodata}>
          <div className={styles.fullName}>FULL NAME</div>
          <div className={styles.container}>
            
            <div className={styles.name}>Harshdeep Singh</div>
            <img src="/images/done.png" alt="" className={styles.doneimg}/>
          </div>
          <div className={styles.line}></div>
        </div>
        <Link href="/loginAs">
        <button className={styles.confirm}>CONFIRM</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
