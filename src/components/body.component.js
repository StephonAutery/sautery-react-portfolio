import React, { Component } from "react";
import "../util/sla-styles.css";

export default class Eductaion extends Component {
  state = {
    skills: ["HTML", "CSS", "JavaScript", "AJAX", "JQuery", "Bootstrap", "UIKit", "UI/UX Design", "React/Redux/Hooks","API", "Git", "Node.js", "Express", "Passport", "MySQL", "Transact-SQL", "NoSQL"]
  };

  showSkills() {
    console.log(this.state.skills);
    console.log(window.innerWidth);
    console.log("  oooo    ppppp    eeeeee   nn     nn       tttttt    oooo        ww     www     ww   oooo    rrrrrr   kk  kk");
    console.log(" oo  oo   pp  pp   ee       nnnn   nn         tt     oo  oo        ww   ww ww   ww   oo  oo   rr  rr   kk kk");
    console.log("oo    oo  ppppp    eeeeee   nn  nn nn         tt    oo    oo        ww ww   ww ww   oo    oo  rrrr     kkkk");
    console.log(" oo  oo   pp       ee       nn   nnnn         tt     oo  oo          www     www     oo  oo   rr rr    kk kk");
    console.log("  oooo    pp       eeeeee   nn     nn         tt      oooo            w       w       oooo    rr  rr   kk  kk");
  }

  render() {
    return (
      <div uk-grid="true">
        {this.showSkills()}

        <div id="tech-skills tall" className="uk-width-1-3 uk-visible@s">
          <h2 className="uk-padding uk-padding-remove-right uk-padding-remove-top uk-padding-remove-bottom">
            <p className="right uk-text-nowrap">Stephon Autery</p>
          </h2>
          <hr />
          <p className="right uk-text-lead">technical skills</p>
          <p className="right">HTML</p>
          <p className="right">CSS</p>
          <p className="right">JQuery</p>
          <p className="right">JavaScript</p>
          <p className="right">AJAX</p>
          <p className="right">Bootstrap</p>
          <p className="right">UIKit</p>
          <p className="right">UI/UX Design</p>
          <p className="right">React/Redux/Hooks</p>
          <p className="right">API</p>
          <p className="right">Git</p>
          <p className="right">Node.js</p>
          <p className="right">Express</p>
          <p className="right">Passport</p>
          <p className="right">MySQL</p>
          <p className="right">Transact-SQL</p>
          <p className="right">NoSQL</p>
        </div>

        <div className="uk-width-1-3 uk-width-large">
          <div
            id="tech-skills compact"
            className=" uk-hidden@s uk-padding uk-padding-remove-bottom uk-padding-remove-top"
          >
            <h2 className="uk-padding uk-padding-remove-left uk-padding-remove-top uk-padding-remove-bottom">
              <p className="">Stephon Autery</p>
            </h2>
            <hr />
            <p className="uk-text-lead">technical skills</p>
            <p>
              HTML, CSS, JQuery, JavaScript, AJAX, Bootstrap, UIKit, UI/UX Design, React/Redux/Hooks, API, Git,
              Node.js, Express, Passport, MySQL, Transact-SQL, NoSQL
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

          <div id="resume" className="uk-padding uk-padding-remove-top">
            <ul uk-accordion="true uk-width-medium">
              <li id="professional experience">
                <a className="uk-accordion-title" href="pro-exp">
                  <p className="uk-text-lead">professional experience</p>
                </a>
                <div className="uk-accordion-content">
                  <ul uk-accordion="true">
                    <li id="Autery Household">
                      <a className="uk-accordion-title" href="ChannelAdviser">
                        2007 - 2019<br></br>Autery Household<br></br>
                        <span className="uk-text-meta">San Leandro, CA</span>
                      </a>
                      <p className="uk-text-success">Homemaker</p>
                      <div className="uk-accordion-content">
                        <p>
                          •{" "}
                          <span className="uk-text-bold">
                            Primary Caregiver and Household Manager:
                          </span>{" "}
                          Planned meals, scheduled activities, managed
                          healthecare issues and coordinated activities among
                          all members of a family of four, 3 dogs and 12
                          chickens while my Wife traveled 35% - 40% of the year
                          and worked 50 – 60 hours a week as part of her job
                          duties.
                        </p>
                        <p>
                          •{" "}
                          <span className="uk-text-bold">
                            Early Childhood Education:
                          </span>{" "}
                          Taught both our children to read and write at 3 years
                          old.
                        </p>
                        <p>
                          •{" "}
                          <span className="uk-text-bold">
                            Household Upgrades:
                          </span>{" "}
                          Completed daily household maintenance and a complete
                          overhaul and upgrade of the garden and irrigation,
                          plumbing, and electrical systems in a 99 year old
                          Craftsman style home with documented compliance to
                          city code requirements.
                        </p>
                        <p>
                          • <span className="uk-text-bold">Swim Team:</span>{" "}
                          Volunteer Snack Shop Back of House (BOH) Manager for
                          four years. Managed all BOH operations, coordinating
                          with the Kitchen Manager to organize up to 6 BOH
                          volunteers per meet over the course of a 12 meet
                          season. Specified and purchased and prepared all food,
                          supplies and sundries to run 2 grills and 2 cook
                          stations to serve hot breakfast sandwhiches and tacos
                          on-site during meets resulting in average profits of
                          up to $900.00 per meet.{" "}
                          <span className="uk-text-italic">
                            Nominated for Swim Team Board of Directors 3 years
                            in a row.
                          </span>
                        </p>
                      </div>
                      <hr className="HorizontalLine"></hr>
                    </li>
                    <li id="GreenStreet">
                      <a className="uk-accordion-title" href="ChannelAdviser">
                        2003 - 2017<br></br>Green Street Media<br></br>
                        <span className="uk-text-meta">San Leandro, CA</span>
                      </a>
                      <p className="uk-text-success">Principal</p>
                      <div className="uk-accordion-content">
                        <p>
                          Developed web applications integrating HTML, CSS, ASP,
                          C++, JavaScript, MSAccess, Transact-SQL and the entire Adobe
                          Creative Cloud suite of products for a diverse client
                          base. Developed print, videography and multimedia
                          campaigns for local non-profits. Rapidly developed
                          film projects for screening at International Film
                          Festivals and SAG (Screen Actor’s Guild) productions.
                        </p>
                        <p>
                          <span className="uk-text-bold">
                            Measure LL - Video Campaign
                          </span>
                          <br></br>
                          <span className="uk-text-meta">
                            Producer, Director, Editor - TV/WWW Video Campaign
                          </span>
                          <br></br>• Created a series of Campaign Ads in support
                          of the Coalition for Police Accountability. The
                          measure would establish a Police Commission to oversee
                          the Police Department's policies and procedures, and a
                          Community Police Review Agency to investigate
                          complaints of police misconduct and recommend
                          discipline. Ads ran on local TV stations and in
                          on-line outreach campaigns. Measure LL passed with
                          83.19% of the vote.<br></br>
                          <span className="uk-text-warning">
                            See the Ads here:
                          </span>
                          <br></br>
                          <a
                            href="http://www.stephonautery.com/truth/truth.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Coalition for Police Accountability
                          </a>
                        </p>
                        <p>
                          <span className="uk-text-bold">
                            UnCommon Law: Homecoming
                          </span>
                          <br></br>
                          <span className="uk-text-meta">
                            Producer, Director, Videographer, Editor - Event
                            Videography and Print Campaign
                          </span>
                          <br></br>• Designed and supervised the production of a
                          print media campaign for the organization's UnCommon
                          Law: UnCommon Homecoming event to raise money for
                          UnCommon Law services and operations.
                          <br></br>
                          <span className="uk-text-warning">
                            See the posters here:
                          </span>
                          <br></br>
                          <a
                            href="http://stephonautery.com/UnCommon/posters.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            UnCommon Law Posters
                          </a>
                          <br></br>
                          Acted as Producer, Lead Videographer and Director of
                          the UnCommon Law: UnCommon Homecoming event
                          documentary movie.
                          <br></br>
                          <span className="uk-text-warning">
                            See the event movie here:
                          </span>
                          <br></br>
                          The campaign raised almost a quarter million dollars
                          and was the most succesful fund-raising campaign in
                          the organization's history.
                          <br></br>
                          <a
                            href="http://www.stephonautery.com/truth/truth.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            UnCommon Law: UnCommon Homecoming
                          </a>
                        </p>
                        <p>
                          <span className="uk-text-bold">
                            2017 - Are You Safe - 48 Hour Film Project
                          </span>
                          <br></br>
                          <span className="uk-text-meta">
                            Writer, Producer, Director, Videographer, Editor
                          </span>
                          <br></br>• Recruited and supervised a 12 person crew
                          of actors and artists to write, produce and edit a
                          short film in 48 hours. Acted as Co-Writer, Producer
                          and Director on the project.
                          <br></br>
                          <span className="uk-text-warning">
                            See the movie here:
                          </span>
                          <br></br>
                          <a
                            href="http://www.stephonautery.com/fiction/fiction.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2017 - Are You Safe
                          </a>
                        </p>
                        <p>
                          <span className="uk-text-bold">
                            2014 - I Miss You When You're Gone - 48 Hour Film
                            Project
                          </span>
                          <br></br>
                          <span className="uk-text-meta">
                            Writer, Producer, Director, Videographer, Editor
                          </span>
                          <br></br>
                          Recruited and supervised a 14 person crew of actors
                          and artists to write, produce, and edit a short film
                          in 48 hours. Acted as Co-Writer, Producer and Director
                          on the project.
                          <br></br>
                          <span className="uk-text-warning">
                            See the movie here:
                          </span>
                          <br></br>
                          <a
                            href="http://www.stephonautery.com/fiction/fiction.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2014 - I Miss You When You're Gone
                          </a>
                        </p>
                        <p>
                          <span className="uk-text-bold">
                            Desiree Cafe - In the Presidio
                          </span>
                          <br></br>
                          <span className="uk-text-meta">
                            Full Stack Website Development - Contract
                          </span>
                          <br></br>
                          Used HTML, CSS, ASP, C++, JavaScript and SQL server to
                          developed an intertactive web application
                          incorporating a menu management system for the
                          restaurents staff and a public facing ordering system
                          resulting in a 35% increase in on-site sales, a 10%
                          increase in food sales in the larger San Francisco bay
                          area and a 22% increase in event bookings throughout
                          California.
                          <br></br>
                          <span className="uk-text-warning">
                            See the movie here:
                          </span>
                          <br></br>
                          <a
                            href="http://www.stephonautery.com/fiction/fiction.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            2017 - Are You Safe
                          </a>
                        </p>
                      </div>
                      <hr className="HorizontalLine"></hr>
                    </li>
                    <li id="ChannelAdviser">
                      <a className="uk-accordion-title" href="ChannelAdviser">
                        2000 - 2002<br></br>Channel Advisor Corporation<br></br>
                        <span className="uk-text-meta">Morrisville, NC</span>
                      </a>
                      <p className="uk-text-success">
                        Director Information Systems
                      </p>
                      <div className="uk-accordion-content">
                        <p>
                          • Configured, installed and maintained 98 server class
                          computers, 80 workstations and other peripheral assets
                          including hubs, switches, routers, load balancers,
                          firewalls and assorted business technology across 2
                          sites and 3 computing environments.
                        </p>
                        <p>
                          • Managed assets valued in excess of 10 million
                          dollars, including 5 corporate servers, 42 staging
                          servers and 51 production servers in a co-located
                          server farm and provided 24/7/365 support of
                          production and corporate facilities and personell.
                        </p>
                        <p>
                          • Maintained 99.89% overall uptime during my
                          employment as Director Information Systems resulting
                          in Channel Advisor Corporation being recognized as an
                          industry leader in service availability.
                        </p>
                        <p>
                          • Configured and managed Microsoft Windows Advance
                          Server, Cluster Server, Windows NT, SQL Server,
                          Microsoft Internet Information Server, and Microsoft
                          Exchange Server in a co-located, mixed-mode server
                          farm resulting in a marked increase in reliability,
                          scalability and availability.
                        </p>
                        <p>
                          • Supervised the migration of all technical operations
                          from Windows NT, SQL Server, Microsoft Exchange Server
                          and IIS to Windows Advanced Server, Windows Cluster
                          Server, SQL Server, Microsoft Exchange Server and IIS.
                        </p>
                        <p>
                          • Installed, configured and managed Microsoft Exhcange
                          Server and connected Corporate MSExchange Server
                          accross Point to Point ISDN to production site
                          utilizing Multiple information Stores, Site
                          Connectors, Internet Mail Services and Outlook Web
                          Access. Implemented company wide collaboration tools
                          utilizing Public Information Stores and Microsoft
                          Outlook.
                        </p>
                        <p>
                          • Relocated co-located production assets valued in
                          excess of 7.5 million dollars to new co-location
                          production facilities. Project completed 3 weeks ahead
                          of schedule, utilizing less than 60% of allocated
                          funds with less than 12 hours of down-time on
                          production site.
                        </p>
                        <p>
                          • Selected vendors, specified equipment and executed
                          all corporate technology purchases while staying
                          within budgetary constraints resulting in significant
                          savings to Channel Advisor Corporation.{" "}
                        </p>
                        <p>
                          • Hired and managed a 4 person team-oriented
                          Information Technology (IT) staff to monitor, maintain
                          and efficiently manage all aspects of Channel Advisor
                          technical operations on a 24 hour basis resulting in
                          increased customer satisfaction and a 23% increase in
                          sytem-wide availability.
                        </p>
                      </div>
                      <hr className="HorizontalLine"></hr>
                    </li>
                    <li id="NCASO">
                      <a className="uk-accordion-title" href="IHI">
                        1998 - 2000<br></br>North Carolina Administrative
                        Services Organization<br></br>
                        <span className="uk-text-meta">Durham, NC</span>
                      </a>
                      <p className="uk-text-success">
                        Director Information Services
                      </p>
                      <div className="uk-accordion-content">
                        <p>
                          • Planned, installed and maintained enterprise-wide
                          LAN/WAN and all aspects of network file servers and
                          all telecom/PBX equipment, including Nortel Meridian
                          phone switches.
                        </p>
                        <p>
                          • Specified, acquired, configured and implemented all
                          Internet/WAN technology including all routers,
                          switches and hubs, installed all premise wiring
                          (EIA/TIA 568B) resulting in substantial cost savings.
                        </p>
                        <p>
                          • Installed, configured and managed Microsoft Exhcange
                          Server. Connected MSExchange Server accross Point to
                          Point ISDN to several sites utilizing Multiple
                          information Stores, Site Connectors, Internet Mail
                          Services and Outlook Web Access. Implemented company
                          wide collaboration tools utilizing Public Information
                          Stores.
                        </p>
                        <p>
                          • Specified aproximately $1,250,000.00 in
                          organizational technology purchases.
                        </p>
                        <p>
                          • Designed, implemented and managed all aspects of
                          corporate World Wide Web presence, database
                          development and vendor selection resulting in a 40%
                          increase in organization membership.
                        </p>
                      </div>
                      <hr className="HorizontalLine"></hr>
                    </li>
                    <li id="IHI">
                      <a className="uk-accordion-title" href="IHI">
                        1996 - 1998<br></br>International Heritage Inc.<br></br>
                        <span className="uk-text-meta">Raleigh, NC</span>
                      </a>
                      <p className="uk-text-success">
                        Manager Information Systems
                      </p>
                      <div className="uk-accordion-content">
                        <p>
                          • Improved corporate comminications across
                          internationally dispersed sites by planning,
                          installing, and maintaining all enterprise LAN/WAN
                          equipment consisting of 3 Cisco 2500 routers, 5 Cisco
                          1600 routers, and 2 Ascend P75 routers resulting in
                          minimized down time and improved customer
                          satisfaction.
                        </p>
                        <p>
                          • Installed, configured and managed multi-site
                          corporate-wide Microsoft Exhcange Server. Connected
                          MSExchange Servers accross Point to Point ISDN to
                          several sites in the US and Canada utilizing Multiple
                          information Stores, Site Connectors and the Internet
                          Mail Service. Implemented company wide collaboration
                          tools utilizing Public Information Stores.
                        </p>
                        <p>
                          • Managed all server hardware and operating systems
                          including 6 Compaq Prosignia class servers running
                          Windows NT 4.0, 1 Hewlett Packard 9000 series K220
                          running HP/UX v10.20, 1 HP NetServer LM running SCO
                          UNIX.
                        </p>
                        <p>
                          • Configured and managed legacy telecom/PBX equipment,
                          including 2 ADIX-M phone switches, acquired and
                          implemented updated 1250 user telecom/PBX equipment.
                        </p>
                      </div>
                      <hr className="HorizontalLine"></hr>
                    </li>
                    <li id="Duke">
                      <a className="uk-accordion-title" href="Duke">
                        1994 - 1996<br></br>Duke University Department of
                        Neurobiology<br></br>
                        <span className="uk-text-meta">Durham, NC</span>
                      </a>
                      <p className="uk-text-success">Network Systems Analyst</p>
                      <div className="uk-accordion-content">
                        <p>
                          • Planned, installed and managed departmental Novell
                          Netware, Windows NT file-servers, UNIX mail-server,
                          Ethernet/Appletalk LAN/WAN.
                        </p>
                        <p>
                          • Installed, maintained and supported 350 workstations
                          and users.
                        </p>
                        <p>
                          • Specified approximately $350,000.00 in departmental
                          technology purchases on a yearly basis.
                        </p>
                      </div>
                      <hr className="HorizontalLine"></hr>
                    </li>
                    <li id="USMC">
                      <a className="uk-accordion-title" href="USMC">
                        1985 - 1992<br></br>United States Marine Corps<br></br>
                        <span className="uk-text-meta">Camp LeJeune, NC</span>
                      </a>
                      <p className="uk-text-success">
                        Infantry Officer, 2nd Marines, 2nd Battalion
                      </p>
                      <div className="uk-accordion-content">
                        <p>
                          • Led, disciplined, administered, motivated and
                          counseled United States Marines while completing
                          mission objectives.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <hr></hr>
              </li>

              <li id="education">
                <a className="uk-accordion-title" href="education">
                  <p className="uk-text-lead">education</p>
                </a>
                <div className="uk-accordion-content">
                  <h4>
                    2021<br></br>Certified Full Stack Developer
                  </h4>
                  <p className="uk-text-meta uk-text-success">
                    UC Berkeley Coding Bootcamp - San Francisco, CA
                  </p>
                  <h4>
                    1991<br></br>BS, Mechanical Engineering
                  </h4>
                  <p className="uk-text-meta uk-text-success">
                    North Carolina State University - Raleigh, NC
                  </p>
                  <p>
                    Completed degree requirements while working full time and
                    serving in the United States Marine Corps.
                  </p>
                </div>
                <hr></hr>
              </li>

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
                <hr></hr>
              </li>

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
