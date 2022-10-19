import React from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";
import { useState } from "react";

const scrollData = [
  {
    heading: "we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/new-fold1.png",
  },
  {
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/new-fold2.png",
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/new-fold3.png",
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    mobile_img:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/new-fold4.png",
  },
];

function MobileScroll() {
  const [mobImage, setMobileImage] = useState(0);

  return (
    <div className="max-width mobile-scroll flex">
      <div className="scroll-display-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-display">
            <ScreenText screen={screen} i={i} setMobileImage={setMobileImage} />
          </div>
        ))}
      </div>

      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-display flex absolute-center">
            <img
              src={scrollData[mobImage].mobile_img}
              alt="mob-display"
              className="mobile-screen-img slide-in-right"
              key={scrollData[mobImage].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileScroll;
