// This utility function sends custom events to Google Analytics.
// We use this to track important user actions, like clicking a purchase button,
// and to monitor the performance of our A/B tests.

// Make sure gtag is available on the window
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: { [key: string]: any }
    ) => void;
  }
}

/**
 * Tracks a purchase button click. This is the primary conversion event.
 * @param variantId - The A/B test variant ID ('A' or 'B').
 * @param price - The price of the variant being clicked.
 */
export const trackConversion = (variantId: string, price: number) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'purchase_click', {
      'event_category': 'conversion',
      'event_label': `Unlock Her Now Click - Variant ${variantId}`,
      'value': price,
      'currency': 'USD',
    });
    console.log(`Conversion event: purchase_click (Variant ${variantId}, $${price}) sent to GA`);
  } else {
    console.log("GA not available. Conversion not tracked.");
  }
};

/**
 * Tracks which price variant a user is assigned for the A/B test.
 * This is a non-interaction event so it doesn't affect bounce rate.
 * @param variantId - The A/B test variant ID ('A' or 'B') that was shown to the user.
 */
export const trackVariantView = (variantId: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'view_price_variant', {
      'event_category': 'ab_test',
      'event_label': `Viewed Variant ${variantId}`,
      'non_interaction': true, // Ensures this event doesn't impact bounce rate
    });
    console.log(`A/B Test event: view_price_variant (Variant ${variantId}) sent to GA`);
  } else {
    console.log("GA not available. A/B test variant view not tracked.");
  }
};
