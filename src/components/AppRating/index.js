import React from "react";
import "./appRating.css";
import Button from "../common/Button";

const getAppButton = () => (
  <img
    src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
    className="app-rating-icon"
    alt="app-symbol"
  />
);

const getPlayButton = () => (
  <img
    src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
    className="app-rating-icon"
    alt="app-symbol"
  />
);

function AppRating() {
  return (
    <div className="app-rating-wrapper max-width flex">
      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
              alt="app-rating"
            />
          </div>
          <div className="app-rating-name">
            app
            <br />
            store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText={"Download the app"}
            customClass={"app-store-button"}
            prefix={getAppButton()}
          />
        </div>
      </div>
      <div className="app-rating-block flex flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
              alt="app-rating"
            />
          </div>
          <div className="app-rating-name">
            play
            <br />
            store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText={"Download the app"}
            customClass={"app-store-button"}
            prefix={getPlayButton()}
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText={"Download the app"} />
      </div>
    </div>
  );
}

export default AppRating;
