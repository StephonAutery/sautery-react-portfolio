import React from "react";

export default function FictionsComponent(props) {
  return (
    <>
      <h2 className="uk-width-xlarge">
        <p className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom uk-text-lead">
          Fiction
        </p>
      </h2>

      <p className="uk-text-lead uk-padding-small uk-padding-remove-bottom">
        48 Hour Film Festival - I Miss You When You're Gone
      </p>
      <iframe
        className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
        src="https://player.vimeo.com/video/157028090?h=ce48a8ef1a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        width="480"
        height="270"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; fullscreen"
        title="I Miss You When You&amp;#039;re Gone"
      ></iframe>
      <p className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
        <strong>Gear:</strong>
        <br></br>
        Canon C100 MkII, 2 Canon 5D MkIII, Canon Glass. Manfrotto supports.
        Apurture lighting. Sennheiser mics.
      </p>
      <hr className="HorizontalLine"></hr>

      <p className="uk-text-lead uk-padding-small uk-padding-remove-bottom">
        48 Hour Film Festival - Are you safe?
      </p>
      <iframe
        className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
        src="https://player.vimeo.com/video/231166356?h=e6160c9117&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        width="480"
        height="270"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; fullscreen"
        title="Are You Safe?"
      ></iframe>
      <p className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
        <strong>Gear:</strong>
        <br></br>
        Canon C100 MkII, 2 Canon 5D MkIII, Canon Glass. Manfrotto supports.
        Apurture lighting. Sennheiser mics.
      </p>
      <hr className="HorizontalLine"></hr>
      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
    </>
  );
}
