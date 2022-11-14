import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import CSSRulePlugin from "gsap/CSSRulePlugin";

// need use effect, otherwise animating before DOM has loaded!
const Loading = () => {
  let container = useRef(null);
  let image = useRef(null);
  gsap.registerPlugin(CSSRulePlugin);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(container, { duration: 0, opacity: 1 })
      .to(imageReveal, {
        duration: 3,
        width: "0%",
        ease: "circ.out",
      })
      .from(image, {
        duration: 3,
        scale: 1.6,
        ease: "power2.out",
        delay: -1.5,
      });
  }, [imageReveal, tl]);

  return (
    <>
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img
              ref={(el) => (image = el)}
              src="/LoadingImage.jpg"
              alt="A person reading"
            />
          </div>
        </>
      </div>
    </>
  );
};

export default Loading;
