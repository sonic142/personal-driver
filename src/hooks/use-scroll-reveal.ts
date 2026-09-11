import { useEffect, useRef } from "react";

/**
 * Adds a one-shot "revealed" class when the element scrolls into view,
 * powering a CSS fade-in + slide-up transition.
 *
 * Apply the `scroll-reveal` CSS class to the same element for the
 * initial hidden state.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
