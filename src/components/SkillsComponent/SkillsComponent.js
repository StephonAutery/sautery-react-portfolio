import React from "react";
import { ObjectiveComponent } from "../ObjectiveComponent";
import { SectionsComponent } from "../SectionsComponent";
import "../../util/sla-styles.css";

export default class SkillsComponent extends React.Component {
  componentDidMount() {
    this.setState({
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "AJAX",
        "JQuery",
        "Bootstrap",
        "UIKit",
        "UI/UX Design",
        "React/Redux/Hooks",
        "API",
        "Git",
        "Node.js",
        "Express",
        "Passport",
        "MySQL",
        "Transact-SQL",
        "NoSQL",
      ],
      apiTypes: [
        "REST-APIs",
        "WebAPIs",
        "OpenAPIs",
        "InternalAPIs",
        "PartnerAPIs",
      ],
      npmModules: [
        "Express",
        "Express Router",
        "Passport",
        "React",
        "React Router",
      ],
    });
  }

  render() {
    return (
      <div className="uk-grid uk-visible@m">
        <div id="tech-skills-tall" className="uk-width-1-2">
          <h2 className="">
            <p className="right uk-text-nowrap">Stephon Autery</p>
          </h2>
          <hr />
          <p className="right uk-text-lead">Technical Skills</p>
          <p className="right">HTML</p>
          <p className="right">CSS</p>
          <p className="right">JavaScript</p>
          <p className="right">React/Redux.js/Hooks</p>
          <p className="right">ASP</p>
          <p className="right">C++</p>
          <p className="right">Python</p>
          <p className="right">TypeScript</p>
          <p className="right">MongoDB</p>
          <p className="right">Mongoose</p>
          <p className="right">NoSQL</p>
          <p className="right">Transact-SQL</p>
          <p className="right">Node.js</p>
          <p className="right">OOP</p>
          <p className="right">NPM</p>
          <p className="right">Git</p>
          <p className="right">Veeva CRM/CLM</p>
          <p className="right">MobileLocker CLM</p>
          <p className="right">Adobe Creative Suite</p>
        </div>
        <div id="resume" className="uk-width-large uk-padding-small">
          <ObjectiveComponent />
          <SectionsComponent />
        </div>
      </div>
    );
  }
}
