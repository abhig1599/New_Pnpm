import React, { useState } from "react";
import styles from "./result.module.css";
import Header from "../../../components/Header";
import GreenButton from '../../../components/confirmButton/GreenButton'
// import img from "../../../images/img.png";
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

function Result() {

  return (
    <div className={styles.mainC}>
      <Header text="Industry" />
      <div className={styles.text}>Type of biomass</div>
      <div className={styles.containerr}>
        <img src="/images/img.png" alt="" className={styles.image1} />
        <div className={styles.box}>
          <div className={styles.text1}>Sandu Farms</div>
          <div className={styles.text2}>Paddy Straw</div>
          <div className={styles.text3}>₹700 / Ton</div>
          <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>ADD</div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.containerr}>
        <img src="/images/img.png" alt="" className={styles.image1} />
        <div className={styles.box}>
          <div className={styles.text1}>Sandu Farms</div>
          <div className={styles.text2}>Paddy Straw</div>
          <div className={styles.text3}>₹700 / Ton</div>
          <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>ADD</div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.containerr} >
        <img src="/images/img.png" alt="" className={styles.image1} />
        <div className={styles.box}>
          <div className={styles.text1}>Sandu Farms</div>
          <div className={styles.text2}>Paddy Straw</div>
          <div className={styles.text3}>₹700 / Ton</div>
          <div className={styles.box2}>
          <div className={styles.text4}>100 TON</div>
          <div className={styles.text4}>10 KM from you </div>
          <div className={styles.text3}>ADD</div>

          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <Link href="">
      <AlertDialog >
              <AlertDialogTrigger>
              <GreenButton text ="SUBMIT REQUEST" />
                </AlertDialogTrigger>
              <AlertDialogContent className="bg-[#DCF8E2]">
                <AlertDialogHeader >
                  <AlertDialogTitle>You Request has been sent Successfully !!</AlertDialogTitle>
                  <AlertDialogDescription className="text-[#868686]">
                  Your listing has been submitted. You will be notified once a mover accepts your request.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex flex-row justify-center items-center">
                  <AlertDialogCancel className="hover:bg-[#DCF8E2] border-none" >Back</AlertDialogCancel>
                  <Link href="/typeLocation">
                  <AlertDialogAction className="bg-[#037B39] hover:bg-[#0b6132]">Keep Browsing</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
      </Link>
    </div>
  );
}

export default Result;
