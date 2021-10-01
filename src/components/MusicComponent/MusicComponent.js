import React from "react";
import SongsComponent from "./SongsComponent";
import SongsCompactComponent from "./SongsCompactComponent";
import MobileLocker from "mobilelocker-tracking";

export default function MusicComponent(props) {
  function mobileData() {
    MobileLocker.logEvent("navigate", "tap", "/music");
    console.log("mobile.data");
  }

  return (
    <>
      {mobileData()}
      <SongsCompactComponent />
      <SongsComponent />
    </>
  );
}
