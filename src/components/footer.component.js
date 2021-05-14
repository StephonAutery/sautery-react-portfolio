import React, { Component } from "react";
import "../util/sla-styles.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="uk-child-width-expand@m uk-text-center" uk-grid="true">
        <div className="uk-card uk-card-default uk-card-body">
          copyright 2020 Stephon Autery
        </div>
      </div>
    );
  }
}
