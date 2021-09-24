import React from "react";
import TruthsComponent from "./TruthsComponent";
import TruthsMobileComponent from "./TruthsMobileComponent";

export default function TruthComponent(props) {
  return (
    <>
      <TruthsMobileComponent />
      <TruthsComponent />
    </>
  );
}
