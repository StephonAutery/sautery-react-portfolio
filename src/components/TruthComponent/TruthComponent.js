import React from "react";
import TruthsComponent from "./TruthsComponent";
import TruthsMobileComponent from "./TruthsMobileComponent";
import MobileLocker from "mobilelocker-tracking";

export default function TruthComponent(props) {
  function mobileData() {
    MobileLocker.logEvent("navigate", "tap", "/truth");
    console.log("mobile.data");
  }

  return (
    <>
      {mobileData()}
      <TruthsMobileComponent />
      <TruthsComponent />
    </>
  );
}
