"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useSmoothScroll } from "../../components/SmoothScrollContext";
import CookieSettings from "../../components/CookieSettings";
import { trackNavigation, trackEvent } from "../../utils/analytics";
import { Power } from "lucide-react";
import styles from "./privacy-policy.module.css";

export default function PrivacyPolicyPage() {
  const { lenis } = useSmoothScroll();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  // Fallback scroll listener for when Lenis is not available
  useEffect(() => {
    const handleNativeScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 50) {
        setIsHeaderVisible(false);
      } else if (scrollY < lastScrollY || scrollY <= 50) {
        setIsHeaderVisible(true);
      }

      setLastScrollY(scrollY);
    };

    // Use native scroll as fallback if Lenis is not available
    if (!lenis) {
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleNativeScroll);
    }
  }, [lenis, lastScrollY]);

  // Handle scroll events from SmoothScroll component
  const handleSmoothScroll = useCallback(
    (lenis: { scroll: number }) => {
      const scroll = lenis.scroll;

      // Header visibility logic - simplified and more responsive
      if (scroll > lastScrollY && scroll > 50) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else if (scroll < lastScrollY || scroll <= 50) {
        // Scrolling up or at top - show header
        setIsHeaderVisible(true);
      }

      setLastScrollY(scroll);
    },
    [lastScrollY]
  );

  // Connect to Lenis scroll events
  useEffect(() => {
    if (lenis) {
      const unsubscribe = lenis.on("scroll", handleSmoothScroll);
      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }
  }, [lenis, handleSmoothScroll]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCookiePreferencesChange = () => {
    // Handle cookie preferences if needed
  };

  return (
    <>
      <header
        className={`${styles.header} ${!isHeaderVisible ? styles.hidden : ""}`}
      >
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            OCEANFLO
          </Link>
          <nav className={styles.navigation}>
            <Link
              href="/"
              onClick={() => {
                trackNavigation("header_home");
              }}
            >
              HOME
            </Link>
            <Link
              href="/#our-products"
              onClick={() => {
                trackNavigation("header_our_products");
              }}
            >
              OUR PRODUCTS
            </Link>
            <Link
              href="/#company"
              onClick={() => {
                trackNavigation("header_company");
              }}
            >
              COMPANY
            </Link>
            <Link
              href="/#contact"
              onClick={() => {
                trackNavigation("header_contact");
              }}
            >
              CONTACT US
            </Link>
          </nav>
          <div
            className={`${styles.hamburgerMenu} ${
              isMobileMenuOpen ? styles.open : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`${styles.mobileNavOverlay} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.mobileNavContent}>
          <Link
            href="/"
            className={styles.mobileNavLink}
            onClick={() => {
              trackNavigation("mobile_home");
              setIsMobileMenuOpen(false);
            }}
          >
            HOME
          </Link>
          <Link
            href="/#our-products"
            className={styles.mobileNavLink}
            onClick={() => {
              trackNavigation("mobile_our_products");
              setIsMobileMenuOpen(false);
            }}
          >
            OUR PRODUCTS
          </Link>
          <Link
            href="/#company"
            className={styles.mobileNavLink}
            onClick={() => {
              trackNavigation("mobile_company");
              setIsMobileMenuOpen(false);
            }}
          >
            COMPANY
          </Link>
          <Link
            href="/#contact"
            className={styles.mobileNavLink}
            onClick={() => {
              trackNavigation("mobile_contact");
              setIsMobileMenuOpen(false);
            }}
          >
            CONTACT US
          </Link>
        </div>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: 01-09-2025</p>

          <div className={styles.intro}>
            <p>
              OCEANFLO (ओशनफ्लो) is committed to protecting your privacy. This
              policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <div className={styles.sectionContent}>
              <p>
                OCEANFLO collects various types of information to provide and
                improve our services:
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>
                  Personal Information You Provide
                </h3>
                <ul>
                  <li>
                    Contact Information: Name, email address, phone number when
                    you fill out our contact form
                  </li>
                  <li>
                    Business Information: Company name, business type, location
                    when inquiring about dealer partnerships
                  </li>
                  <li>
                    Communication Records: Messages, inquiries, and
                    correspondence with our team
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>
                  Information Collected Automatically
                </h3>
                <ul>
                  <li>
                    Device Information: IP address, browser type, operating
                    system, device identifiers
                  </li>
                  <li>
                    Usage Data: Pages visited, time spent on pages, click
                    patterns, referral sources
                  </li>
                  <li>
                    Location Data: General geographic location based on IP
                    address
                  </li>
                  <li>
                    Technical Data: Screen resolution, language preferences,
                    time zone
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>
                  Cookies And Tracking Technologies
                </h3>
                <ul>
                  <li>
                    Essential Cookies: Required for basic website functionality
                  </li>
                  <li>
                    Analytics Cookies: Google Analytics and Google Tag Manager
                  </li>
                  <li>
                    Performance Cookies: Vercel Analytics and Speed Insights
                  </li>
                  <li>
                    Preference Cookies: User settings and consent preferences
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. How We Use Your Information
            </h2>
            <div className={styles.sectionContent}>
              <p>
                We use the information we collect for the following purposes:
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Business Operations</h3>
                <ul>
                  <li>
                    Respond to inquiries about our packaged drinking water
                    products (1L, 250ml & 500ml bottles,10L & 20L alkaline water
                    jars)
                  </li>
                  <li>
                    Provide information about dealer partnerships and
                    distribution opportunities
                  </li>
                  <li>
                    Process business inquiries and partnership applications
                  </li>
                  <li>Maintain customer and dealer relationships</li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Communication</h3>
                <ul>
                  <li>
                    Send updates about manufacturing operations and product
                    launches
                  </li>
                  <li>Provide customer support and technical assistance</li>
                  <li>
                    Share important business announcements and policy updates
                  </li>
                  <li>Respond to feedback and complaints</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Data Security & Information Sharing
            </h2>
            <div className={styles.sectionContent}>
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Information Sharing</h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy.
                </p>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Third-Party Services</h3>
                <ul>
                  <li>
                    Google Analytics: Tracks website usage and user behavior
                  </li>
                  <li>
                    Google Tag Manager: Manages tracking codes and marketing
                    tags
                  </li>
                  <li>
                    Vercel Analytics: Monitors website performance and user
                    experience
                  </li>
                  <li>
                    Slack Integration: Contact form submissions sent to our
                    internal workspace
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Your Rights And Choices</h2>
            <div className={styles.sectionContent}>
              <p>
                Under applicable data protection laws, you have the following
                rights:
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Access And Control</h3>
                <ul>
                  <li>
                    Right to Access: Request a copy of your personal information
                    (If Any Is Available)
                  </li>
                  <li>
                    Right to Rectification: Correct inaccurate or incomplete
                    data (If Any Is Available)
                  </li>
                  <li>
                    Right to Erasure: Request deletion of your personal
                    information (If Any Is Available)
                  </li>
                  <li>
                    Right to Portability: Receive your data in a structured
                    format (If Any Is Available)
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Cookie Management</h3>
                <p>
                  You can manage your cookie preferences through our cookie
                  settings panel, accessible via the &ldquo;Your Privacy
                  Choices&rdquo; link in our website footer.
                </p>
              </div>
            </div>
          </div>

          <Link href="/" className={styles.backButton}>
            Back To Home
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h3>MENU</h3>
              <h3>
                <Link
                  href="/"
                  onClick={() => {
                    trackNavigation("footer_home");
                  }}
                >
                  HOME
                </Link>
              </h3>
              <h3>
                <Link
                  href="/#our-products"
                  onClick={() => {
                    trackNavigation("footer_our_products");
                  }}
                >
                  OUR PRODUCTS
                </Link>
              </h3>
              <h3>
                <Link
                  href="/#company"
                  onClick={() => {
                    trackNavigation("footer_company");
                  }}
                >
                  COMPANY
                </Link>
              </h3>
              <h3>
                <Link
                  href="/#contact"
                  onClick={() => {
                    trackNavigation("footer_contact");
                  }}
                >
                  CONTACT US
                </Link>
              </h3>
            </div>
            <div className={styles.footerColumn}>
              <h3>CONTACT INFO</h3>
              <p>RAJURA ROAD, NEAR ZULLULWAR PETROL PUMP</p>
              <p>BAMNI, BALLARPUR, MAHARASHTRA, 442701</p>
              <p>
                <a
                  href="mailto:help@oceanflo.in"
                  onClick={() => trackEvent("click", "contact", "email")}
                >
                  HELP@OCEANFLO.IN
                </a>
              </p>
              <p>
                <a
                  href="tel:+919604483952"
                  onClick={() => trackEvent("click", "contact", "phone")}
                >
                  +91 9604483952
                </a>
              </p>
            </div>
            <div className={styles.footerColumn}>
              <h3>SOCIALS</h3>
              <h3>
                <a
                  href="https://www.x.com/oceanflowater"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.instagram.com/oceanflowater"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </a>
              </h3>
              <h3>
                <a
                  href="https://www.linkedin.com/company/oceanflo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </a>
              </h3>
            </div>
            <div className={styles.footerColumn}>
              <h3>LEGALS</h3>
              <h3>
                <Link
                  href="/privacy-policy"
                  className={styles.footerLinkButton}
                >
                  PRIVACY POLICY
                </Link>
              </h3>
              <h3>
                <Link
                  href="/terms-and-conditions"
                  className={styles.footerLinkButton}
                >
                  TERMS AND CONDITIONS
                </Link>
              </h3>
              <h3 className={styles.privacyChoicesContainer}>
                <button
                  onClick={() => setIsCookieSettingsOpen(true)}
                  className={styles.privacyChoicesButton}
                >
                  YOUR PRIVACY CHOICES
                  <Power className={styles.powerIcon} size={16} />
                </button>
              </h3>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>© 2025-26 OM SAI RAM AQUA PRODUCTS. OCEANFLO™</p>
          </div>
        </div>
      </footer>

      {/* Cookie Settings Modal */}
      <CookieSettings
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
        onPreferencesChange={handleCookiePreferencesChange}
      />
    </>
  );
}
