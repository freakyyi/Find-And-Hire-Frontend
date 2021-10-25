import React, { Component } from "react";
import { Link } from "react-router-dom";
const requests = require("../axios/requests");

class JobNearMe extends Component {
  state = {
    selectedLocation: "",
    keywords: "",
    jobs: [],
  };
  selectLocation(e) {
    if (e.target.value === 0) {
      this.setState({
        selectedLocation: "",
      });
    } else {
      this.setState({
        selectedLocation: e.target.value,
      });
    }
  }

  setKeywords(e) {
    this.setState({
      keywords: e.target.value,
    });
  }

  getScrapedResults = async () => {
    try {
      if (this.state.keywords !== "" && this.state.selectedLocation !== "") {
        let results = await requests.getScrapedResults(
          this.state.keywords,
          this.state.selectedLocation
        );

        if (
          results === null ||
          results === "" ||
          results === undefined ||
          results.length === 0
        ) {
          console.log("");
          document.getElementById("Nojob").style.display = "block";
          document.getElementById("noerror").style.display = "none";
          document.getElementById("error").style.display = "none";
        } else {
          console.log("Here after getting a result");
          this.setState({
            jobs: results,
          });
          document.getElementById("noerror").style.display = "block";
          document.getElementById("Nojob").style.display = "none";
          document.getElementById("error").style.display = "none";
        }
      } else if (
        this.state.keywords === "" ||
        this.state.keywords === null ||
        this.state.selectedLocation === "" ||
        this.state.selectedLocation === null
      ) {
        console.log("im in else if");
        document.getElementById("error").style.display = "block";
        document.getElementById("noerror").style.display = "none";
        document.getElementById("Nojob").style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div class="page-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="inner-header">
                  <h3>The latest Posted Jobs Near You</h3>
                </div>
                <div class="job-search-form bg-cyan1 job-featured-search">
                  <form>
                    <div class="row justify-content-center">
                      <div class="col-lg-5 col-md-5 col-xs-12">
                        <div class="form-group  bg-cyan">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Job title or keywords"
                            onChange={(e) => {
                              this.setKeywords(e);
                            }}
                          />
                        </div>
                      </div>

                      <div class="search-category-container">
                        <label class="styled-select">
                          <select
                            onChange={(e) => {
                              this.selectLocation(e);
                            }}
                          >
                            <option value={0}>Locations</option>
                            <option value="islamabad">Islamabad</option>
                            <option value="lahore">Lahore</option>
                            <option value="rawalpindi">Rawalpindi</option>
                            <option value="sialkot">Sialkot</option>
                            <option value="faislabad">Faislabad</option>
                            <option value="multan">Multan</option>
                            <option value="peshawar">Peshawar</option>
                            <option value="quetta">Quetta</option>
                            <option value="sargodha">Sargodha</option>
                            <option value="abbottabad">Abbottabad</option>
                            <option value="bhawalnagar">Bhawalnagar</option>
                            <option value="hariPur">HariPur</option>
                            <option value="sargodha">Sargodha</option>
                            <option value="jehlum">Jehlum</option>
                            <option value="mansehra">Mansehra</option>
                            <option value="sahiwal">Sahiwal</option>
                          </select>
                        </label>
                      </div>
                      <div class="col-lg-1 col-md-1 col-xs-12">
                        <button
                          onClick={this.getScrapedResults}
                          type="button"
                          class="button"
                        >
                          <i class="lni-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="job-detail section pt-5">
          <p
            id="error"
            style={{
              display: "none",
              marginLeft: "220px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Please Enter both Keyword & location
          </p>
          <p
            id="noerror"
            style={{
              display: "none",
              marginLeft: "220px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Loading...
          </p>
          <p
            id="Nojob"
            style={{
              display: "none",
              marginLeft: "220px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            No Jobs are Available at this time
          </p>
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              {this.state.jobs.map((data, fields) => {
                return (
                  <div
                    class="content-area mb-5"
                    style={{
                      boxShadow: "0px 10px 22px #00000029",
                      borderRadius: 20,
                    }}
                  >
                    <div
                      class="row"
                      style={{ borderBottom: "1px solid #344863" }}
                    >
                      <div class="col-md-8">
                        <a
                          href={data.linkToJob}
                          target="_blank"
                          rel="noreferrer"
                          class="mb-0"
                          style={{
                            color: "#55BC7E",
                            fontSize: "18px",
                            marginBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {data.jobTitle}
                        </a>
                        <div >
                          <label
                            for=""
                            style={{ color: "#000000", marginBottom: "10px" }}
                          >
                            {data.date}
                          </label>
                        </div>
                      </div>

                      {/* <div class="col-md-2 ">
                        <label for="" style={{ color: "#000000" }}>
                          {data.date}
                        </label>
                      </div> */}
                      <div class="col-md-4 text-right">
                        <p
                          class="mb-0"
                          style={{
                            color: "#37383D",
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          Salary: {data.salary}
                        </p>
                      </div>
                    </div>

                    <p
                      style={{ color: "#37383D", fontSize: "14px" }}
                      class="pt-3"
                    >
                      Summary: {data.summary}
                    </p>

                    <div class="row">
                      <div class="pl-3 pr-5">
                        <p style={{ color: "#37383D", fontSize: "14px" }}>
                          Company:{" "}
                        </p>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#55BC7E",
                          height: 30,
                          borderRadius: 5,
                        }}
                      >
                        <p
                          style={{
                            color: "white",
                            fontSize: "13px",
                            textAlign: "center",
                            margin: "5px 10px 10px 5px",
                          }}
                        >
                          {data.company}
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="pl-3 pr-5">
                        <p style={{ color: "#37383D", fontSize: "14px" }}>
                          Location:{" "}
                        </p>
                      </div>
                      <div  style={{
                          backgroundColor: "#55BC7E",
                          height: 30,
                          borderRadius: 5,
                        }}> 
                        <p  style={{
                            color: "white",
                            fontSize: "13px",
                            textAlign: "center",
                            margin: "5px 10px 10px 5px",
                          }}>
                          {data.location}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="col-lg-2"></div>
          </div>
        </section>
      </>
    );
  }
}

export default JobNearMe;
