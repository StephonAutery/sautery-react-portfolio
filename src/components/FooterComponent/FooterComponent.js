import React from "react";

export default class FooterComponent extends React.Component {
  render() {
    return (
      <div className="uk-child-width-expand@m uk-text-center" uk-grid="true">
        <div className="uk-card uk-card-default uk-card-body">
          Copyright | Stephon Autery
        </div>
      </div>
    );
  }
}
