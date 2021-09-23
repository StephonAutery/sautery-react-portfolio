import React from "react";
import { SkillsComponent } from "../SkillsComponent";
import { SkillsCompactComponent } from "../SkillsCompactComponent";
// import { ObjectiveComponent } from "../ObjectiveComponent";
// import { ProfessionalComponent } from "../ProfessionalComponent";
// import { EducationComponent } from "../EducationComponent";
// import { PersonalComponent } from "../PersonalComponent";
// import { ProjectsComponent } from "../ProjectsComponent";

export default class ResumeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPro: true,
    };
  }

  showSkills() {
    console.info(this.state);
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
