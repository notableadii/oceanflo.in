"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import {
  X,
  FileText,
  Shield,
  Building2,
  Scale,
  AlertTriangle,
  Users,
  Lock,
  Globe,
  Mail,
} from "lucide-react";
import styles from "./TermsAndConditions.module.css";

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  isOpen,
  onClose,
}) => {
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
            <FileText className={styles.fileIcon} size={28} />
            <div>
              <h2>Terms and Conditions</h2>
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
              By accessing, browsing, or using the OCEANFLO website
              (oceanflo.in) and any associated services, you acknowledge that
              you have read, understood, and agree to be legally bound by these
              Terms and Conditions.
            </p>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Shield className={styles.sectionIcon} size={20} />
              <h3>1. Acceptance of Terms and Legal Binding</h3>
            </div>
            <p>
              These terms constitute a legally binding agreement between you and
              Om Sai Ram Aqua Products (Proprietorship).
            </p>

            <div className={styles.subsection}>
              <h4>Important Legal Notice</h4>
              <p>
                Your continued use of our services constitutes acceptance of any
                modifications to these terms. If you do not agree to these
                terms, you must immediately discontinue use of this website and
                services.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Building2 className={styles.sectionIcon} size={20} />
              <h3>2. Company Information and Legal Entity</h3>
            </div>
            <p>
              OCEANFLO operates under the brand name and produces packaged
              drinking water products including 1L, 500ml & 250ml bottles and
              10L alkaline water jars.
            </p>

            <div className={styles.subsection}>
              <h4>Business Details</h4>
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
                  <strong>Registration:</strong> FSSAI & ISO certified water
                  manufacturing proprietorship
                </li>
                <li>
                  <strong>Jurisdiction:</strong> Maharashtra, India
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Scale className={styles.sectionIcon} size={20} />
              <h3>3. Product Quality, Safety, and Regulatory Compliance</h3>
            </div>
            <p>
              All OCEANFLO products are manufactured in strict compliance with
              regulatory standards:
            </p>

            <div className={styles.subsection}>
              <h4>Compliance Standards</h4>
              <ul>
                <li>
                  <strong>FSSAI Regulations:</strong> Food Safety and Standards
                  Authority of India guidelines
                </li>
                <li>
                  <strong>ISO Standards:</strong> International Organization for
                  Standardization requirements
                </li>
                <li>
                  <strong>BIS Standards:</strong> Bureau of Indian Standards for
                  packaged drinking water
                </li>
                <li>
                  <strong>Indian Food Safety Laws:</strong> Food Safety and
                  Standards Act, 2006
                </li>
                <li>
                  <strong>Environmental Regulations:</strong> State and central
                  environmental protection laws
                </li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h4>Quality Assurance</h4>
              <p>
                We maintain rigorous quality control measures, regular testing,
                and compliance monitoring to ensure product safety and purity.
                However, users acknowledge that no manufacturing process can
                guarantee 100% safety in all circumstances.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Users className={styles.sectionIcon} size={20} />
              <h3>4. Business Relationships and Dealer Agreements</h3>
            </div>
            <p>
              OCEANFLO works exclusively with authorized dealers and
              distributors:
            </p>

            <div className={styles.subsection}>
              <h4>Business Terms</h4>
              <ul>
                <li>
                  <strong>Dealer Relationships:</strong> All business
                  transactions are subject to separate dealer agreement terms
                  and conditions
                </li>
                <li>
                  <strong>No Direct Consumer Sales:</strong> This website is for
                  informational purposes and dealer inquiries only
                </li>
                <li>
                  <strong>Business Inquiries:</strong> All partnership
                  discussions, pricing, and business terms are confidential and
                  subject to separate written agreements
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <AlertTriangle className={styles.sectionIcon} size={20} />
              <h3>5. Website Usage and Prohibited Activities</h3>
            </div>
            <p>
              This website is intended for informational purposes, business
              inquiries, and dealer partnerships only.
            </p>

            <div className={styles.subsection}>
              <h4>Prohibited Activities</h4>
              <p>Users are strictly prohibited from:</p>
              <ul>
                <li>
                  Using the site for any unlawful purpose or in violation of
                  Indian laws
                </li>
                <li>
                  Attempting to gain unauthorized access to our systems or data
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

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Lock className={styles.sectionIcon} size={20} />
              <h3>6. Intellectual Property Rights and Copyright Protection</h3>
            </div>
            <p>
              All content on this website is the exclusive property of Om Sai
              Ram Aqua Products (Proprietorship).
            </p>

            <div className={styles.subsection}>
              <h4>Ownership and Protection</h4>
              <ul>
                <li>
                  <strong>Content Ownership:</strong> Text, graphics, logos,
                  images, trademarks, trade names, and software are protected by
                  Indian and international copyright, trademark, and
                  intellectual property laws
                </li>
                <li>
                  <strong>Restricted Use:</strong> No content may be reproduced,
                  distributed, modified, or used without express written
                  permission from OCEANFLO
                </li>
                <li>
                  <strong>Trademark Notice:</strong> &ldquo;OCEANFLO,&rdquo;
                  &ldquo;ओशनफ्लो,&rdquo; and related marks are registered or
                  pending trademarks
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Shield className={styles.sectionIcon} size={20} />
              <h3>7. Disclaimers and Limitation of Liability</h3>
            </div>
            <p>
              This website and its content are provided &ldquo;as is&rdquo;
              without warranties of any kind.
            </p>

            <div className={styles.subsection}>
              <h4>Limitations</h4>
              <ul>
                <li>
                  <strong>Website Disclaimer:</strong> OCEANFLO disclaims all
                  warranties, including merchantability, fitness for a
                  particular purpose, and non-infringement
                </li>
                <li>
                  <strong>Limitation of Liability:</strong> To the maximum
                  extent permitted by Indian law, OCEANFLO shall not be liable
                  for any direct, indirect, incidental, special, consequential,
                  or punitive damages
                </li>
                <li>
                  <strong>Force Majeure:</strong> OCEANFLO shall not be liable
                  for any failure or delay in performance due to circumstances
                  beyond our reasonable control
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Globe className={styles.sectionIcon} size={20} />
              <h3>8. Privacy and Data Protection Compliance</h3>
            </div>
            <p>
              Your privacy is important to us and we comply with Indian data
              protection regulations.
            </p>

            <div className={styles.subsection}>
              <h4>Data Protection</h4>
              <ul>
                <li>
                  <strong>Privacy Policy:</strong> Please review our Privacy
                  Policy, which governs the collection, use, and protection of
                  your personal information
                </li>
                <li>
                  <strong>Compliance:</strong> We comply with the Information
                  Technology Act, 2000, and related data protection regulations
                  in India
                </li>
                <li>
                  <strong>Consent:</strong> By using our website, you consent to
                  the collection and use of information as described in our
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Shield className={styles.sectionIcon} size={20} />
              <h3>9. Indemnification and Legal Protection</h3>
            </div>
            <p>
              You agree to indemnify and hold harmless Om Sai Ram Aqua Products
              from any claims arising from your use of the website.
            </p>

            <div className={styles.subsection}>
              <h4>Legal Protection</h4>
              <ul>
                <li>
                  <strong>User Indemnification:</strong> You agree to indemnify,
                  defend, and hold harmless Om Sai Ram Aqua Products from any
                  claims, damages, losses, liabilities, costs, and expenses
                </li>
                <li>
                  <strong>Legal Defense:</strong> Om Sai Ram Aqua Products
                  reserves the right to assume exclusive defense and control of
                  any matter subject to indemnification
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Scale className={styles.sectionIcon} size={20} />
              <h3>10. Dispute Resolution and Legal Jurisdiction</h3>
            </div>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of India.
            </p>

            <div className={styles.subsection}>
              <h4>Jurisdiction and Resolution</h4>
              <ul>
                <li>
                  <strong>Governing Law:</strong> These terms shall be governed
                  by the laws of India, without regard to conflict of law
                  principles
                </li>
                <li>
                  <strong>Jurisdiction:</strong> Any disputes shall be subject
                  to the exclusive jurisdiction of the courts in Maharashtra,
                  India
                </li>
                <li>
                  <strong>Dispute Resolution:</strong> Parties agree to attempt
                  good faith negotiation and mediation before initiating legal
                  proceedings
                </li>
                <li>
                  <strong>Severability:</strong> If any provision is deemed
                  invalid, remaining provisions shall remain in full force and
                  effect
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <FileText className={styles.sectionIcon} size={20} />
              <h3>11. Modifications and Updates</h3>
            </div>
            <p>
              Om Sai Ram Aqua Products reserves the right to modify, update, or
              change these terms at any time without prior notice.
            </p>

            <div className={styles.subsection}>
              <h4>Changes and Notifications</h4>
              <ul>
                <li>
                  <strong>Right to Modify:</strong> Terms may be changed at any
                  time without prior notice
                </li>
                <li>
                  <strong>Effective Date:</strong> Changes will be effective
                  immediately upon posting on the website
                </li>
                <li>
                  <strong>Acceptance:</strong> Your continued use constitutes
                  acceptance of modified terms
                </li>
                <li>
                  <strong>Notification:</strong> Material changes will be
                  prominently displayed on the website
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <Mail className={styles.sectionIcon} size={20} />
              <h3>12. Contact Information and Legal Notices</h3>
            </div>
            <p>
              For business partnerships, dealer inquiries, or general
              information, please contact us.
            </p>

            <div className={styles.subsection}>
              <h4>Contact Details</h4>
              <ul>
                <li>
                  <strong>Business Inquiries:</strong> Contact us at{" "}
                  <a href="mailto:help@oceanflo.in">help@oceanflo.in</a>
                </li>
                <li>
                  <strong>Legal Notices:</strong> All legal notices should be
                  sent to our registered business address with proper
                  documentation
                </li>
                <li>
                  <strong>Response Time:</strong> We will respond to legitimate
                  business inquiries within 5-7 business days
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <FileText className={styles.sectionIcon} size={20} />
              <h3>13. Miscellaneous Legal Provisions</h3>
            </div>
            <p>
              These terms, together with our Privacy Policy, constitute the
              entire agreement between you and OCEANFLO.
            </p>

            <div className={styles.subsection}>
              <h4>Legal Provisions</h4>
              <ul>
                <li>
                  <strong>Entire Agreement:</strong> These terms and Privacy
                  Policy constitute the complete agreement
                </li>
                <li>
                  <strong>Waiver:</strong> No waiver of any term shall be deemed
                  a continuing waiver
                </li>
                <li>
                  <strong>Assignment:</strong> Om Sai Ram Aqua Products may
                  assign these terms without notice
                </li>
                <li>
                  <strong>Survival:</strong> Key provisions survive termination
                  of these terms
                </li>
              </ul>
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
        </div>

        <div className={styles.footer}>
          <button className={styles.closeModalButton} onClick={onClose}>
            Close Terms and Conditions
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
