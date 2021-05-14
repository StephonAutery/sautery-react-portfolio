import React, { Component } from "react";
import "../util/sla-styles.css";

export default class Eductaion extends Component {
  state = {
    skills: [],
  };

  getSkills() {
    console.log(this.state.skills);
  }

  render() {
    return (
      <div uk-grid="true">
        {this.getSkills()}

        <div className="uk-width-1-3 uk-visible@s">
          <h3>
            <p className="right">technical skills</p>
          </h3>
          <hr />
          <p className="right">HTML5</p>
          <p className="right">CSS</p>
          <p className="right">JavaScript</p>
          <p className="right">ES6</p>
          <p className="right">jQuery</p>
          <p className="right">Bootstrap</p>
          <p className="right">AJAX</p>
          <p className="right">API</p>
          <p className="right">JSON</p>
          <p className="right">Git</p>
          <p className="right">Node.js</p>
          <p className="right">mySQL</p>
          <p className="right">Express</p>
          <p className="right">RESTful API</p>
          <p className="right">OOP</p>
          <p className="right">Testing</p>
        </div>

        <div className="uk-width-1-3 uk-width-large">
          <div className=" uk-hidden@s uk-padding uk-padding-remove-bottom uk-padding-remove-top">
            <p className="uk-text-lead">technical skills</p>
            <hr />
            <p>
              HTML5, CSS, JavaScript, ES6, jQuery, Bootstrap, AJAX, RESTful API,
              API, JSON, Git, Node.js, mySQL, Express
            </p>
          </div>

          <div id="objective" className="">
            <p className="uk-padding uk-padding-remove-bottom uk-padding-remove-top uk-text-lead">
              objective
            </p>
            <p className="uk-padding uk-padding-remove-bottom uk-padding-remove-top">
              Seeking employment in a dynamic environment where I can use my
              years of technology experience to advance business goals. I have
              development experience using Agile Software Development
              methodologies, tools and workflows to specify, purchase,
              configure, manage and secure technology in mid-sized and large
              production environments.
            </p>
            <br />
          </div>

          <ul uk-accordion="true">
            <li id="pro-experience">
              <a className="uk-accordion-title uk-text-lead" href="1">professional experience</a>
              <div className="uk-accordion-content">
                <p>list goes here</p>
              </div>
            </li>
            <li id="education">
              <a className="uk-accordion-title uk-text-lead" href="1">education</a>
              <div className="uk-accordion-content">
                  <h4>2021<br></br>Certified Full Stack Developer</h4>
                  <p className="uk-text-meta uk-text-success">
                  UC Berkeley Coding Bootcamp - San Francisco, CA
                  </p>
                  <h4>1991<br></br>BS, Mechanical Engineering</h4>
                  <p className="uk-text-meta uk-text-success">
                    North Carolina State University - Raleigh, NC
                  </p>
                  <p>
                    Completed degree requirements while working full time and
                    serving in the United States Marine Corps.
                  </p>
              </div>
            </li>
          </ul>

          <hr></hr>

          <hr></hr>

          <hr></hr>
        </div>
      </div>
    );
  }
}
