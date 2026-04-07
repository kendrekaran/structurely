"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

const SPLIT_TYPES = {
  lines: { type: "lines" as const, className: "reveal_line" },
  words: { type: "words" as const, className: "reveal_word" },
  chars: { type: "chars" as const, className: "reveal_char" },
};

const REVEAL_SELECTOR =
  '[data-reveal="basic"],[data-reveal="fade"],[data-reveal="lines"],[data-reveal="words"],[data-reveal="chars"]';

export default function RevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Re-run on pathname: ScrollTrigger.batch binds to elements at create time — new
  // routes need new splits + new triggers (client navigation does not remount this provider).
  useGSAP(
    () => {
      const splitTextInstances = new Map<HTMLElement, SplitText>();

      const splitAll = () => {
        splitTextInstances.forEach((instance) => instance.revert());
        splitTextInstances.clear();

        for (const [attr, config] of Object.entries(SPLIT_TYPES)) {
          document
            .querySelectorAll<HTMLElement>(`[data-reveal="${attr}"]`)
            .forEach((el) => {
              const instance = new SplitText(el, {
                type: config.type,
                deepslice: true,
                linesClass:
                  config.type === "lines" ? config.className : undefined,
                wordsClass:
                  config.type === "words" ? config.className : undefined,
                charsClass:
                  config.type === "chars" ? config.className : undefined,
              });
              splitTextInstances.set(el, instance);
              gsap.set(el, { opacity: 1 });
            });
        }
      };

      splitAll();

      const batchTriggers = ScrollTrigger.batch(REVEAL_SELECTOR, {
        start: "top bottom",
        end: "top bottom",
        onEnter: (elements) => {
          const animateItems: HTMLElement[] = [];
          const pushSplitItems = (
            parent: Element,
            selector: string,
            animateTarget: HTMLElement[],
          ) => {
            const parentDelay = parent.getAttribute("data-delay");
            const parentDuration = parent.getAttribute("data-duration");

            parent.querySelectorAll<HTMLElement>(selector).forEach((child) => {
              if (parentDelay && !child.hasAttribute("data-delay")) {
                child.setAttribute("data-delay", parentDelay);
              }
              if (parentDuration && !child.hasAttribute("data-duration")) {
                child.setAttribute("data-duration", parentDuration);
              }
              animateTarget.push(child);
            });
          };

          elements.forEach((element) => {
            const type = element.getAttribute("data-reveal");

            switch (type) {
              case "lines":
                pushSplitItems(element, ".reveal_line", animateItems);
                break;
              case "words":
                pushSplitItems(element, ".reveal_word", animateItems);
                break;
              case "chars":
                pushSplitItems(element, ".reveal_char", animateItems);
                break;
              case "basic":
              case "fade":
                animateItems.push(element as HTMLElement);
                break;
            }
          });

          gsap.to(animateItems, {
            filter: "blur(0rem)",
            opacity: 1,
            scaleY: 1,
            stagger: 0.09,
            delay: (_, target: HTMLElement) => {
              return Number(target.getAttribute("data-delay")) || 0;
            },
            y: 0,
            duration: (_, target: HTMLElement) => {
              const d = target.getAttribute("data-duration");
              if (d === "long") return 1.3;
              if (d === "longer") return 2;
              return 0.8;
            },
            ease: "power4.inOut",
          });
        },
      });

      let resizeTimer: ReturnType<typeof setTimeout> | null = null;
      let lastWidth = window.innerWidth;

      const handleResize = () => {
        if (window.innerWidth === lastWidth) return;
        lastWidth = window.innerWidth;

        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          splitAll();
          ScrollTrigger.refresh();
        }, 150);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (resizeTimer) clearTimeout(resizeTimer);
        batchTriggers.forEach((st) => st.kill());
        splitTextInstances.forEach((instance) => instance.revert());
        splitTextInstances.clear();
      };
    },
    { dependencies: [pathname] },
  );

  return <>{children}</>;
}
