"use client";

import { useState, useEffect } from "react";
import { X, Power, Check, X as XIcon } from "lucide-react";
import styles from "./CookieSettings.module.css";

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onPreferencesChange: (preferences: {
    analytics: boolean;
    marketing: boolean;
    essential: boolean;
  }) => void;
}

export default function CookieSettings({
  isOpen,
  onClose,
  onPreferencesChange,
}: CookieSettingsProps) {
  const [settings, setSettings] = useState({
    essential: true, // Always required
    analytics: false,
  });

  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Load current settings from localStorage
      const savedSettings = localStorage.getItem("cookie-preferences");
      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings);
          setSettings({
            essential: true, // Always true
            analytics: parsed.analytics || false,
          });
        } catch (error) {
          console.error("Error parsing cookie preferences:", error);
        }
      }
    }
  }, [isOpen]);

  const handleSettingChange = (key: keyof typeof settings, value: boolean) => {
    if (key === "essential") return; // Essential cookies cannot be disabled

    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    setHasChanges(true);
  };

  const handleSaveSettings = () => {
    // Save to localStorage
    localStorage.setItem(
      "cookie-preferences",
      JSON.stringify({
        analytics: settings.analytics,
      })
    );

    // Update Google Analytics based on analytics setting
    if (typeof window !== "undefined" && window.gtag) {
      if (settings.analytics) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      } else {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    }

    // Notify parent component
    onPreferencesChange({
      analytics: settings.analytics,
      marketing: false,
      essential: settings.essential,
    });

    setHasChanges(false);

    // Show success message
    alert("Your cookie preferences have been saved successfully!");

    onClose();
  };

  const handleAcceptAll = () => {
    const allSettings = {
      essential: true,
      analytics: true,
    };
    setSettings(allSettings);
    setHasChanges(true);
  };

  const handleRejectAll = () => {
    const minimalSettings = {
      essential: true,
      analytics: false,
    };
    setSettings(minimalSettings);
    setHasChanges(true);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <Power className={styles.powerIcon} size={24} />
            <h2>YOUR PRIVACY CHOICES</h2>
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close cookie settings"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            WE USE COOKIES TO ENHANCE YOUR BROWSING EXPERIENCE, SERVE
            PERSONALIZED CONTENT, AND ANALYZE OUR TRAFFIC. YOU CAN CUSTOMIZE
            YOUR PREFERENCES BELOW.
          </p>

          <div className={styles.preferences}>
            <div className={styles.preferenceItem}>
              <h4>ESSENTIAL COOKIES</h4>
              <p>
                THESE COOKIES ARE NECESSARY FOR THE WEBSITE TO FUNCTION AND
                CANNOT BE SWITCHED OFF.
              </p>
              <div className={styles.preferenceInfo}>
                <div>
                  <span className={styles.preferenceName}>
                    ESSENTIAL COOKIES
                  </span>
                  <span className={styles.preferenceDescription}>
                    REQUIRED FOR BASIC WEBSITE FUNCTIONALITY, SECURITY, AND
                    NAVIGATION
                  </span>
                </div>
                <div className={`${styles.toggle} ${styles.disabled}`}>
                  <Check size={16} />
                </div>
              </div>
            </div>

            <div className={styles.preferenceItem}>
              <h4>ANALYTICS COOKIES</h4>
              <p>
                THESE COOKIES HELP US UNDERSTAND HOW VISITORS INTERACT WITH OUR
                WEBSITE.
              </p>
              <div className={styles.preferenceInfo}>
                <div>
                  <span className={styles.preferenceName}>
                    GOOGLE ANALYTICS
                  </span>
                  <span className={styles.preferenceDescription}>
                    COLLECTS ANONYMOUS USAGE DATA TO IMPROVE WEBSITE PERFORMANCE
                  </span>
                </div>
                <button
                  className={`${styles.toggle} ${
                    settings.analytics ? styles.active : ""
                  }`}
                  onClick={() =>
                    handleSettingChange("analytics", !settings.analytics)
                  }
                  aria-label={`${
                    settings.analytics ? "Disable" : "Enable"
                  } analytics cookies`}
                >
                  {settings.analytics ? (
                    <Check size={16} />
                  ) : (
                    <XIcon size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.actionButtons}>
            <button
              className={`${styles.saveButton} ${styles.secondary}`}
              onClick={handleRejectAll}
            >
              REJECT ALL
            </button>
            <button
              className={`${styles.saveButton} ${styles.secondary}`}
              onClick={handleAcceptAll}
            >
              ACCEPT ALL
            </button>
            <button
              className={`${styles.saveButton} ${
                hasChanges ? styles.hasChanges : ""
              }`}
              onClick={handleSaveSettings}
              disabled={!hasChanges}
            >
              SAVE PREFERENCES
            </button>
          </div>
          <p className={styles.footerNote}>
            YOU CAN CHANGE THESE SETTINGS AT ANY TIME BY CLICKING YOUR PRIVACY
            CHOICES IN THE FOOTER.
          </p>
        </div>
      </div>
    </div>
  );
}
