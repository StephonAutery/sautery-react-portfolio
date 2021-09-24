import React from "react";
import FictionsComponent from "./FictionsComponent";
import FictionsMobileComponent from "./FictionsMobileComponent";

export default function FictionComponent(props) {
  return (
    <>
      <FictionsMobileComponent />
      <FictionsComponent />
    </>
  );
}
