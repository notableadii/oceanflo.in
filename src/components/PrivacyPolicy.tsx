"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { X, Shield, Eye, Lock, Users, Globe, FileText } from "lucide-react";
import styles from "./PrivacyPolicy.module.css";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const animateIn = useCallback(() => {
    if (modalRef.current && overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(modalRef.current, { y: 50, opacity: 0, scale: 0.95 });

      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
      gsap.to(modalRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    }
  }, []);

  const animateOut = useCallback(() => {
    if (modalRef.current && overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(modalRef.current, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        onComplete: onClose,
      });
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      animateIn();
    } else {
      animateOut();
    }
  }, [isOpen, animateIn, animateOut]);

  if (!isOpen) return null;

  return (
    <div ref={overlayRef} className={styles.overlay} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <Shield className={styles.shieldIcon} size={28} />
            <div>
              <h2>Privacy Policy</h2>
              <p className={styles.lastUpdated}>Last updated: 01-09-2025</p>
            </div>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <p>
              OCEANFLO (ओशनफ्लो) is committed to protecting your privacy. This
              policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </p>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Eye className={styles.sectionIcon} size={20} />
              <h3>1. Information We Collect</h3>
            </div>
            <p>
              OCEANFLO collects various types of information to provide and
              improve our services:
            </p>

            <div className={styles.subsection}>
              <h4>1.1 Personal Information You Provide</h4>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number when you fill out our contact form
                </li>
                <li>
                  <strong>Business Information:</strong> Company name, business
                  type, location when inquiring about dealer partnerships
                </li>
                <li>
                  <strong>Communication Records:</strong> Messages, inquiries,
                  and correspondence with our team
                </li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>1.2 Information Collected Automatically</h4>
              <ul>
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  operating system, device identifiers
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on
                  pages, click patterns, referral sources
                </li>
                <li>
                  <strong>Location Data:</strong> General geographic location
                  based on IP address
                </li>
                <li>
                  <strong>Technical Data:</strong> Screen resolution, language
                  preferences, time zone
                </li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>1.3 Cookies and Tracking Technologies</h4>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Google Analytics and
                  Google Tag Manager
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Vercel Analytics and
                  Speed Insights
                </li>
                <li>
                  <strong>Preference Cookies:</strong> User settings and consent
                  preferences
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Users className={styles.sectionIcon} size={20} />
              <h3>2. How We Use Your Information</h3>
            </div>
            <p>We use the information we collect for the following purposes:</p>

            <div className={styles.subsection}>
              <h4>2.1 Business Operations</h4>
              <ul>
                <li>
                  Respond to inquiries about our packaged drinking water
                  products (1L & 500ml bottles, 20L alkaline water jars)
                </li>
                <li>
                  Provide information about dealer partnerships and distribution
                  opportunities
                </li>
                <li>Process business inquiries and partnership applications</li>
                <li>Maintain customer and dealer relationships</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>2.2 Communication</h4>
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

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Lock className={styles.sectionIcon} size={20} />
              <h3>3. Data Security & Information Sharing</h3>
            </div>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <div className={styles.subsection}>
              <h4>3.1 Information Sharing</h4>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy.
              </p>
            </div>

            <div className={styles.subsection}>
              <h4>3.2 Third-Party Services</h4>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> Tracks website usage and
                  user behavior
                </li>
                <li>
                  <strong>Google Tag Manager:</strong> Manages tracking codes
                  and marketing tags
                </li>
                <li>
                  <strong>Vercel Analytics:</strong> Monitors website
                  performance and user experience
                </li>
                <li>
                  <strong>Slack Integration:</strong> Contact form submissions
                  sent to our internal workspace
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Globe className={styles.sectionIcon} size={20} />
              <h3>4. Your Rights and Choices</h3>
            </div>
            <p>
              Under applicable data protection laws, you have the following
              rights:
            </p>

            <div className={styles.subsection}>
              <h4>4.1 Data Subject Rights</h4>
              <ul>
                <li>
                  <strong>Right to Access:</strong> Request a copy of your
                  personal information
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Request correction of
                  inaccurate information
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  personal information
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests
                </li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>4.2 Cookie and Tracking Controls</h4>
              <ul>
                <li>
                  Manage cookie preferences through our cookie consent banner
                </li>
                <li>
                  Disable analytics cookies while keeping essential cookies
                  active
                </li>
                <li>Clear cookies through your browser settings</li>
                <li>
                  Opt-out of Google Analytics tracking using browser extensions
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <FileText className={styles.sectionIcon} size={20} />
              <h3>5. Legal Compliance and Indian Law</h3>
            </div>
            <p>
              This privacy policy complies with all applicable Indian data
              protection and privacy laws:
            </p>

            <div className={styles.subsection}>
              <h4>5.1 Applicable Laws</h4>
              <ul>
                <li>Information Technology Act, 2000</li>
                <li>
                  Information Technology (Reasonable Security Practices and
                  Procedures) Rules, 2011
                </li>
                <li>Consumer Protection Act, 2019</li>
                <li>FSSAI Regulations for food manufacturing data</li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>5.2 Company Information</h4>
              <ul>
                <li>
                  <strong>Legal Entity:</strong> Om Sai Ram Aqua Products
                  (Proprietorship)
                </li>
                <li>
                  <strong>Brand Name:</strong> OCEANFLO (ओशनफ्लो)
                </li>
                <li>
                  <strong>Address:</strong> Rajura Road, Near Zullulwar Petrol
                  Pump, Bamni, Ballarpur, Maharashtra - 442701, India
                </li>
                <li>
                  <strong>Certification:</strong> FSSAI & ISO certified water
                  manufacturing
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contactSection}>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:help@oceanflo.in">help@oceanflo.in</a>
              </p>
              <p>
                <strong>Response Time:</strong> We will respond to privacy
                inquiries within 30 days
              </p>
              <p>
                <strong>Data Protection Officer:</strong> Contact at{" "}
                <a href="mailto:help@oceanflo.in">help@oceanflo.in</a> with
                &quot;Privacy Inquiry&quot; in subject line
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.closeModalButton} onClick={onClose}>
            Close Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
