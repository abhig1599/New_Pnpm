import React from "react";
import styles from "./typeLocation.module.css";
// import loction from "../../../images/location2.png";
// import close from "../../../images/close.png";
// import marker from "../../../images/marker.png";
import Header from "../../../components/Header";
function TypeLocation() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="" />
        <div className={styles.text2}>Enter your Address</div>
        <div className={styles.text3}>
        Please enter your location or allow access to your location
        </div>
        <div className={styles.enterI}>

        <div className={styles.input2}>
          <img src="/images/marker.png" alt="" className={styles.image2} />
          <input className={styles.text6} placeholder="Enter a new address" />
        </div>
        <img src="/images/close.png" alt="" />
        </div>
        <div> 
        <div className={styles.input}>
          <img src="/images/location2.png" alt="" className={styles.image2} />
          <div className={styles.container}>
            <div className={styles.text}>Sukhbir Agro Energy Limited</div>
            <div className={styles.address}>Arazi Katoria, Punjab 142052</div>
          </div>
        </div>
        <div className={styles.line}></div>
        </div>
        <div> 
        <div className={styles.input}>
          <img src="/images/location2.png" alt="" className={styles.image2} />
          <div className={styles.container}>
            <div className={styles.text}>Sukhbir Agro Energy Limited</div>
            <div className={styles.address}>Arazi Katoria, Punjab 142052</div>
          </div>
        </div>
        <div className={styles.line}></div>
        </div>
        <div> 
        <div className={styles.input}>
          <img src="/images/location2.png" alt="" className={styles.image2} />
          <div className={styles.container}>
            <div className={styles.text}>Sukhbir Agro Energy Limited</div>
            <div className={styles.address}>Arazi Katoria, Punjab 142052</div>
          </div>
        </div>
        <div className={styles.line}></div>
        </div>
        <div> 
        <div className={styles.input}>
          <img src="/images/location2.png" alt="" className={styles.image2} />
          <div className={styles.container}>
            <div className={styles.text}>Sukhbir Agro Energy Limited</div>
            <div className={styles.address}>Arazi Katoria, Punjab 142052</div>
          </div>
        </div>
        <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}

export default TypeLocation
