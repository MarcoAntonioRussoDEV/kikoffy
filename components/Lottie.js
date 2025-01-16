// "use server";

import React, { useEffect, useRef } from "react";
import "@dotlottie/player-component";
import useIntersect from "./utils/useIntersect";

export default function Lottie({ animationData, className, autoplay }) {
  const animation = useRef(null);

  const [ref, entry] = useIntersect({
    threshold: 0,
  });

  useEffect(() => {
    if (entry.isIntersecting) {
      // animation.current.style.display = "block";
      animation.current.play();
    } else {
      // animation.current.pause();
      // animation.current.style.display = "none";
    }
  }, [entry]);

  return (
    <div
      style={{ height: "100%", maxHeight: "100%" }}
      className={className}
      ref={ref}
    >
      <dotlottie-player
        style={{ height: "100%", maxHeight: "100%" }}
        autoplay={autoplay}
        ref={animation}
        loop
        mode="normal"
        src={animationData}
      />
    </div>
  );
}
