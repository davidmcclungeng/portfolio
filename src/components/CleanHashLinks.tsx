"use client";

import { useEffect } from "react";

// In-page links keep their #section hrefs, so they work with JavaScript off and
// a shared #section link still opens in the right place. When JavaScript runs,
// this scrolls to the section itself and keeps the # out of the address bar.
export function CleanHashLinks() {
  useEffect(() => {
    const cleanUrl = () =>
      window.history.replaceState(null, "", window.location.pathname + window.location.search);

    // Arrived on a shared #section link: the browser has already scrolled there
    if (window.location.hash) cleanUrl();
    // Same for a # change while the page is open (an edited URL, a link from
    // elsewhere): the browser jumps without reloading, so tidy up after it
    const onHashChange = () => {
      if (window.location.hash) cleanUrl();
    };

    const onClick = (e: MouseEvent) => {
      // Leave modified clicks (new tab, new window) to the browser
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      e.preventDefault();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // scroll-padding-top on <html> keeps the section clear of the sticky nav
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      // Move keyboard focus with the scroll, as a native jump would
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}
