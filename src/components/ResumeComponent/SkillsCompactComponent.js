import React from "react";
import ObjectiveComponent from "./ObjectiveComponent";
import SectionsComponent from "./SectionsComponent";

export default function SkillsCompactComponent(props) {
  return (
    <div className="uk-grid uk-flex-center uk-padding-small uk-hidden@m">
      <div
        id="tech-skills-compact"
        className="uk-padding-small uk-width-large uk-padding-remove-top"
      >
        <h2 className="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">
          <p>Stephon Autery</p>
        </h2>
        <hr />
        <p className="uk-padding-small uk-text-lead uk-padding-remove-bottom uk-padding-remove-top">
          Technical Skills
        </p>
        <p className="uk-padding-small uk-padding-remove-top  uk-padding-remove-bottom">
          HTML, CSS, JavaScript, TypeScript, ASP, React/Redux.js/Hooks, C++,
          Python, Node.js, NPM, MongoDB, Mongoose, Transact-SQL, NoSQL, OOP,
          Veeva CRM/CLM, MobileLocker CRM, Git, Adobe Creative Cloud Suite.
        </p>
        <ObjectiveComponent />
        <SectionsComponent />
      </div>
    </div>
  );
}
