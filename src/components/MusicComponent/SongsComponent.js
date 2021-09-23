import React from "react";

export default function SongsComponent(props) {
  return (
    <>
      <h2 className="uk-width-xlarge">
        <p className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom uk-text-lead">
          Music
        </p>
      </h2>

      <p className="uk-text-lead uk-padding-small uk-padding-remove-bottom">
        At The Pallet Space - John Murgueitio
      </p>
      <iframe
        className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
        width="480"
        height="270"
        src="https://www.youtube.com/embed/2g0RO5KD_Xo"
        title="At the Pallet Space - John Murgueitio"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className=" uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
        Drumming
      </p>
      <p className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
        <strong>Gear:</strong>
        <br></br>
        Canon C100 MkII, 2 Canon 5D MkIII, Canon Glass. Manfrotto supports.
        Apurture lighting. Sennheiser mics.
      </p>
      <hr className="HorizontalLine"></hr>

      <p className="uk-text-lead uk-padding-small uk-padding-remove-bottom">
        At The Pallet Space - Mykee Ramen w/ John Murgueitio
      </p>
      <iframe
        className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
        width="480"
        height="270"
        src="https://www.youtube.com/embed/68qt_IGD7g0"
        title="At The Pallet Space - Mykee Ramen - Ill Gotten Gains"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        allowFullScreen
      ></iframe>
      <p className=" uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
        Ill Gotten Gains
      </p>
      <p className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
        <strong>Gear:</strong>
        <br></br>
        Canon C100 MkII, 2 Canon 5D MkIII, Canon Glass. Manfrotto supports.
        Apurture lighting. Sennheiser mics.
      </p>
      <p className="uk-text-lead uk-padding-small uk-padding-remove-bottom">
        Kenny Roby - Rather Not Know
      </p>
      <iframe
        className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
        width="480"
        height="270"
        src="https://www.youtube.com/embed/rRNERiVPkxI?controls=0"
        title="Kenny Roby - Rather Not Know"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <hr className="HorizontalLine"></hr>

      <p className="uk-text-lead uk-padding-small uk-padding-bottom-remove uk-padding-remove-bottom">
        Kenny Roby - Talk to the Animals
      </p>

      <iframe
        className="uk-padding-small uk-padding-remove-top"
        width="480"
        height="270"
        src="https://www.youtube.com/embed/6W1RA0YXd9A?controls=0"
        title="Kenny Roby - Talk to the Animals"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}
