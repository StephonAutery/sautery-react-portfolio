import React from "react";
import FictionsComponent from "./FictionsComponent";
import FictionsMobileComponent from "./FictionsMobileComponent";
import mobilelocker from "mobilelocker-tracking";

export default class FictionComponent extends React.Component {
  componentDidMount() {
    mobilelocker.logEvent('navigate', 'tap', '/fiction');
  }
  
  render() {
    return (
      <>
        <FictionsMobileComponent />
        <FictionsComponent />
      </>
    );
  }
}
