import React, { useEffect, useState, useRef } from "react";

function ScreenText({ screen, i, setMobileImage }) {
  const [showCase, setshowCase] = useState(false);

  const ref = useRef(null);

  const toggelFunction = (e) => {
    if (e[0].isIntersecting) {
      setshowCase(true);
      setMobileImage(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggelFunction, options);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });

  return (
    <div className={`screen-text ${showCase ? "text-visible" : ""}`} ref={ref}>
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-display flex absolute-center">
            <img
              src={screen.mobile_img}
              alt="mob-display"
              className="mobile-screen-img"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
}

export default ScreenText;
