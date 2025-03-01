import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";

import "./temp2.css";
let ref = React.createRef();

class Temp3 extends Component {
  render() {
    if (this.props) {
      var education = this.props.education.map(function (education) {
        return (
          <div key={education.institution}>
            <p className="info">
              <span className="degree"> {education.degree}</span>
              <span className="institution">{education.institution}</span>{" "}
              <br />
              <em className="date">
                {education.startDate} - {education.endDate}
              </em>
            </p>
            {/* <p>{education.description}</p> */}
          </div>
        );
      });
      var work = this.props.workHistory.map(function (work) {
        return (
          <div key={work.employer}>
            <p className="info">
              <span className="degree">{work.jobTitle}</span>
              <span className="institution">{work.employer}</span> <br />
              <em className="date">
                {work.startDateW} - {work.endDateW}
              </em>
            </p>
            <p>{work.cityW}</p>
            <p>{work.stateW}</p>
          </div>
        );
      });
      var skills =
        this.props.skills &&
        this.props.skills.map(function (skill) {
          return (
            <span
              //   className="ml-2"
              style={{
                // backgroundColor: "black",
                color: "black",
                // padding: "10px",
              }}
              key={skill}
            >
              <em>{skill} </em>
            </span>
          );
        });
    }
    return (
      <>
        <div
          class="collapse multi-collapse"
          id="multiCollapseExample3"
          ref={ref}
        >
          <div class="row mt-5 pt-5 mb-5">
            <div class="col-md-12 text-center">
              <h1>Preview 3</h1>
            </div>
          </div>

          {/* <div class="row">
            <div class="col-md-12">
              <div class="shadow-1-strong bg-white my-5 p-5" id="about">
                <div class="about-section">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <h2 class="h2 fw-light mb-4">Bio</h2>
                        </div>
                        <div class="col-md-5">
                          <div class="pb-2 fw-bolder">
                            <i
                              class="far fa-calendar-alt pe-2 text-muted"
                              style={{ width: "24px", opacity: 0.85 }}
                            ></i>{" "}
                            Age
                          </div>
                        </div>
                        <div class="col-md-7">
                          <div class="pb-2">28</div>
                        </div>
                        <div class="col-md-5">
                          <div class="pb-2 fw-bolder">
                            <i
                              class="far fa-envelope pe-2 text-muted"
                              style={{ width: "24px", opacity: 0.85 }}
                            ></i>{" "}
                            Email
                          </div>
                        </div>
                        <div class="col-md-7">
                          <div class="pb-2">walter@company.com</div>
                        </div>
                        <div class="col-md-5">
                          <div class="pb-2 fw-bolder">
                            <i
                              class="fab fa-skype pe-2 text-muted"
                              style={{ width: "24px", opacity: 0.85 }}
                            ></i>{" "}
                            Skype
                          </div>
                        </div>
                        <div class="col-md-7">
                          <div class="pb-2">username@skype.com</div>
                        </div>
                        <div class="col-md-5">
                          <div class="pb-2 fw-bolder">
                            <i
                              class="fas fa-phone pe-2 text-muted"
                              style={{ width: "24px", opacity: 0.85 }}
                            ></i>{" "}
                            Phone
                          </div>
                        </div>
                        <div class="col-md-7">
                          <div class="pb-2">+0718-111-0011</div>
                        </div>
                        <div class="col-md-5">
                          <div class="pb-2 fw-bolder">
                            <i
                              class="fas fa-map-marker-alt pe-2 text-muted"
                              style={{ width: "24px", opacity: 0.85 }}
                            ></i>{" "}
                            Address
                          </div>
                        </div>
                        <div class="col-md-7">
                          <div class="pb-2">
                            131 W, City Center, New York, U.S.A
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <span class="fw-bolder">HTML</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-info aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="100"
                            data-aos-anchor=".skills-section"
                            style={{ width: "95%" }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Master
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <span class="fw-bolder">CSS</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-info aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="200"
                            data-aos-anchor=".skills-section"
                            style={{ width: "85%" }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Expert
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <span class="fw-bolder">JavaScript</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-info aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="300"
                            data-aos-anchor=".skills-section"
                            style={{ width: "75%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Advance
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <span class="fw-bolder">WordPress</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-info aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="300"
                            data-aos-anchor=".skills-section"
                            style={{ width: "75%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Advance
                          </div>
                        </div>
                      </div>

                      <div class="mb-3">
                        <span class="fw-bolder">Adobe Photoshop</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-secondary aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="400"
                            data-aos-anchor=".skills-section"
                            style={{ width: "95%" }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Master
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <span class="fw-bolder">Adobe Illustrator</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-secondary aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="400"
                            data-aos-anchor=".skills-section"
                            style={{ width: "90%" }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Expert
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <span class="fw-bolder">Sketch</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-secondary aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="500"
                            data-aos-anchor=".skills-section"
                            style={{ width: "85%" }}
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Expert
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <span class="fw-bolder">Adobe XD</span>
                        <div
                          class="progress my-2 rounded"
                          style={{ height: "20px" }}
                        >
                          <div
                            class="progress-bar bg-secondary aos-init aos-animate"
                            role="progressbar"
                            data-aos="zoom-in-right"
                            data-aos-delay="600"
                            data-aos-anchor=".skills-section"
                            style={{ width: "75%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            Beginner
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="shadow-1-strong bg-white my-5 p-5" id="skills">
                <div class="skills-section">
                  <h2 class="h2 fw-light mb-4">About Me</h2>
                  <div class="row">
                    <div class="col-md-12">
                      <p>
                        Hello! I’m Walter Patterson. I am passionate about UI/UX
                        design and Web Design. I am a skilled{" "}
                        <strong>front-end developer</strong> and master of
                        graphic design tools such as Photoshop and Sketch. I am
                        a quick learner and a team worker that gets the job
                        done.
                      </p>
                      <p>
                        I can easily capitalize on low hanging fruits and
                        quickly maximize timely deliverables for real-time
                        schemas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="shadow-1-strong bg-white my-5 p-5" id="education">
                <div class="education-section">
                  <h2 class="h2 fw-light mb-4">Education</h2>
                  <div class="timeline">
                    <div
                      class="timeline-card timeline-card-success aos-init aos-animate"
                      data-aos="fade-in"
                      data-aos-delay="0"
                    >
                      <div class="timeline-head px-4 pt-3">
                        <div class="h5">
                          Masters in Information Technology{" "}
                          <span class="text-muted h6">
                            from International University
                          </span>{" "}
                        </div>
                      </div>
                      <div class="timeline-body px-4 pb-4">
                        <div class="text-muted text-small mb-3">
                          2011 - 2013
                        </div>
                        <div>
                          Leverage agile frameworks to provide a robust synopsis
                          for high level overviews. Iterative approaches to
                          corporate strategy foster collaborative thinking to
                          further the overall value proposition.
                        </div>
                      </div>
                    </div>
                    <div
                      class="timeline-card timeline-card-success aos-init aos-animate"
                      data-aos="fade-in"
                      data-aos-delay="200"
                    >
                      <div class="timeline-head px-4 pt-3">
                        <div class="h5">
                          Bachelor of Computer Science{" "}
                          <span class="text-muted h6">
                            from Regional College
                          </span>{" "}
                        </div>
                      </div>
                      <div class="timeline-body px-4 pb-4">
                        <div class="text-muted text-small mb-3">
                          2007 - 2011
                        </div>
                        <div>
                          Override the digital divide with additional
                          clickthroughs from DevOps. Nanotechnology immersion
                          along the information highway will close the loop on
                          focusing solely on the bottom line.
                        </div>
                      </div>
                    </div>
                    <div
                      class="timeline-card timeline-card-success aos-init"
                      data-aos="fade-in"
                      data-aos-delay="400"
                    >
                      <div class="timeline-head px-4 pt-3">
                        <div class="h5">
                          Science and Mathematics{" "}
                          <span class="text-muted h6">from Mt. High Scool</span>{" "}
                        </div>
                      </div>
                      <div class="timeline-body px-4 pb-4">
                        <div class="text-muted text-small mb-3">
                          1995 - 2007
                        </div>
                        <div>
                          User generated content in real-time will have multiple
                          touchpoints for offshoring. Organically grow the
                          holistic world view of disruptive innovation via
                          workplace diversity and empowerment.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="template3">
            <header>
              <div className="row row1 w-100">
                <div className="col1">
                  <h1 className="text-center">{this.props.firstname}</h1>
                  <h3 className="text-center h3">{this.props.lastname}</h3>

                  <span style={{ color: "black", paddingTop: "10px" }}>
                    I am {this.props.profession} having experience of{" "}
                    {this.props.experience}
                  </span>
                </div>
                <div className="col2">
                  <span>
                    {" "}
                    {this.props.city}, {this.props.state}{" "}
                  </span>
                  <span> {this.props.phone} </span>
                  <span> {this.props.email} </span>
                </div>
              </div>
            </header>
            <section id="details">
              <div className="aboutme mt-5">
                <h2>About Me</h2>
                <p>{this.props.summary}</p>
              </div>
              <div className="main">
                <div className="c1">
                  <div className="education mt-5">
                    {" "}
                    <h2>Education</h2>
                    <p>{education}</p>
                  </div>
                  <div className="mt-3 work">
                    <div className="three columns header-col">
                      <h1>
                        <span>Work</span>
                      </h1>
                    </div>

                    <div className="nine columns main-col">{work}</div>
                  </div>
                </div>
                <div className="c2">
                  <div className="skill mt-5">
                    <div className="three columns header-col">
                      <h1>
                        <span>Skills</span>
                      </h1>
                    </div>

                    <div className="nine listskills columns main-col">
                      <ul className="skills">{skills}</ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Pdf
            targetRef={ref}
            filename={this.props.firstname + " CV.pdf"}
            x={0.05}
            y={0.05}
          >
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                class="button btn btn-common"
                style={{ align: "center" }}
              >
                Generate a PDF{" "}
              </button>
            )}
          </Pdf>
        </div>
      </>
    );
  }
}

export default Temp3;
