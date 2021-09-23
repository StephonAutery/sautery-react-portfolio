import React from "react";
import TruthsComponent from "./TruthsComponent";

export default function TruthComponent(props) {
  return (
    <div className="uk-grid uk-visible@m">
      <div id="truth-tall" className="uk-width-1-3">
        <h2 className="uk-padding uk-padding-remove-right uk-padding-remove-top uk-padding-remove-bottom">
          <p className="right uk-text-nowrap">Stephon Autery</p>
        </h2>
        <hr />
        <p className="right">Uncommon HomeComing</p>
        <p className="right">Measure LL Campaign</p>
        <p className="right">
          2001 - Kenny Roby<br></br>Live at the Underground - Durham, NC
        </p>
      </div>

      <div id="truths" className="uk-padding-small">
        <TruthsComponent />
      </div>
    </div>
  );
}
