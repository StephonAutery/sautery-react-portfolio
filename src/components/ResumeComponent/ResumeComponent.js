import React from "react";
import SkillsComponent from "./SkillsComponent";
import SkillsCompactComponent from "./SkillsCompactComponent";
import MobileLocker from "mobilelocker-tracking";

export default class ResumeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPro: true,
    };
  }s

  componentDidMount() {
    MobileLocker.logEvent('navigate', 'tap', '/resume');
    this.setState({
      skills: [
        "MERN Stack",
        "LAMP Stack",
        "UI/UX Design",
        "OOP",
        "TypeScript",
        "HTML",
        "CSS",
        "AJAX",
        "Bootstrap",
        "UIKit",
        "ASP",
        "React/Redux/Hooks",
        "JQuery",
        "JavaScript",
        "Express",
        "Passport",
        "Node.js",
        "RESTful API",
        "Mongoose",
        "MongoDB",
        "NoSQL",
        "MySQL",
        "Transact-SQL",
        "NPM",
        "Git",
        "Veeva CRM/CLM",
        "MobileLocker CLM/API",
        "Adobe Creative Suite",
      ],
      apiTypes: [
        "RESTful APIs",
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

  showSkills() {
    console.log(this.state);
    console.log("  oooo    ppppp    eeeeee   nn     nn");
    console.log(" oo  oo   pp  pp   ee       nnnn   nn");
    console.log("oo    oo  ppppp    eeeeee   nn  nn nn");
    console.log(" oo  oo   pp       ee       nn   nnnn");
    console.log("  oooo    pp       eeeeee   nn     nn");
    console.log("tttttt    oooo");
    console.log("  tt     oo  oo");
    console.log("  tt    oo    oo");
    console.log("  tt     oo  oo");
    console.log("  tt      oooo");
    console.log("ww     www     ww   oooo    rrrrr   kk  kk");
    console.log(" ww   ww ww   ww   oo  oo   rr rr   kk kk");
    console.log("  ww ww   ww ww   oo    oo  rrrr    kkkk");
    console.log("   www     www     oo  oo   rr rr   kk kk");
    console.log("    w       w       oooo    rr  rr  kk  kk");
  }

  render() {
    return (
      <>
        {this.showSkills()}
        <SkillsCompactComponent />
        <SkillsComponent />
      </>
    );
  }
}
