import React from 'react'
import styles from './loginAs.module.css'
import Link from 'next/link'
// import farmer from "../../../images/farmer.png";
// import mover from "/images/mover.png";
// import industry from "../../../images/industry.png";


function LoginAs() {
  return (
    <div>
      <div className={styles.mainC}>
      <div className={styles.text1}>Login As</div>
      <div className={styles.text2}>Choose any one of the following</div>
      <div className={styles.container}>
        <Link href="/farmer">
        <img src="/images/farmer.png" alt="" className={styles.imgg} />
        <div className={styles.text3}>Farmer</div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link href="/mover01">
        <img src="/images/mover.png" alt="" className={styles.imgg} />
        <div className={styles.text3}>Mover</div>
        </Link>
      </div>
      <div className={styles.container}>
        <Link href="/companyDetails">
        <img src="/images/industry.png" alt="" className={styles.imgg} />
        <div className={styles.text3}>Industry</div>
        </Link>
      </div>

      </div>
    </div>
  )
}

export default LoginAs