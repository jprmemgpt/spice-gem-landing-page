
import { useState, useEffect } from 'react';
import { PRICE_VARIANTS, PriceVariantID } from '../constants';
import { trackVariantView } from '../utils/analytics';

const STORAGE_KEY = 'spice_gem_price_variant';

export const usePriceVariant = () => {
  const [variant, setVariant] = useState<typeof PRICE_VARIANTS[PriceVariantID] | null>(null);

  useEffect(() => {
    let assignedVariantId: PriceVariantID;
    const storedVariantId = localStorage.getItem(STORAGE_KEY) as PriceVariantID;

    if (storedVariantId && (storedVariantId === 'A' || storedVariantId === 'B')) {
      // User has been here before, use their stored variant
      assignedVariantId = storedVariantId;
    } else {
      // New user, randomly assign a variant (50/50 split)
      assignedVariantId = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem(STORAGE_KEY, assignedVariantId);
      // Track the variant assignment event for analytics
      trackVariantView(assignedVariantId);
    }

    setVariant(PRICE_VARIANTS[assignedVariantId]);
  }, []);

  return variant;
};
