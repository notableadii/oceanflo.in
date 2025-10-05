"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useSmoothScroll } from "../../components/SmoothScrollContext";
import CookieSettings from "../../components/CookieSettings";
import { trackNavigation, trackEvent } from "../../utils/analytics";
import { Power } from "lucide-react";
import styles from "./terms-and-conditions.module.css";

export default function TermsAndConditionsPage() {
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
          <h1 className={styles.pageTitle}>Terms And Conditions</h1>
          <p className={styles.lastUpdated}>Last updated: 01-09-2025</p>

          <div className={styles.intro}>
            <p>
              By accessing, browsing, or using the OCEANFLO website
              (oceanflo.in) and any associated services, you acknowledge that
              you have read, understood, and agree to be legally bound by these
              Terms and Conditions.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              1. Acceptance Of Terms And Legal Binding
            </h2>
            <div className={styles.sectionContent}>
              <p>
                These terms constitute a legally binding agreement between you
                and Om Sai Ram Aqua Products (Proprietorship).
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>
                  Important Legal Notice
                </h3>
                <p>
                  Your continued use of our services constitutes acceptance of
                  any modifications to these terms. If you do not agree to these
                  terms, you must immediately discontinue use of this website
                  and services.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. Company Information And Legal Entity
            </h2>
            <div className={styles.sectionContent}>
              <p>
                OCEANFLO operates under the brand name and produces packaged
                drinking water products including 1L, 500ml & 250ml bottles and
                10L alkaline water jars.
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Business Details</h3>
                <ul>
                  <li>
                    Legal Entity: Om Sai Ram Aqua Products (Proprietorship)
                  </li>
                  <li>Brand Name: OCEANFLO (ओशनफ्लो)</li>
                  <li>
                    Address: Rajura Road, Near Zullulwar Petrol Pump, Bamni,
                    Ballarpur, Maharashtra - 442701, India
                  </li>
                  <li>
                    Registration: FSSAI & ISO certified water manufacturing
                    proprietorship
                  </li>
                  <li>Jurisdiction: Maharashtra, India</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Product Quality, Safety, And Regulatory Compliance
            </h2>
            <div className={styles.sectionContent}>
              <p>
                All OCEANFLO products are manufactured in strict compliance with
                regulatory standards:
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Compliance Standards</h3>
                <ul>
                  <li>
                    FSSAI Regulations: Food Safety and Standards Authority of
                    India guidelines
                  </li>
                  <li>
                    ISO Standards: International Organization for
                    Standardization requirements
                  </li>
                  <li>
                    BIS Standards: Bureau of Indian Standards for packaged
                    drinking water
                  </li>
                  <li>
                    Indian Food Safety Laws: Food Safety and Standards Act, 2006
                  </li>
                  <li>
                    Environmental Regulations: State and central environmental
                    protection laws
                  </li>
                </ul>
              </div>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Quality Assurance</h3>
                <p>
                  We maintain rigorous quality control measures, regular
                  testing, and compliance monitoring to ensure product safety
                  and purity. However, users acknowledge that no manufacturing
                  process can guarantee 100% safety in all circumstances.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Business Relationships And Dealer Agreements
            </h2>
            <div className={styles.sectionContent}>
              <p>
                OCEANFLO works exclusively with authorized dealers and
                distributors:
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Business Terms</h3>
                <ul>
                  <li>
                    Dealer Relationships: All business transactions are subject
                    to separate dealer agreement terms and conditions
                  </li>
                  <li>
                    No Direct Consumer Sales: This website is for informational
                    purposes and dealer inquiries only
                  </li>
                  <li>
                    Business Inquiries: All partnership discussions, pricing,
                    and business terms are confidential and subject to separate
                    written agreements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Website Usage And Prohibited Activities
            </h2>
            <div className={styles.sectionContent}>
              <p>
                This website is intended for informational purposes, business
                inquiries, and dealer partnerships only.
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>
                  Prohibited Activities
                </h3>
                <p>Users are strictly prohibited from:</p>
                <ul>
                  <li>
                    Using the site for any unlawful purpose or in violation of
                    Indian laws
                  </li>
                  <li>
                    Attempting to gain unauthorized access to our systems or
                    data
                  </li>
                  <li>Transmitting viruses, malware, or harmful code</li>
                  <li>Interfering with website functionality or security</li>
                  <li>
                    Copying, reproducing, or distributing content without
                    permission
                  </li>
                  <li>Using automated systems to access the website</li>
                  <li>Impersonating OCEANFLO or misrepresenting affiliation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              6. Intellectual Property Rights And Copyright Protection
            </h2>
            <div className={styles.sectionContent}>
              <p>
                All content on this website is the exclusive property of Om Sai
                Ram Aqua Products (Proprietorship).
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>
                  Ownership And Protection
                </h3>
                <ul>
                  <li>
                    Content Ownership: Text, graphics, logos, images,
                    trademarks, trade names, and software are protected by
                    Indian and international copyright, trademark, and
                    intellectual property laws
                  </li>
                  <li>
                    Restricted Use: No content may be reproduced, distributed,
                    modified, or used without express written permission from
                    OCEANFLO
                  </li>
                  <li>
                    Trademark Notice: &ldquo;OCEANFLO,&rdquo;
                    &ldquo;ओशनफ्लो,&rdquo; and related marks are registered or
                    pending trademarks
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              7. Limitation Of Liability And Disclaimers
            </h2>
            <div className={styles.sectionContent}>
              <p>
                OCEANFLO provides this website and information on an &ldquo;as
                is&rdquo; basis without warranties of any kind.
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>
                  Liability Limitations
                </h3>
                <ul>
                  <li>
                    Website Information: Information is provided for general
                    reference and may not be current or accurate
                  </li>
                  <li>
                    Business Decisions: Users assume full responsibility for any
                    business decisions based on website information
                  </li>
                  <li>
                    Technical Issues: We are not liable for technical
                    malfunctions, downtime, or data loss
                  </li>
                  <li>
                    Third-Party Content: Not responsible for content or services
                    provided by third parties
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              8. Governing Law And Dispute Resolution
            </h2>
            <div className={styles.sectionContent}>
              <p>
                These terms are governed by the laws of India and the state of
                Maharashtra.
              </p>

              <div className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>Legal Jurisdiction</h3>
                <ul>
                  <li>
                    Governing Law: Indian laws and Maharashtra state regulations
                  </li>
                  <li>
                    Court Jurisdiction: Courts in Chandrapur, Maharashtra have
                    exclusive jurisdiction
                  </li>
                  <li>
                    Dispute Resolution: All disputes subject to mediation and
                    arbitration in Maharashtra
                  </li>
                  <li>
                    Language: All legal proceedings conducted in English or
                    Hindi
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.legalNotice}>
            <h3>Legal Notice</h3>
            <p>
              This document has been prepared in compliance with Indian laws and
              regulations. For specific legal advice regarding these terms,
              please consult with qualified legal counsel.
            </p>
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
