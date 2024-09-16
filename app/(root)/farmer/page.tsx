import React from 'react'
import styles from './farmer.module.css'
// import pump from '../../../images/pump.png'
// import requestpicker from '../../../images/requestPicker.png'
import Header from '../../../components/Header'
import Link from 'next/link'


function Farmerr() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Farmer" />
        <div className={styles.conatiner}>
          <Link href="/turnOnOff">
            <img src="/images/pump.png" alt="..."  />
            <button className={styles.btns}>WATER PUMP CONTROL</button>
          </Link>
        </div>

        <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.or}>OR</div>
            <div className={styles.line}></div>

        </div>
        <div className={styles.conatiner}>
          <Link href="/enterAddressFarmer">
            <img src="/images/requestPicker.png" alt="..."  />
            <button className={styles.btns}>REQUEST PICKUP</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Farmerr
