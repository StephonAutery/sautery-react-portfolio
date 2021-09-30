import React from "react";
import TruthsComponent from "./TruthsComponent";
import TruthsMobileComponent from "./TruthsMobileComponent";
import mobilelocker from "mobilelocker-tracking";

export default class TruthComponent extends React.Component {
  componentDidMount(){
    mobilelocker.logEvent('navigate', 'tap', 'truth');
  };

  render(){
  return (
    <>
      <TruthsMobileComponent />
      <TruthsComponent />
    </>
  );
}}
