"use client";

/**
 * AnalyticsLoader
 *
 * Listens for the `trackingConsentGranted` custom event dispatched by
 * CookieConsentBanner and loads third-party analytics scripts only after the
 * user has explicitly opted in.
 *
 * Usage:
 *   1. Drop <AnalyticsLoader /> into app/layout.tsx (alongside CookieConsentBanner).
 *   2. Replace the placeholder `loadAnalytics()` body below with real script
 *      injection (e.g. Google Analytics / GTM).
 */

import { useEffect } from "react";

function loadAnalytics() {
  // ─── Google Tag Manager example ───────────────────────────────────────────
  // const GTM_ID = "GTM-XXXXXXX";
  // const script = document.createElement("script");
  // script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  // script.async = true;
  // document.head.appendChild(script);
  // window.dataLayer = window.dataLayer || [];
  // window.dataLayer.push({ event: "gtm.js", "gtm.start": Date.now() });
  //
  // ─── Google Analytics (gtag) example ──────────────────────────────────────
  // const GA_ID = "G-XXXXXXXXXX";
  // const script = document.createElement("script");
  // script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  // script.async = true;
  // document.head.appendChild(script);
  // window.dataLayer = window.dataLayer || [];
  // function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  // gtag("js", new Date());
  // gtag("config", GA_ID);
}

export default function AnalyticsLoader() {
  useEffect(() => {
    // If consent was already granted in a previous session the banner fires
    // `trackingConsentGranted` during its own useEffect. We listen here so
    // analytics always initialise after consent — whether it was given now or
    // in a past visit.
    function onConsent() {
      loadAnalytics();
    }

    window.addEventListener("trackingConsentGranted", onConsent);
    return () =>
      window.removeEventListener("trackingConsentGranted", onConsent);
  }, []);

  return null;
}
