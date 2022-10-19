import React from "react";
import Button from "../common/Button";
import "./security.css";

function Security() {
  return (
    <div className="security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-sectiont-top">
            <div className="photo-section-heading">
              security first.<br/>and second.
            </div>
            <div className="photo-section-subheading">
              what’s yours remains only yours.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what’s yours remains only yours. there’s
              no room for mistakes because we didn’t leave any.
            </div>
            <div>
              <Button buttonText={"Become a member"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
