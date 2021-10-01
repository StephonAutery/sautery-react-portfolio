import React from "react";
import FictionsComponent from "./FictionsComponent";
import FictionsMobileComponent from "./FictionsMobileComponent";
import MobileLocker from "mobilelocker-tracking";

export default function FictionComponent(props) {
  function mobileData() {
    MobileLocker.logEvent("navigate", "tap", "/fiction");
    console.log("mobile.data");
  }

  return (
    <>
      {mobileData()}
      <FictionsMobileComponent />
      <FictionsComponent />
    </>
  );
}
