import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OCEANFLO",
  description:
    "OCEANFLO Privacy Policy - Learn how we collect, use, and protect your personal information. Read our comprehensive privacy policy for transparency and trust.",
  keywords: [
    "privacy policy",
    "OCEANFLO",
    "data protection",
    "personal information",
    "privacy",
    "water company privacy",
    "data security",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | OCEANFLO",
    description:
      "Read OCEANFLO's comprehensive privacy policy to understand how we protect your personal information.",
    type: "website",
    url: "https://www.oceanflo.in/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
