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
      if (this.state.keywords !== "" || this.state.selectedLocation !== "") {
        let results = await requests.getScrapedResults(
          this.state.keywords,
          this.state.selectedLocation
        );
        this.setState({
          jobs: results,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  showResults = ()=> {
    if( this.state.keywords === "" || this.state.selectedLocation === ""){
      return(
        <>
        <p style={{ marginLeft :"220px", fontWeight :"bold", marginBottom:"20px"}}>Enter your keyword and Select the location 
        & Wait till we find you the jobs out there on the internet :)</p>
        </>
      )
    }
   
  }
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
        {this.showResults()}
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              {this.state.jobs.map((data, fields) => {
                return (
                  <div
                    class="content-area mb-5"
                    style={{ boxShadow: "0px 10px 22px #00000029" }}
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
                            color: "#00468b",
                            fontSize: "18px",
                            marginBottom: "10px",
                            fontWeight : "bold"
                          }}
                        >
                          {data.jobTitle}
                        </a>
                      </div>

                      <div class="col-md-2 ">
                        <label for="" style={{ color: "#000000" }}>
                          {data.date}
                        </label>
                      </div>
                      <div class="col-md-2 text-right">
                        <p
                          class="mb-0"
                          style={{ color: "#37383D", fontSize: "16px" }}
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
                      <div>
                        <p style={{ color: "#000000", fontSize: "13px" }}>
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
                      <div>
                        <p style={{ color: "#000000", fontSize: "13px" }}>
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
