import React from "react";
import ContactsComponent from "./ContactsComponent";
import ContactsMobileComponent from "./ContactsMobileComponent";

export default function ContactComponent(props) {
  return (
    <div>
      <ContactsComponent />
      <ContactsMobileComponent />
    </div>
  );
}
