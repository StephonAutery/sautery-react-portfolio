import React from "react";
import ContactsComponent from "./ContactsComponent";

export default function ContactComponent(props) {
  return (
    <div className="uk-grid uk-visible@m">
      <div id="fiction-tall" className="uk-width-1-3">
        <h2 className="uk-padding-small uk-padding-remove-right uk-padding-remove-top uk-padding-remove-bottom">
          <p className="right uk-text-nowrap">Stephon Autery</p>
        </h2>
        <hr />
        <p className="right">Reach out to me. I'm here for you.</p>
      </div>

      <div id="fictions" className="uk-padding-small">
        <ContactsComponent />
      </div>
    </div>
  );
}
