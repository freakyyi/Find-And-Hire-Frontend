import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobPostForm extends Component {
    render() {
        return (
            <>
             
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner-header">
                                    <h3><b style={{color: "#55BC7E"}}>HAF</b> for employers <br/> Hire the perfect Employee</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="job-detail section pt-5">
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8">
                            <div class="page-login-form box" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div class="inner-header">
                                    <h3 class="text-center" style={{textTransform:"capitalize"}}>Let's get started</h3>
                                </div>
                                
                                <form class="login-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Company name for this
                                                    job</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Your role in the hiring
                                                    process</label>
                                                <div class="search-category-container">
                                                    <label class="styled-select">
                                                        <select style={{border: "1px solid #55BC7E", background:"none"}}>
                                                            <option value="none"></option>
                                                            <option value="none">New York</option>
                                                            <option value="none">California</option>
                                                            <option value="none">Washington</option>
                                                            <option value="none">Birmingham</option>
                                                            <option value="none">Chicago</option>
                                                            <option value="none">Phoenix</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">Job title</label>
                                        <input type="text" class="form-control" style={{border: "1px solid #55BC7E", background:"none"}}
                                            placeholder=""/>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">City</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">State/Province</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Zip Code</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner-header pt-3">
                                        <h3 class="text-center" style={{textTransform:"capitalize"}}>Can this job be performed
                                            remotely, meaning primarily from home?</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-2">
                                            <button class="btn btn-common"
                                                style={{background:"white", borderRadius: "10px", border: "2px solid #55BC7E", color: "#344863"}}>No
                                            </button>
                                        </div>
                                        <div class="col-md-6">
                                            <button class="btn btn-common"
                                                style={{background:"white", borderRadius: "10px", border: "2px solid #55BC7E", color: "#344863"}}>Temporarily
                                                due to COVID-19</button>
                                        </div>
                                        <div class="col-md-2">
                                            <button class="btn btn-common"
                                                style={{background:"white", borderRadius: "10px", border: "2px solid #55BC7E", color: "#344863"}}>Yes</button>
                                        </div>
                                    </div>

                                    <div class="inner-header pt-3">
                                        <h3 class="text-center" style={{textTransform:"capitalize"}}>How many hires?</h3>
                                    </div>

                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">What type of employment is it?*</label>
                                        <div class="search-category-container">
                                            <label class="styled-select">
                                                <select style={{border: "1px solid #55BC7E", background:"none"}}>
                                                    <option value="none"></option>
                                                    <option value="none">New York</option>
                                                    <option value="none">California</option>
                                                    <option value="none">Washington</option>
                                                    <option value="none">Birmingham</option>
                                                    <option value="none">Chicago</option>
                                                    <option value="none">Phoenix</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label pb-3">What contract type is it?</label>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <button class="btn btn-common"
                                                    style={{background:"white", borderRadius: "10px", border: "2px solid #55BC7E", color: "#344863"}}>Temporarily</button>
                                            </div>
                                            <div class="col-md-3">
                                                <button class="btn btn-common"
                                                    style={{background:"white", borderRadius: "10px", border: "2px solid #55BC7E", color: "#344863"}}>Contract</button>
                                            </div>
                                            <div class="col-md-3">
                                                <button class="btn btn-common"
                                                    style={{background:"white", borderRadius: "10px", border: "2px solid #55BC7E", color: "#344863"}}>Internship</button>
                                            </div>
                                            <div class="col-md-3">
                                                <button class="btn btn-common"
                                                    style={{background:"white", borderRadius: "10px", border: "2px solid #55BC7E", color: "#344863"}}>Commission</button>
                                            </div>
                    
                                        </div>
                                    </div>

                                    <div class="inner-header pt-3">
                                        <h3 class="text-center" style={{textTransform:"capitalize"}}>Salary</h3>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder="PKR 50,000"/>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                                <h3 class="text-center" style={{textTransform:"capitalize"}}>To</h3>

                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder="PKR 50,000"/>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <div class="search-category-container">
                                                    <label class="styled-select">
                                                        <select style={{border: "1px solid #55BC7E", background:"none"}}>
                                                            <option value="none">Per Month</option>
                                                            <option value="none">New York</option>
                                                            <option value="none">California</option>
                                                            <option value="none">Washington</option>
                                                            <option value="none">Birmingham</option>
                                                            <option value="none">Chicago</option>
                                                            <option value="none">Phoenix</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="inner-header pt-3">
                                        <h3 class="text-center" style={{textTransform:"capitalize"}}>Job description</h3>
                                    </div>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">Describe the responsibilities of this job, required work experience, skills, or education.</label>
                                        <textarea type="text" rows="8" class="form-control"
                                            style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                    </div>

                                    <div class="col-12 text-center mt-4">
                                        <Link to="job-planes" style={{background: "#55BC7E"}} class="btn btn-common">Post Job
                                            </Link>
                                    </div> 
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </section>
   
            </>
        );
    }
}

export default JobPostForm;
