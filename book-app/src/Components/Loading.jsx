import React, { useEffect } from "react";
import { gsap } from "gsap";

// need use effect, otherwise animating before DOM has loaded!
const Loading = () => {
  useEffect(() => {
    gsap.fromTo(
      ".loadingText",
      { x: -50 },
      { x: 30, duration: 5, color: "green", ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <>
      <h1 className="loadingText">Loading...</h1>
    </>
  );
};

export default Loading;
