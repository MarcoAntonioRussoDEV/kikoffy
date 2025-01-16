import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimWrapper({
  delay = 0.2,
  children,
  y = 20,
  start = "top 85%",
  ...props
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.from(
          containerRef.current,
          {
            duration: 0.8,
            delay: delay,
            autoAlpha: 0,
            ease: "power3.out",
            y,
            scrollTrigger: {
              trigger: containerRef.current,
              // markers: true,
              start: start,
              end: "bottom bottom",
            },
          },
          300
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div {...props} ref={containerRef}>
      {children}
    </div>
  );
}
