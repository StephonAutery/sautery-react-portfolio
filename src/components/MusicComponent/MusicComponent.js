import React from "react";
import SongsComponent from "./SongsComponent";
import SongsCompactComponent from "./SongsCompactComponent";

export default function MusicComponent(props) {
    return (
      <>
        <SongsCompactComponent />
        <SongsComponent />
      </>
    );
}
