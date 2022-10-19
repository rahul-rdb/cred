import React from "react";
import "./productShowcase.css";
import { useEffect, useState, useRef } from "react";

function ProductShowcase() {
  const [showCase, setshowCase] = useState(false);

  const ref = useRef(null);

  const toggelFunction = (e) => {
    if (e[0].isIntersecting) {
      setshowCase(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggelFunction, options);
    const currentRef = ref.current;

    if (!showCase) {
      if (currentRef) {
        observer.observe(currentRef);
      }
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });

  return (
    <div className="fixedBackground">
      <div
        className={`product-showcase ${showCase ? "scale-in-bottom" : ""}`}
        ref={ref}
      >
        {showCase && (
          <div className="showcase-wrapper ">
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-2.png"
              className="showcase-ui showcase-left"
              alt="app"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-left-1.png"
              className="showcase-ui showcase-leftmid"
              alt="app"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-center.png"
              className="showcase-ui showcase-mid"
              alt="app"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-1.png"
              className="showcase-ui showcase-rightmid"
              alt="app"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/new-right-2.png"
              className="showcase-ui showcase-right"
              alt="app"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductShowcase;
