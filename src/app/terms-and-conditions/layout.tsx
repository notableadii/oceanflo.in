import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | OCEANFLO",
  description:
    "OCEANFLO Terms and Conditions - Read our terms of service, user agreements, and legal policies. Understand your rights and responsibilities when using our services.",
  keywords: [
    "terms and conditions",
    "OCEANFLO",
    "terms of service",
    "user agreement",
    "legal policy",
    "water company terms",
    "service agreement",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Terms and Conditions | OCEANFLO",
    description:
      "Read OCEANFLO's terms and conditions to understand your rights and responsibilities when using our services.",
    type: "website",
    url: "https://www.oceanflo.in/terms-and-conditions",
  },
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
