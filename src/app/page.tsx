"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import styles from "./styles/page.module.css";
import CookieConsent from "../components/CookieConsent";
import CookieSettings from "../components/CookieSettings";
import {
  trackFormSubmission,
  trackNavigation,
  trackEvent,
} from "../utils/analytics";
import { Power } from "lucide-react";
import { useSmoothScroll } from "../components/SmoothScrollContext";
import SEOHead from "../components/SEOHead";

export default function Home() {
  const { scrollTo, lenis } = useSmoothScroll();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fallback scroll listener for when Lenis is not available
  useEffect(() => {
    const handleNativeScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY && scrollY > 50) {
        setIsHeaderVisible(false);
      } else if (scrollY < lastScrollY || scrollY <= 50) {
        setIsHeaderVisible(true);
      }

      // Update parallax offset for native scroll
      setParallaxOffset(scrollY * 0.5);

      setLastScrollY(scrollY);
    };

    // Use native scroll as fallback if Lenis is not available
    if (!lenis) {
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleNativeScroll);
    }
  }, [lenis, lastScrollY]);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+91 ",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const whoWeAreTextRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const whatWeMakeTextRef = useRef<HTMLDivElement>(null);
  const whatWeMakeTitleRef = useRef<HTMLDivElement>(null);
  const openingSoonRef = useRef<HTMLDivElement>(null);
  const openingSoonTitleRef = useRef<HTMLDivElement>(null);
  const productsTextRef = useRef<HTMLDivElement>(null);
  const productsSecondTextRef = useRef<HTMLDivElement>(null);
  const productsThirdTextRef = useRef<HTMLDivElement>(null);
  const productsFourthTextRef = useRef<HTMLDivElement>(null);
  const companyInfoRef = useRef<HTMLDivElement>(null);
  const companyInfoTitleRef = useRef<HTMLDivElement>(null);
  const companyInfoTextRef = useRef<HTMLDivElement>(null);
  const bannerTitleRef = useRef<HTMLHeadingElement>(null);
  const bannerSubtitleRef = useRef<HTMLParagraphElement>(null);
  const openingSoonFinalRef = useRef<HTMLDivElement>(null);
  const openingSoonFinalTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize component
  }, []);

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

      // Parallax effect
      setParallaxOffset(scroll * 0.5);

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

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // WHO ARE WE? animation - slides in from left
    if (whoWeAreRef.current) {
      gsap.fromTo(
        whoWeAreRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whoWeAreRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }

    // OUR MISSION animation - slides in from right
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }

    // WHO ARE WE? text animation - slides in from left
    if (whoWeAreTextRef.current) {
      gsap.fromTo(
        whoWeAreTextRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whoWeAreTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // OUR MISSION text animation - slides in from right
    if (missionTextRef.current) {
      gsap.fromTo(
        missionTextRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // WHAT WE MAKE heading animation - slides in from left
    if (whatWeMakeTitleRef.current) {
      gsap.fromTo(
        whatWeMakeTitleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whatWeMakeTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }

    // WHAT WE MAKE text animation - slides in from left
    if (whatWeMakeTextRef.current) {
      gsap.fromTo(
        whatWeMakeTextRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whatWeMakeTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // WE ARE OPENING SOON animation - grows to smaller size and stops sooner
    if (openingSoonRef.current && openingSoonTitleRef.current) {
      // Title animation - grows to smaller size and stops sooner
      gsap.to(openingSoonTitleRef.current, {
        scale: 2,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: openingSoonRef.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      });
    }

    // OUR PRODUCTS text animation - slides in from left like WHO ARE WE?
    if (productsTextRef.current) {
      gsap.fromTo(
        productsTextRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // OUR PRODUCTS second text animation - slides in from right like OUR MISSION
    if (productsSecondTextRef.current) {
      gsap.fromTo(
        productsSecondTextRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsSecondTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // OUR PRODUCTS third text animation - slides in from left like WHAT WE MAKE
    if (productsThirdTextRef.current) {
      gsap.fromTo(
        productsThirdTextRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsThirdTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // OUR PRODUCTS fourth text animation - slides in from right like OUR MISSION
    if (productsFourthTextRef.current) {
      gsap.fromTo(
        productsFourthTextRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsFourthTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // COMPANY INFORMATION title animation - grows to smaller size and stops sooner
    if (companyInfoRef.current && companyInfoTitleRef.current) {
      // Title animation - grows to smaller size and stops sooner
      gsap.to(companyInfoTitleRef.current, {
        scale: 1.8,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: companyInfoRef.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      });
    }

    // COMPANY INFORMATION text animation - fade in effect
    if (companyInfoTextRef.current) {
      gsap.fromTo(
        companyInfoTextRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: companyInfoTextRef.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    }

    // WE ARE OPENING SOON final title animation - grows to maximum size and stays
    if (openingSoonFinalRef.current && openingSoonFinalTitleRef.current) {
      // Title animation - grows to maximum size and stays there
      gsap.to(openingSoonFinalTitleRef.current, {
        scale: 3.0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: openingSoonFinalRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Banner text SplitText animation
  useEffect(() => {
    if (bannerTitleRef.current && bannerSubtitleRef.current) {
      // Create SplitText animations for both banner elements
      const titleSplit = SplitText.create(bannerTitleRef.current, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          return gsap.from(self.lines, {
            duration: 1.2,
            yPercent: 100,
            opacity: 0,
            stagger: 0.15,
            ease: "expo.out",
          });
        },
      });

      const subtitleSplit = SplitText.create(bannerSubtitleRef.current, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          return gsap.from(self.lines, {
            duration: 1.2,
            yPercent: 100,
            opacity: 0,
            stagger: 0.15,
            ease: "expo.out",
            delay: 0.3, // Slight delay after title
          });
        },
      });

      // Cleanup function
      return () => {
        if (titleSplit) titleSplit.revert();
        if (subtitleSplit) subtitleSplit.revert();
      };
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  // Initialize parallax on page load
  useEffect(() => {
    const updateParallax = () => {
      const scrollY = window.scrollY;
      setParallaxOffset(scrollY * 0.5);
    };

    // Set initial parallax
    updateParallax();

    // Also listen to scroll events directly as backup
    window.addEventListener("scroll", updateParallax, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  const handleCookieAccept = () => {
    // Handle cookie acceptance
  };

  const handleCookieDecline = () => {
    // Handle cookie decline
  };

  const handleCookiePreferencesChange = () => {
    // Handle cookie preferences change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      console.log("Submitting form data:", {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        source: "contact",
        message: formData.message,
      });

      // Track form submission
      trackFormSubmission("contact_form");

      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          source: "contact",
          message: formData.message,
        }),
      });

      console.log("API Response status:", response.status);
      const data = await response.json();
      console.log("API Response data:", data);

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "+91 ",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="OCEANFLO - Premium RO Purified Water Bottles"
        description="OCEANFLO offers premium RO purified water bottles (1L, 500ML, 250ML) and 10L alkaline water jars. Advanced RO technology, fully automatic plant, FSSAI & ISO certified. Contact us at help@oceanflo.in"
        keywords={[
          "RO purified water",
          "packaged drinking water",
          "alkaline water",
          "water bottles",
          "FSSAI certified",
          "ISO certified",
          "Maharashtra",
          "India",
          "water manufacturing",
          "OCEANFLO",
          "OM SAI RAM AQUA PRODUCTS",
        ]}
        image="https://oceanflo.in/company_logo.png"
        url="https://www.oceanflo.in"
        type="website"
        section="Water Manufacturing"
        tags={["RO Water", "Purified Water", "Alkaline Water", "Water Bottles"]}
      />
        <header
          className={`${styles.header} ${
            !isHeaderVisible ? styles.hidden : ""
          }`}
        >
          <div className={styles.headerContent}>
            <div className={styles.logo}>OCEANFLO</div>
            <nav className={styles.navigation}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  trackNavigation("header_home");
                  scrollTo("#home");
                }}
              >
                HOME
              </a>
              <a
                href="#our-products"
                onClick={(e) => {
                  e.preventDefault();
                  trackNavigation("header_our_products");
                  scrollTo("#our-products");
                }}
              >
                OUR PRODUCTS
              </a>
              <a
                href="#company"
                onClick={(e) => {
                  e.preventDefault();
                  trackNavigation("header_company");
                  scrollTo("#company");
                }}
              >
                COMPANY
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  trackNavigation("header_contact");
                  scrollTo("#contact");
                }}
              >
                CONTACT US
              </a>
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
            <a
              href="#home"
              className={styles.mobileNavLink}
              onClick={(e) => {
                e.preventDefault();
                trackNavigation("mobile_home");
                scrollTo("#home");
                setIsMobileMenuOpen(false);
              }}
            >
              HOME
            </a>
            <a
              href="#our-products"
              className={styles.mobileNavLink}
              onClick={(e) => {
                e.preventDefault();
                trackNavigation("mobile_our_products");
                scrollTo("#our-products");
                setIsMobileMenuOpen(false);
              }}
            >
              OUR PRODUCTS
            </a>
            <a
              href="#company"
              className={styles.mobileNavLink}
              onClick={(e) => {
                e.preventDefault();
                trackNavigation("mobile_company");
                scrollTo("#company");
                setIsMobileMenuOpen(false);
              }}
            >
              COMPANY
            </a>
            <a
              href="#contact"
              className={styles.mobileNavLink}
              onClick={(e) => {
                e.preventDefault();
                trackNavigation("mobile_contact");
                scrollTo("#contact");
                setIsMobileMenuOpen(false);
              }}
            >
              CONTACT US
            </a>
          </div>
        </div>

        <section id="home" className={styles.banner}>
          <div
            className={styles.parallaxBackground}
            style={{
              transform: `translateY(${-parallaxOffset * 0.35}px)`,
            }}
          ></div>
          <div className={styles.bannerOverlay}>
            <div
              className={styles.bannerTextContainer}
              style={{
                transform: `translateY(${-parallaxOffset * 0.14}px)`,
              }}
            >
              <h1 ref={bannerTitleRef} className={styles.bannerTitle}>
                OCEANFLO
              </h1>
              <p ref={bannerSubtitleRef} className={styles.bannerSubtitle}>
                HYDRATE TO NEW HEIGHTS WITH OCEANFLO
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: WHO ARE WE? */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2 ref={whoWeAreRef} className={styles.aboutTitle}>
              WHO ARE WE?
            </h2>
            <div ref={whoWeAreTextRef} className={styles.aboutText}>
              <p>
                Oceanflo is a manufacturing company that produces packaged
                drinking water bottles. We&apos;re a new company that just
                started our business, and we sell to dealers at competitive
                prices.
              </p>
              <p>
                Here&apos;s the thing - we might be new, but we&apos;re serious
                about quality and building long-term relationships with our
                dealers. Every bottle we produce meets strict safety standards
                because that&apos;s what your customers deserve.
              </p>
            </div>

            <h2 ref={missionRef} className={styles.missionTitle}>
              OUR MISSION
            </h2>
            <div ref={missionTextRef} className={styles.missionText}>
              <p>
                We want to make clean, safe drinking water accessible to
                everyone through our dealer network. What this really means is
                fair pricing for dealers and reliable quality for consumers.
              </p>
            </div>

            <h2 ref={whatWeMakeTitleRef} className={styles.whatWeMakeTitle}>
              WHAT WE MAKE
            </h2>
            <div ref={whatWeMakeTextRef} className={styles.whatWeMakeText}>
              <p>
                Oceanflo produces packaged drinking water with full FSSAI and
                ISO compliance. We keep our product line focused on what dealers
                and customers actually need.
              </p>
            </div>

            <div
              id="our-products"
              ref={openingSoonRef}
              className={styles.openingSoonSection}
            >
              <h2 ref={openingSoonTitleRef} className={styles.openingSoonTitle}>
                OUR PRODUCTS
              </h2>
              <div ref={productsTextRef} className={styles.productsText}>
                <h3 className={styles.productHeading}>
                  1L MINERAL WATER BOTTLES
                </h3>
                <p>
                  Our 1-liter bottles are perfect for families and general
                  consumption. These contain natural minerals without alkaline
                  enhancement. Great for home use, small offices, and retail
                  sales where customers want larger quantities.
                </p>
              </div>

              <div
                ref={productsSecondTextRef}
                className={styles.productsSecondText}
              >
                <h3 className={styles.productSecondHeading}>
                  250ML MINERAL WATER BOTTLES
                </h3>
                <p>
                  Our compact 250ml bottles are perfect for on-the-go hydration.
                  Ideal for kids, gym-goers, and anyone who prefers smaller
                  portions. These bottles contain natural minerals without
                  alkaline enhancement and are perfect for travel, school
                  lunches, and quick refreshment.
                </p>
              </div>

              <div
                ref={productsThirdTextRef}
                className={styles.productsThirdText}
              >
                <h3 className={styles.productThirdHeading}>
                  500ML MINERAL WATER BOTTLES
                </h3>
                <p>
                  The 500ml size works well for personal use and retail sales.
                  Easy to carry, fits in bags, and appeals to customers who want
                  portion control. These also contain natural minerals without
                  alkaline enhancement.
                </p>
              </div>

              <div
                ref={productsFourthTextRef}
                className={styles.productsFourthText}
              >
                <h3 className={styles.productFourthHeading}>
                  20L ALKALINE WATER JARS
                </h3>
                <p>
                  These large jars are designed for offices, businesses, and
                  homes with water dispensers. Unlike our mineral water bottles,
                  these jars contain alkaline water for customers who
                  specifically want that option. Perfect for workplaces and
                  families with higher water consumption.
                </p>
              </div>
            </div>

            <div
              id="company"
              ref={companyInfoRef}
              className={styles.companyInfoSection}
            >
              <h2 ref={companyInfoTitleRef} className={styles.companyInfoTitle}>
                COMPANY INFORMATION
              </h2>
              <div ref={companyInfoTextRef} className={styles.companyInfoText}>
                <p>
                  OCEANFLO (ओशनफ्लो) is a premium packaged drinking water
                  manufacturing company operated by Om Sai Ram Aqua Products, a
                  proprietorship based in Maharashtra, India. We are committed
                  to delivering the highest quality drinking water products that
                  meet international standards while serving our local
                  communities with excellence.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility produces a range
                  of premium water products including 1L, 500ml & 250ml bottles
                  and 10L alkaline water jars, all manufactured under strict
                  quality control measures and regulatory compliance.
                </p>
              </div>
            </div>

            <div
              ref={openingSoonFinalRef}
              className={styles.openingSoonFinalSection}
            >
              <h2
                ref={openingSoonFinalTitleRef}
                className={styles.openingSoonFinalTitle}
              >
                WE ARE OPENING SOON
              </h2>
            </div>

            <div id="contact" className={styles.contactSection}>
              <div className={styles.contactContent}>
                <div className={styles.contactLeft}>
                  <h2 className={styles.contactTitle}>CONTACT US</h2>
                  <p className={styles.contactDescription}>
                    PLEASE SUBMIT YOUR CONTACT INFORMATION AND ONE OF OUR SALES
                    ASSOCIATES WILL BE IN TOUCH WITH YOU SHORTLY.
                  </p>
                </div>

                <div className={styles.contactRight}>
                  <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                      <label htmlFor="firstName">First name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="lastName">Last name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>

                    <div className={styles.formField}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>

                    {submitStatus !== "idle" && (
                      <div
                        className={`${styles.submitMessage} ${styles[submitStatus]}`}
                      >
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumns}>
              <div className={styles.footerColumn}>
                <h3>MENU</h3>
                <h3>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      trackNavigation("footer_home");
                      scrollTo("#home");
                    }}
                  >
                    HOME
                  </a>
                </h3>
                <h3>
                  <a
                    href="#our-products"
                    onClick={(e) => {
                      e.preventDefault();
                      trackNavigation("footer_our_products");
                      scrollTo("#our-products");
                    }}
                  >
                    OUR PRODUCTS
                  </a>
                </h3>
                <h3>
                  <a
                    href="#company"
                    onClick={(e) => {
                      e.preventDefault();
                      trackNavigation("footer_company");
                      scrollTo("#company");
                    }}
                  >
                    COMPANY
                  </a>
                </h3>
                <h3>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      trackNavigation("footer_contact");
                      scrollTo("#contact");
                    }}
                  >
                    CONTACT US
                  </a>
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

        {/* Cookie Consent */}
        <CookieConsent
          onAccept={handleCookieAccept}
          onDecline={handleCookieDecline}
        />

        {/* Cookie Settings Modal */}
        <CookieSettings
          isOpen={isCookieSettingsOpen}
          onClose={() => setIsCookieSettingsOpen(false)}
          onPreferencesChange={handleCookiePreferencesChange}
        />
    </>
  );
}
