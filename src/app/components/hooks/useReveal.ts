import { useCallback } from "react";

type Direction = "up" | "left" | "right" | "fade";

interface RevealOptions {
  direction?: Direction;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const TRANSFORMS: Record<Direction, string> = {
  up: "translateY(48px)",
  left: "translateX(-56px)",
  right: "translateX(56px)",
  fade: "scale(0.96)",
};

export function useReveal(options: RevealOptions = {}) {
  const {
    direction = "up",
    delay = 0,
    threshold = 0.15,
    once = true,
  } = options;

  const ref = useCallback((el: HTMLElement | null) => {
    if (!el) return;

  
    el.style.opacity = "0";

   
    el.style.filter = "blur(5px)";

    el.style.setProperty(
      "--reveal-transform",
      TRANSFORMS[direction]
    );

    el.style.transform = "var(--reveal-transform)";

    el.style.transition = `
      opacity 1.4s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
      transform 1.4s cubic-bezier(0.22,1,0.36,1) ${delay}ms,
      filter 1.4s cubic-bezier(0.22,1,0.36,1) ${delay}ms
    `;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          el.style.opacity = "1";

          
          el.style.filter = "blur(0px)";

          el.style.setProperty(
            "--reveal-transform",
            "translate(0,0)"
          );

          if (once) {
            io.disconnect();
          }

        } else if (!once) {

          el.style.opacity = "0";

          
          el.style.filter = "blur(5px)";

          el.style.setProperty(
            "--reveal-transform",
            TRANSFORMS[direction]
          );
        }
      },
      { threshold }
    );

    io.observe(el);

    return () => io.disconnect();

  }, [direction, delay, threshold, once]);

  return ref;
}