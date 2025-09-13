// This file contains the single source of truth for pricing and checkout links.
// We are running an A/B test to determine the optimal price point ($69 vs $99).

// HOW TO GET THE FINAL LINK:
// 1. Log in to your Shopify Admin.
// 2. Go to "Products" and select your Spice Gem product.
// 3. Create a variant for the $99 price point.
// 4. For that variant, click "More actions" -> "Create checkout link".
// 5. Copy the link and paste it for variant B below, replacing the empty string.

export type PriceVariantID = 'A' | 'B';

interface VariantDetails {
  id: PriceVariantID;
  price: number;
  displayPrice: string;
  shopifyUrl: string;
}

export const PRICE_VARIANTS: Record<PriceVariantID, VariantDetails> = {
  A: {
    id: 'A',
    price: 69,
    displayPrice: '$69',
    // This is the confirmed Express Checkout link for the $69 price.
    shopifyUrl: "https://686bd4-2.myshopify.com/cart/46227987955889:1?channel=buy_button" 
  },
  B: {
    id: 'B',
    price: 99,
    displayPrice: '$99',
    // !!! IMPORTANT: A/B TEST IS NOT FULLY ACTIVE !!!
    // You must generate a unique checkout link for the $99 price in Shopify
    // and replace the empty string below with that URL.
    // Until you do, the button for this variant will be disabled.
    shopifyUrl: "" 
  }
};
