import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

function HeroPage() {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-lable">
        <div className="hero-claim-text ">
          pay credit card bill.earn guaranteed ₹200 back.
        </div>
        <div className="hero-claim-anchor">
          claim now.
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            alt="cred logo"
            className="hero-claim-logo"
          />
        </div>
      </div>

      <div className="flex absolute-center flex-col max-width hero-section">
        <div className="hero-section-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-section-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download Cred" />
      </div>
    </div>
  );
}

export default HeroPage;
