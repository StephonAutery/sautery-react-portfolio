import React from "react";
import SongsComponent from "./SongsComponent";
import SongsCompactComponent from "./SongsCompactComponent";

export default class MusicComponent extends React.Component {
  render() {
    return (

        <>
          <SongsCompactComponent />
          <SongsComponent />
        </>
    );
  }
}
