import React from "react";
import styles from "./companyDetails.module.css";
import Header from "../../../components/Header";// import image from "../../../images/image4.png";
// import done from "../../../images/done.png";
import GreenButton from "../components/confirmButton/GreenButton";
import Link from "next/link";

function CompanyDetails() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Industry" />
        <div className={styles.text2}>Enter your company details</div>
        <img src="/images/image4.png" alt="..." className={styles.image1} />
        <div className={styles.container}>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}>COMPANY NAME</span>
            <div className={styles.box}>
              <span className={styles.text3}>Birla pvt.lim.</span>
              <img src="/images/done.png" alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}> EMAIL ID</span>
            <div className={styles.box}>
              <span className={styles.text3}>info@birlafarms.com</span>
              <img src="/images/done.png" alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}>COMPANY NAME</span>
            <div className={styles.box}>
              <span className={styles.text3}>Birla pvt.lim.</span>
              <img src="/images/done.png" alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.setOfBoxes}>
            <span className={styles.text}>COMPANY NAME</span>
            <div className={styles.box}>
              <span className={styles.text3}>Birla pvt.lim.</span>
              <img src="/images/done.png" alt="" className={styles.doneimg} />{" "}
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
        <Link href="/enterAddress">
        <GreenButton text='NEXT' />
        </Link>
      </div>
    </div>
  );
}

export default CompanyDetails;
