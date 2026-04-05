import { useState, useEffect } from 'react';

export type Currency = 'GHS' | 'NGN' | 'USD';

const RATES = {
    GHS: 1,      // Base
    NGN: 100,    // 1 GHS = 100 NGN (approx)
    USD: 0.065   // 1 GHS = 0.065 USD (approx 1 USD = 15.38 GHS)
};

const LOCALE_MAP: Record<Currency, string> = {
    GHS: 'en-GH',
    NGN: 'en-NG',
    USD: 'en-US'
};

export const useCurrency = () => {
    const [currency, setCurrency] = useState<Currency>('USD');

    useEffect(() => {
        // Try IP geolocation first for accurate currency detection
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data.country_code === 'GH') {
                    setCurrency('GHS');
                } else if (data.country_code === 'NG') {
                    setCurrency('NGN');
                } else {
                    setCurrency('USD');
                }
            })
            .catch(() => {
                // Fallback heuristic to detect currency based on timezone
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                if (timeZone.includes('Accra') || timeZone === 'GMT' || timeZone === 'UTC') {
                    setCurrency('GHS');
                } else if (timeZone.includes('Lagos') || timeZone.includes('West Central Africa')) {
                    setCurrency('NGN');
                } else {
                    setCurrency('USD');
                }
            });
    }, []);

    const formatPrice = (priceInGHS: number) => {
        // Standardize: Input price is always in GHS (since that's the base in API)
        let convertedPrice = priceInGHS;

        if (currency === 'NGN') {
            convertedPrice = priceInGHS * RATES.NGN;
        } else if (currency === 'USD') {
            convertedPrice = priceInGHS * RATES.USD;
        }

        // Rounding logic for clean numbers
        if (currency === 'USD') {
            convertedPrice = Math.ceil(convertedPrice); // Round up to nearest dollar
        } else {
            // Round to nearest 10 for NGN, 1 for GHS
            convertedPrice = Math.ceil(convertedPrice);
        }

        return new Intl.NumberFormat(LOCALE_MAP[currency], {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(convertedPrice);
    };

    return { currency, setCurrency, formatPrice };
};
