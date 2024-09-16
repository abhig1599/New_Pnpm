"use client";

import React, { useEffect, useState } from "react";
// import { isValidPhoneNumber } from "libphonenumber-js";
// import { useRouter } from "next/navigation";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";
import { auth, db, storage } from "../../fireBase";
import { collection, addDoc } from "firebase/firestore";
import {
  ref,
  StorageReference,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}
const App: React.FC = () => {
  // const router = useRouter();

  const [image, setImage] = useState<File | null>(null);
  const [imgRef, setImgRef] = useState<StorageReference | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setupRecaptcha();
    };
    fetchData();
  }, []);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );
  };

  const onSignInSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        setMessage("OTP has been sent to your phone number.");
      })
      .catch((error) => {
        console.error("SMS not sent", error);
        setMessage("Failed to send OTP. Please try again.");
      });
  };

  const onVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();

    if (confirmationResult) {
      confirmationResult
        .confirm(otp)
        .then(async (result) => {
          // User signed in successfully.
          const user = result.user;
          setMessage("User is verified.");
          console.log("User:", user);
          // router.push("/home");
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.error("OTP verification failed", error);
          setMessage("Invalid OTP. Please try again.");
        });
    }
  };

  return (
    <div>
      <h2>Firebase OTP Authentication</h2>
      {confirmationResult ? (
        <form onSubmit={onVerifyOtp}>
          <div>
            <label>Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      ) : (
        <form onSubmit={onSignInSubmit}>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+911234567890"
              required
            />
          </div>
          <button type="submit">Send OTP</button>
          <div id="recaptcha-container"></div>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;