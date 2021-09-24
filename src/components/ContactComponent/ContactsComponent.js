import React from "react";

export default function ContactsComponent(props) {
  return (
    <div className="uk-grid uk-visible@m">

      <div id="fiction-tall" className="uk-width-1-2">
        <h2 className="uk-padding-small uk-padding-remove-right uk-padding-remove-top uk-padding-remove-bottom">
          <p className="right uk-text-nowrap">Stephon Autery</p>
        </h2>
        <hr />
        <p className="right uk-text-lead">
          Fiction</p>
        <p className="right">48 Hour Film Festival - I Miss You When I'm Gone</p>
        <p className="right">48 Hour Film Festival - Are you safe?</p>
      </div>

      
      <div>



      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <form className="uk-form-stacked">
        <fieldset className="uk-fieldset">
          <legend className="uk-legend">Make Contact.</legend>

          <div className="uk-margin">
            <label htmlFor="email">Enter your E-Mail Address </label>
            <div className="uk-form-controls">
              <input
                id="email"
                className="uk-input uk-form-width-large"
                type="text"
                placeholder="me@my-email-address.com"
              ></input>
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="whats-up">What's up? </label>
            <textarea
              id="whats-up"
              className="uk-textarea"
              rows="5"
              placeholder="Textarea"
            ></textarea>
          </div>

          <p className="uk-margin">
            <button type="submit" className="uk-button uk-button-default">
              Send
            </button>
          </p>

          <div
            className="form-group col-md-12 mt-4 g-recaptcha"
            data-sitekey="6LfN9TQcAAAAALHjYR5D9FOZ82kQlbjy0mtgO6cZ"
          ></div>
        </fieldset>
      </form>
      </div>
    </div>
  );
}
