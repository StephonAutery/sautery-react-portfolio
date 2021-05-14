import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div uk-grid="true">
        <div className="uk-width-1-1 uk-padding uk-padding-remove-right uk-padding-remove-bottom uk-padding-remove-top">
          <nav
            id="nav"
            className="uk-navbar-container uk-width-xlarg"
            uk-navbar="true"
          >
            <div id="navbar" className="uk-navbar-center">
              <ul className="uk-navbar-nav">
                <li>
                  <a
                    href="assets/2021-stephonautery-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;resume
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/stephon-a-1bb575198/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/StephonAutery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:stephon@stephonautery.com?Subject=resume%20request"
                    target="_top"
                  >
                    e-mail
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
