import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * IntroSplash
 * Full-viewport "GLITCH" wordmark intro, adapted from a top/bottom
 * clip-path split glitch technique. Mounted once in the root component, so
 * it plays exactly once per full browser load (hard refresh / first visit)
 * and never replays on TanStack Start's client-side route navigation, since
 * the root component is not remounted by <Outlet/> swaps.
 *
 * Rendered as an opaque overlay so it's part of the initial SSR'd HTML (no
 * flash of the real page before JS/GSAP takes over). GSAP runs a one-shot
 * glitch burst, holds briefly, then wipes the overlay away. A pure CSS
 * fallback force-hides it a few seconds later regardless, so a JS failure
 * can never permanently block the page. <noscript> hides it instantly for
 * no-JS clients.
 */
const TOP_CLASS = "glitch-logo-top";
const BOTTOM_CLASS = "glitch-logo-bottom";

export function IntroSplash() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const root = rootRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!overlay || !root || !top || !bottom) return;

    function finish() {
      overlay!.classList.add("intro-hidden");
      document.documentElement.style.overflow = "";
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    document.documentElement.style.overflow = "hidden";
    gsap.defaults({ ease: "power4.inOut" });

    // skewX shifts the element horizontally by roughly height * tan(angle) —
    // on a wide desktop viewport that reads as a quick glitch flicker, but
    // the same angle on a narrow phone screen (where the wordmark is a much
    // larger fraction of the viewport width) turns into an off-screen smear.
    // Scale both the skew and the small x-jitter down below the sm breakpoint.
    const isNarrowViewport = window.innerWidth < 640;
    const skewAngle = isNarrowViewport ? 35 : 75;
    const jitterX = isNarrowViewport ? 10 : 20;

    const scaleUp = { duration: 0.02, scaleY: 1.1 };
    const scaleDown = { duration: 0.04, scaleY: 1 };
    const both = [top, bottom];

    const tl = gsap.timeline({ onComplete: finish });

    tl.to(both, { duration: 0.1, skewX: skewAngle })
      .to(both, { duration: 0.04, skewX: 0 })
      .to(both, { duration: 0.04, opacity: 0 })
      .to(both, { duration: 0.04, opacity: 1 })
      .to(both, { duration: 0.04, x: -jitterX })
      .to(both, { duration: 0.04, x: 0 })
      .add("split")
      .to(top, { duration: 0.5, x: -4 }, "split")
      .to(bottom, { duration: 0.5, x: 4 }, "split")
      .to(bottom, { duration: 0.08, className: `${BOTTOM_CLASS} redShadow` }, "split")
      .to(root, scaleUp, "split")
      .to(root, scaleDown, "+=0.02")
      .to(bottom, { duration: 0.08, className: BOTTOM_CLASS }, "+=0.09")
      .to(top, { duration: 0.03, className: `${TOP_CLASS} greenShadow` }, "split")
      .to(top, { duration: 0.03, className: TOP_CLASS }, "+=0.01")
      .to(bottom, { duration: 0.1, x: 0 })
      .to(top, { duration: 0.1, x: 0 })
      .to(both, scaleUp)
      .to(both, scaleDown)
      .to(overlay, { autoAlpha: 0, duration: 0.4 }, "+=0.5");

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      id="intro-splash"
      role="presentation"
      aria-hidden="true"
      className="intro-splash fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <noscript>
        <style>{`#intro-splash { display: none !important; }`}</style>
      </noscript>
      <div
        ref={rootRef}
        className="relative font-mono font-bold uppercase tracking-[-0.03em] text-foreground"
        style={{ fontSize: "clamp(48px,11vw,150px)" }}
      >
        <div className="invisible">GLITCH</div>
        <div ref={topRef} className={TOP_CLASS}>
          GLITCH
        </div>
        <div ref={bottomRef} className={BOTTOM_CLASS}>
          GLITCH
        </div>
      </div>
    </div>
  );
}
