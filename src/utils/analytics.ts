// Google Analytics utility functions

// Cookie utility function
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

export const trackButtonClick = (buttonName: string) => {
  trackEvent("button_click", "engagement", buttonName);
};

export const trackNavigation = (linkName: string) => {
  trackEvent("navigation", "engagement", linkName);
};

// Check if analytics is enabled - check both cookies and localStorage for backward compatibility
export const isAnalyticsEnabled = (): boolean => {
  if (typeof window === "undefined") return false;
  const consent = getCookie("cookieConsent") || localStorage.getItem("cookieConsent");
  return consent === "accepted";
};

// Enhanced SEO tracking - handles both with and without title
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    const config: {
      page_path: string;
      page_title?: string;
      custom_map?: {
        custom_dimension1: string;
        custom_dimension2: string;
      };
    } = {
      page_path: url,
    };

    if (title) {
      config.page_title = title;
      config.custom_map = {
        custom_dimension1: "page_section",
        custom_dimension2: "user_type",
      };
    }

    window.gtag("config", "G-8D4FZ3GCE4", config);
  }
};

// Track user engagement with content
export const trackContentEngagement = (
  contentType: string,
  contentId: string
) => {
  trackEvent("content_engagement", "content", `${contentType}_${contentId}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (depth >= 25 && depth < 50) {
    trackEvent("scroll", "engagement", "25_percent");
  } else if (depth >= 50 && depth < 75) {
    trackEvent("scroll", "engagement", "50_percent");
  } else if (depth >= 75 && depth < 90) {
    trackEvent("scroll", "engagement", "75_percent");
  } else if (depth >= 90) {
    trackEvent("scroll", "engagement", "90_percent");
  }
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number) => {
  if (timeInSeconds >= 30 && timeInSeconds < 60) {
    trackEvent("time_on_page", "engagement", "30_seconds");
  } else if (timeInSeconds >= 60 && timeInSeconds < 120) {
    trackEvent("time_on_page", "engagement", "1_minute");
  } else if (timeInSeconds >= 120 && timeInSeconds < 300) {
    trackEvent("time_on_page", "engagement", "2_minutes");
  } else if (timeInSeconds >= 300) {
    trackEvent("time_on_page", "engagement", "5_minutes");
  }
};

// Track business inquiries
export const trackBusinessInquiry = (inquiryType: string) => {
  trackEvent("business_inquiry", "conversion", inquiryType);
};

// Track product interest
export const trackProductInterest = (productName: string) => {
  trackEvent("product_interest", "engagement", productName);
};
