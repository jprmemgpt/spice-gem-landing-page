// This utility function sends a custom event to Google Analytics and TikTok.
// We use this to track important user actions, like clicking a purchase button.
// This is the key to measuring ad performance (ROAS, CPA, etc.).

// Make sure gtag and ttq are available on the window
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: { [key: string]: any }
    ) => void;
    ttq: {
      track: (eventName: string, params?: { [key: string]: any }) => void;
    };
  }
}

export const trackConversion = () => {
  // Google Analytics Tracking
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'purchase_click', {
      'event_category': 'conversion',
      'event_label': 'Unlock Her Now Click',
    });
    console.log("Conversion event: purchase_click sent to GA");
  } else {
    console.log("GA not available. Conversion not tracked.");
  }

  // TikTok Pixel Tracking
  if (typeof window.ttq === 'object' && typeof window.ttq.track === 'function') {
    window.ttq.track('InitiateCheckout');
    console.log("Conversion event: InitiateCheckout sent to TikTok");
  } else {
    console.log("TikTok Pixel not available. Conversion not tracked.");
  }
};