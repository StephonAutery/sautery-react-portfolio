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
            <p className="uk-padding uk-padding-remove-bottom uk-padding-remove-top uk-text-lead">objective</p>
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

          <div id="resume" className="uk-padding uk-padding-remove-top">
            <ul uk-accordion="true uk-width-medium">
           
               <hr></hr>

              <li id="education">
                <a className="uk-accordion-title" href="education">
                  <p className="uk-text-lead">education</p>
                </a>
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

              <hr></hr>

              <li id="pers-info">
                <a className="uk-accordion-title" href="pers-info">
                  <p className="uk-text-lead">personal information</p>
                </a>
                <div className="uk-accordion-content">
                  <p>
                    Father of 2 awesome kids, sewist, musician and animal lover.
                    I have raised 2 children and I knit and sew clothing for
                    them as well as playing guitar and Mandolin. I have assisted
                    in the care, fostering and placement of 62 puppies or
                    homeless dogs, and raised over $9,500.00 for Leukemia -
                    Lymphoma cancer research.
                  </p>
                </div>
              </li>

              <hr></hr>

              <li id="projects">
                <a className="uk-accordion-title" href="projects">
                  <p className="uk-text-lead">projects</p>
                </a>
                <div className="uk-accordion-content">
                  <ul>
                    <li>
                      <h4>
                        <a
                          href="https:ucb-batman.herokuapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bay Area Trail Maps and Networking
                        </a>
                      </h4>
                      <p>
                        B.A.T.M.a.N : is a community hub and a toolset for
                        outdoor enthusiasts to find new trails, new communities
                        and new adventures in the Bay-Area. Pick a trail, find
                        community, get outside!
                      </p>
                      <p>
                        This application is the result of a team effort, the
                        second project assignment during my recent sudies in the
                        UC Berkeley Extension's Fullstack Web Developer
                        curriculum.
                      </p>
                      <h5>
                        <p>
                          contributors: Stephon Autery, Dan Fellows, Bradley
                          Davis and Sam "&iexcl;Poppe!" Poppe.
                        </p>
                      </h5>
                      <p>
                        <a
                          href="https://github.com/davisbradleyj/ucb-batman"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub repository
                        </a>
                      </p>
                      <hr />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h4>
                        <a
                          href="https://stephonautery.github.io/a-simple-calculator/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          a simple calculator
                        </a>
                      </h4>
                      <p>Stephon Autery</p>
                      <p>
                        A very simple JavaScript calculator optimized for
                        touch-screen devices.
                      </p>
                      <p>
                        <a
                          href="https://github.com/StephonAutery/a-simple-calculator"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub repository
                        </a>
                      </p>
                      <hr />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h4>
                        <a
                          href="https://stephonautery.github.io/2020-stephon-autery-a-timed-quiz/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          a timed quiz
                        </a>
                      </h4>
                      <p>Stephon Autery</p>
                      <p>
                        css, javascript, bootstrap CDN and JQuery are used to
                        create a quiz. Take the quiz, test your self and compare
                        your score with that of others.
                      </p>
                      <p>
                        <a
                          href="https://github.com/StephonAutery/2020-stephon-autery-a-timed-quiz"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub repository
                        </a>
                      </p>
                      <hr />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h4>
                        <a
                          href="https://stephonautery.github.io/2020-weather-dashboard/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Weather Dashboard
                        </a>
                      </h4>
                      <p>Stephon Autery</p>
                      <p>
                        A Weather Dashboard that will run in the browser and
                        feature dynamically updated HTML and CSS.
                      </p>
                      <p>
                        <a
                          href="https://github.com/StephonAutery/2020-weather-dashboard"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub repository
                        </a>
                      </p>
                      <hr />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h4>
                        <a
                          href="https://history-portal.herokuapp.com/landing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          History Portal
                        </a>
                      </h4>
                      <p>Stephon Autery</p>
                      <p>History Portal is a Social Awareness Application.</p>
                      <p>
                        I hope you'll play with your friends and discover
                        something about our country and yourself.
                      </p>
                      <p>
                        <a
                          href="https://github.com/StephonAutery/history-portal"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub repository
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}