import { useLayoutEffect, useRef } from "react";
import DrawSvg from "./DrawSvg";
import BackgroundImage from "./image/BackgroundImage";
import gsap from "gsap";

export default function Start({ src }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      setTimeout(() => {
        gsap.to(containerRef.current, {
          duration: 0.5,
          autoAlpha: 0,
          ease: "power2.out",
          delay: 4,
        });
      }, 200);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={containerRef}
      className="!fixed pointer-events-none top-0 left-0 z-[1000] h-[100.01vh] w-full"
    >
      <BackgroundImage
        containerClassName="h-[100.01vh] w-full relative  z-[1002]  flex items-center justify-center"
        image={src}
        sizes="max(100vw, 100vh)"
        loading="eager"
        alt=""
      >
        <DrawSvg />
      </BackgroundImage>
    </div>
  );
}
