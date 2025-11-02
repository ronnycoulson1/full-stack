"use client";

import lottie from "lottie-web";
import { useEffect, useRef } from "react";

export default function AnimatedIcon({ animationPath }) {
  const animatioContainer = useRef(null);

  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window !== "undefined") {
      lottie.loadAnimation({
        container: animatioContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: animationPath,
      });
    }
  }, [animationPath]);

  return <div ref={animatioContainer} className="w-64 h-64"></div>;
}
