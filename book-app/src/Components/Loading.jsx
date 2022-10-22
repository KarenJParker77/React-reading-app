import React, { useEffect } from "react";
import { gsap } from "gsap";

// need use effect, otherwise animating before DOM has loaded!
const Loading = () => {
  useEffect(() => {
    gsap.fromTo(
      ".loadingText",
      { x: -50, opacity: 0 },
      { x: 30, duration: 5, opacity: 1, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <>
      <div className="loadingContainer">
        <h1 className="loadingText">Loading</h1>
      </div>
    </>
  );
};

export default Loading;
