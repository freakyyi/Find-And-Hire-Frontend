import React from "react";
import { Link } from "react-router-dom";
const requests = require("../axios/requests");
const ls = require("local-storage");
class Category extends React.Component {
  state = {
    // title: "",
    // company: "",
    // date: "",
    // location: "",
    // salary: "",
    // description: "",
    // skills: "",
    jobs: [],
    filteredJobs: [],
    keywords: "",
    selectedLocation: "",
  };

  setKeywords(e) {

    this.setState({
      keywords: e.target.value,
    });
    
  }

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



  

  // formatSkills(data){
  //   let a = ''
  //   for (let i = 0; i < data.length; i++) {
  //   a= a.concat(data[i].concat(','))

  //   }
  // }

  getJobs = async () => {
    try {
      if (
        this.state.keywords === "" ||
        this.state.selectedLocation === "" ||
        this.state.keywords === null ||
        this.state.selectedLocation === null
      ) {
        let results = await requests.getJobs();
        this.setState({
          jobs: results,
          filteredJobs: results,
        });
        console.log("jaabs",this.state.filteredJobs)
      } else if (
        this.state.keywords !== "" ||
        this.state.selectedLocation !== "" ||
        this.state.keywords !== null ||
        this.state.selectedLocation !== null
      ) {
        console.log("NULL");
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getJobs();
  }
  filterResults =() =>  {
    
    let keywords = this.state.keywords
    var newArray = this.state.filteredJobs.filter(function (el) {
      console.log("el is : ",el.title)
      console.log(el.title === keywords)
      return el.title === keywords
      // if (el.title === keywords) {
      //   return el
      // }else{
      //   return
      // }
      
      
    });
    this.setState({
      filteredjobs: newArray,
    }); 

    console.log("filteredd",newArray)
  }


  render() {
    return (
      <>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-header">
                  <h3>Your Dream Job Is Waiting for you</h3>
                </div>
                <div className="job-search-form bg-cyan1 job-featured-search">
                  <form>
                    <div className="row justify-content-center">
                      <div className="col-lg-5 col-md-5 col-xs-12">
                        <div className="form-group  bg-cyan">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Job title or keywords"
                            onChange={(e) => {
                              this.setKeywords(e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
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
                          <i className="lni-map-marker"></i>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-1 col-xs-12">
                        <button type="button" className="button" onClick = {this.filterResults}>
                          <i className="lni-search"></i>

                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="job-detail section pt-5">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="sideber ml-5"
                style={{ boxShadow: "0px 10px 22px #00000029" }}
              >
                <div className="widghet">
                  <h6 style={{ color: "black" }}>Search by job type</h6>
                </div>
                <div
                  className="form-group"
                  style={{
                    borderBottom: " 1px solid #344863",
                    paddingBottom: "30px",
                  }}
                >
                  <div className="search-category-container">
                    <label className="styled-select">
                      <select>
                        <option value={0}>Full time job</option>
                        <option value="Remote">Remote</option>
                        <option value="Non Remote">Non Remote</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="widghet">
                  <h6 style={{ color: "black" }}>Select Job Category</h6>
                </div>
                <div
                  className="form-check"
                  style={{
                    borderBottom: " 1px solid #344863",
                    paddingBottom: "30px",
                  }}
                >
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Information Technology
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Edcuation/Training
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Consultants
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Accounting / Taxation
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Health And Fitness
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Call Centre
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Electronics
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Engineering
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Media/Communications
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Real Estate/Property
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Banking/Financial Services
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Advertising / PR
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                </div>
                <div className="widghet mt-3">
                  <h6 style={{ color: "black" }}>Experience</h6>
                </div>
                <div
                  className="form-check"
                  style={{
                    borderBottom: " 1px solid #344863",
                    paddingBottom: "30px",
                  }}
                >
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Less than 3 Years
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        3-5 Years
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        5-10 Years
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-8 col-md-4 col-xs-2">
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        More than 10 Years
                      </label>
                    </div>
                    <div className="col-lg-2 col-md-4 col-xs-4">
                      <input
                        className="form-check-input text-right"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              {this.state.filteredJobs.map((data, fields) => {
                return (
                  <>
                    <div
                      className="content-area mb-5"
                      style={{ boxShadow: "0px 10px 22px #00000029" }}
                    >
                      <div
                        className="row"
                        style={{ borderBottom: "1px solid #344863" }}
                      >
                        <div className="ml-3">
                          <span>
                            <img
                              style={{
                                borderRadius: "100%",
                                height: "42px",
                                width: "42px",
                              }}
                              src="assets/img/blog/blog1.jpg"
                              alt=""
                            />
                          </span>
                        </div>
                        <div
                          className="col-md-8"
                          style={{ marginRight: "120px" }}
                        >
                          <p
                            className="mb-0"
                            style={{ color: "#37383D", fontSize: "16px" }}
                          >
                            {data.title}
                          </p>
                          <label
                            for=""
                            style={{ color: "#37383D", marginRight: "10px" }}
                          >
                            {data.createdAt.slice(0, 10)}
                          </label>
                          <label
                            for=""
                            style={{
                              color: "#37383D",
                              marginRight: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            {data.company}
                          </label>
                          <label
                            for=""
                            style={{ color: "#37383D", marginLeft: "10px" }}
                          >
                            {data.selectedLocation}
                          </label>
                        </div>
                        <div className="col-md-1 text-right">
                          <p
                            className="mb-0"
                            style={{ color: "#37383D", fontSize: "16px" }}
                          >
                            {data.lowerSalary}
                          </p>
                        </div>
                        To
                        <div className="col-md-1 text-right">
                          <p
                            className="mb-0"
                            style={{
                              color: "#37383D",
                              fontSize: "16px",
                              float: "left",
                            }}
                          >
                            {data.upperSalary}
                          </p>
                        </div>
                      </div>

                      <p
                        style={{ color: "#37383D", fontSize: "12px" }}
                        className="pt-3"
                      >
                        {data.description}
                      </p>

                      <div class="row">
                        <div className="pl-3 pr-2">
                          <p
                            style={{
                              color: "#37383D",
                              fontSize: "16px",
                              marginRight: "0px",
                            }}
                          >
                            Skills:
                          </p>
                        </div>
                        <div>
                          {data.skills.map((data, fields) => {
                            return (
                              <Link
                                style={{
                                  background: "#55BC7E",
                                  color: "white",
                                  borderRadius: "5px;",
                                  paddingTop: "4px",
                                  marginRight: "5px",
                                }}
                                className="p-1"
                              >
                                {data}
                              </Link>
                            );
                          })}
                        </div>
                        <button type="button" class="apply">
                          Apply
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Category;
