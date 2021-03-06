import React from "react";

export default function ContactsComponent(props) {
  return (
    <div className="uk-grid uk-flex-center uk-padding-small uk-hidden@m">
      <div className="uk-padding-small uk-width-large uk-padding-remove-top">
        <h2 className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
          <p>Stephon Autery</p>
        </h2>
        <hr className="HorizontalLine"></hr>
        <p className="uk-padding-small uk-text-lead uk-padding-remove-bottom uk-padding-remove-top">
          Fiction
        </p>
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
