import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ResumeComponent } from "./components/ResumeComponent";
import { TruthComponent } from "./components/TruthComponent";
import { FictionComponent } from "./components/FictionComponent";
import { MusicComponent } from "./components/MusicComponent";
import { ContactComponent } from "./components/ContactComponent";
import { FooterComponent } from "./components/FooterComponent";

function App() {
  return (
    <Router>
      <nav
        id="nav"
        className="uk-navbar-container uk-box-shadow-small"
        uk-navbar="true"
      >
        <div id="navbar" className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li>
              <Link className="uk-text-muted" to="/">
                Resume
              </Link>
            </li>
            <li>
              <Link className="uk-text-danger" to="/truth">
                Truth
              </Link>
            </li>
            <li>
              <Link className="uk-text-emphasis" to="/fiction">
                Fiction
              </Link>
            </li>
            <li>
              <Link className="uk-text-success" to="/music">
                Music
              </Link>
            </li>
            <li>
              <Link className="uk-text-muted" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/truth">
            <TruthComponent />
          </Route>
          <Route path="/fiction">
            <FictionComponent />
          </Route>
          <Route path="/music">
            <MusicComponent />
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
          <Route path="/">
            <ResumeComponent />
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
