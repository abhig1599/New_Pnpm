import React from 'react'
import styles from './inputVechileDetails02.module.css'
import Header from '../components/Header/Header'
// import image from '../../../images/image33.png'
// import icon from '../../../images/Vector.png'
import GreenButton from '../components/confirmButton/GreenButton'
// import cart from "../../../images/cart.png";
// import scale from "../../../images/Scale.png";
import Link from 'next/link'

function InputVechileDetails02() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Mover" />
        <div className={styles.text1}>Input your Vehicle Detail</div>
        <img src='/images/image33.png' alt="" className={styles.image1}/>
        <div className={styles.text11}>
        Vehicle number
                </div>
        <div className={styles.input}>
          <img src='/images/Vector.png' alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Ex: PB 00 AB 000"
            className={styles.inputNumber}
          />
        </div>
        <div className={styles.text11}>Vehicle Capacity
        </div>
        <div className={styles.input}>
          <img src="/images/cart.png" alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Enter the number"
            className={styles.inputNumber}
          />
        </div>
        <div className={styles.input}>
          <img src="/images/Scale.png" alt="..." className={styles.image2} />
          <select className={styles.inputNumber} >
          <option value="Kilogram">Enter the unit</option>
          <option value="Kilogram">Kilogram</option>
          <option value="Ton">Ton</option>
          </select>
        </div>
        <Link href="/mover01">
        <GreenButton text="NEXT" />
        </Link>
      </div>
    </div>
  )
}

export default InputVechileDetails02
