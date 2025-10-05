"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "./CookieConsent.module.css";

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

// Cookie utility functions
const setCookie = (name: string, value: string, days: number = 365): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cookieConsentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has already made a choice (check both cookies and localStorage for backward compatibility)
    const cookieConsent = getCookie("cookieConsent") || localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
      // Show cookie consent after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  // Run animation after element is rendered
  useEffect(() => {
    if (isVisible && cookieConsentRef.current) {
      animateIn();
    }
  }, [isVisible]);

  const animateIn = () => {
    setIsAnimating(true);
    if (cookieConsentRef.current) {
      gsap.fromTo(
        cookieConsentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false),
        }
      );
    }
  };

  const animateOut = () => {
    setIsAnimating(true);
    if (cookieConsentRef.current) {
      gsap.to(cookieConsentRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          setIsVisible(false);
          setIsAnimating(false);
        },
      });
    }
  };

  const handleAccept = () => {
    // Save to both cookies and localStorage for backward compatibility
    setCookie("cookieConsent", "accepted");
    setCookie("cookieConsentDate", new Date().toISOString());
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());

    // Enable analytics
    if (typeof window !== "undefined") {
      // Enable Google Analytics
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });

      // Enable Vercel Analytics (if available)
      // window.enableVercelAnalytics?.();
    }

    animateOut();
    onAccept();
  };

  const handleDecline = () => {
    // Save to both cookies and localStorage for backward compatibility
    setCookie("cookieConsent", "declined");
    setCookie("cookieConsentDate", new Date().toISOString());
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());

    // Disable analytics
    if (typeof window !== "undefined") {
      // Disable Google Analytics
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });

      // Disable Vercel Analytics (if available)
      // window.disableVercelAnalytics?.();
    }

    animateOut();
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div ref={cookieConsentRef} className={styles.cookieConsent}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>COOKIE CONSENT</h3>
          <p>
            WE USE COOKIES TO ENHANCE YOUR EXPERIENCE. BY CONTINUING TO USE THIS SITE, 
            YOU CONSENT TO OUR USE OF COOKIES. VIEW OUR{" "}
            <a href="/privacy-policy" className={styles.link}>
              PRIVACY POLICY
            </a>
            {" "}FOR MORE INFORMATION.
          </p>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.declineButton}
            onClick={handleDecline}
            disabled={isAnimating}
          >
            DECLINE
          </button>
          <button
            className={styles.acceptButton}
            onClick={handleAccept}
            disabled={isAnimating}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
