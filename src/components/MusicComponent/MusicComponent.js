import React from "react";
import SongsComponent from "./SongsComponent";
import SongsCompactComponent from "./SongsCompactComponent";

mobileData = () => {
  mobilelocker.logEvent("navigate", "tap", "/music");
};

export default function MusicComponent(props) {
  mobileData();
  return (
    <>
      <SongsCompactComponent />
      <SongsComponent />
    </>
  );
}
