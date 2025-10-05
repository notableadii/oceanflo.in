"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.css";

export default function NotFound() {
  const router = useRouter();
  const [currentMessage, setCurrentMessage] = useState(0);
  const [currentButtonText, setCurrentButtonText] = useState(0);

  const funnyMessages = [
    "This page has evaporated faster than water in the desert!",
    "Oops! This page went through our filtration system and disappeared!",
    "404 - This page is drier than our competition's water quality!",
    "Looks like this page got filtered out of existence!",
    "This page is more missing than H2O in a drought!",
    "404 - Even our RO system couldn't purify this broken link!",
    "This page has gone down the drain... literally!",
    "Seems like this page needs some serious hydration - it's completely dried up!",
    "404 - This page is as empty as a water bottle after a marathon!",
    "This page dissolved faster than salt in our purified water!",
  ];

  const buttonTexts = [
    "QUENCH YOUR THIRST FOR THE HOMEPAGE!",
    "FLOW BACK TO SAFETY!",
    "DIVE BACK TO OUR HOMEPAGE!",
    "LET'S GET YOU REHYDRATED WITH OUR HOMEPAGE!",
    "SWIM BACK TO THE MAIN PAGE!",
    "TIME TO REFILL - GO HOME!",
    "DON'T STAY THIRSTY - HEAD HOME!",
    "POUR YOURSELF BACK TO THE HOMEPAGE!",
    "REFRESH YOURSELF - GO HOME!",
    "LET'S GET YOU BACK TO CRYSTAL CLEAR NAVIGATION!",
  ];

  useEffect(() => {
    // Generate random indices for message and button text
    setCurrentMessage(Math.floor(Math.random() * funnyMessages.length));
    setCurrentButtonText(Math.floor(Math.random() * buttonTexts.length));
  }, [funnyMessages.length, buttonTexts.length]);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorNumber}>404</div>
        <h1 className={styles.title}>PAGE NOT FOUND</h1>
        <p className={styles.message}>{funnyMessages[currentMessage]}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.homeButton} onClick={handleClick}>
            {buttonTexts[currentButtonText]}
          </button>
        </div>
      </div>
    </div>
  );
}
