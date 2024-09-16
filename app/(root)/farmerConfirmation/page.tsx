import React from 'react'
import styles from './farmaerConformation.module.css'
// import image from "../../../images/OrderSuccessfull.png";
import Header from '../../../components/Header';


function FarmerConfomation() {
  return (
    <div>
      <div className={styles.mainC}> 
        <Header text="Farmer" />
        <img src="/images/OrderSuccessfull.png" alt="..." />
      </div>
    </div>
  )
}

export default FarmerConfomation
