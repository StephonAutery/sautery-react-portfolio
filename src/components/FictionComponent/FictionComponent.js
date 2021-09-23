import React from "react";
import FictionsComponent from "./FictionsComponent";

export default function FictionComponent(props) {
  return (
    <div className="uk-grid uk-visible@m">
      <div id="fiction-tall" className="uk-width-1-3">
        <h2 className="uk-padding-small uk-padding-remove-right uk-padding-remove-top uk-padding-remove-bottom">
          <p className="right uk-text-nowrap">Stephon Autery</p>
        </h2>
        <hr />
        <p className="right">I Miss You When You're Gone</p>
        <p className="right">Are You Safe</p>
      </div>

      <div id="fictions" className="uk-padding-small">
        <FictionsComponent />
      </div>
    </div>
  );
}
