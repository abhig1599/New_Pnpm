import React from "react";
import styles from "../price/price.module.css";
// import image from "../../../images/rupeedesign.png";
// import icon from "../../../images/rupee.png";
import Header from "../../../components/Header";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function Price() {
  return (
    <div>
      <div className={styles.mainC}>
        <Header text="Farmer" />
        <div className={styles.text2}>Price Quotation</div>
        <div className={styles.text3}>
          Please Enter the available quantity of paddy straw
        </div>
        <img src="https://i.pinimg.com/564x/d6/c6/e6/d6c6e6f83b48bbf83c79fdb28d600040.jpg" alt="..." className={styles.image1} />
        <div className={styles.text1}>
          Enter your desired price{" "}
          <span className={styles.perUnit}>(per unit)</span>
        </div>
        <div className={styles.input}>
          <img src="/images/rupee.png" alt="" className={styles.image2} />
          <input
            type="number"
            placeholder="Enter the Amount"
            className={styles.inputNumber}
          />
        </div>
        <Link href="">
        <AlertDialog >
              <AlertDialogTrigger className={styles.confirm}>CONFIRM</AlertDialogTrigger>
              <AlertDialogContent className="bg-[#DCF8E2]">
                <AlertDialogHeader >
                  <AlertDialogTitle>You Request has been sent Successfully !!</AlertDialogTitle>
                  <AlertDialogDescription className="text-[#868686]">
                  Your listing has been submitted. You will be notified once a mover accepts your request.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex flex-row justify-center items-center">
                  <AlertDialogCancel className="hover:bg-[#DCF8E2] border-none" >Back</AlertDialogCancel>
                  <Link href="/farmer">
                  <AlertDialogAction className="bg-[#037B39] hover:bg-[#0b6132]">Keep Browsing</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </Link>
      </div>
    </div>
  );
}

export default Price;
