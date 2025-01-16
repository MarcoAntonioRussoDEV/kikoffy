import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BackgroundImage from "./image/BackgroundImage";

export default function Hero({ data, mini }) {
  const h1Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(h1Ref.current, {
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.7,
        ease: "power2.out",
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <BackgroundImage
      containerClassName="h-screen w-full  z-20 relative flex items-center justify-center"
      style={{ aspectRatio: data.imageOne.aspectRatio }}
      image={data.imageOne}
      key={data.imageOne}
      sizes="max(100vw, 100vh)"
      loading="eager"
      alt=""
    >
      <h1
        ref={h1Ref}
        className={`uppercase text-center ${
          mini ? "text-4xl md:text-5xl" : "text-5xl"
        } md:text-8xl  text-white will-change-[filter] font-extrabold font-display`}
      >
        {data.hero}
      </h1>
    </BackgroundImage>
  );
}
