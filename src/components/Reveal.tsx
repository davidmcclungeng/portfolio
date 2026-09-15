"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Content is server-rendered visible. The inline script in layout.tsx adds
// `js` to <html> before first paint, and only then does CSS hide `.reveal`
// until it scrolls into view, so the page still reads with JS off or slow.
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Strict Mode's dev remount strips attributes the inline script set on <html>
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      // Any overlap counts, so tall sections on short screens still reveal
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className ? `reveal ${className}` : "reveal"}>
      {children}
    </div>
  );
}
