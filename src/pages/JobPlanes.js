import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobPlanes extends Component {
    render() {
        return (
            <>
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner-header">
                                    <h3>Choose your "HOT JOB" Plan!!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="pricing" class="section bg-gray">
                    <div class="container">
                        <div class="row pricing-tables">
                            <div class="col-lg-4 col-md-4 col-xs-12">
                                <div class="pricing-table">
                                    <div class="pricing-details">
                                        <span>
                                            <img src="assets/img/job1.svg" style={{width: "250px",height: "250px", margin:" 0 auto", display: "block"}} alt=""/>
                                        </span>
                                        <ul>
                                            <li style={{color: "#344863;"}}>Job Exposure on Homepage for 3 days</li>
                                            <li style={{color: "#344863;"}}>You'll get </li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                        
                                        </ul>
                                    </div>
                                    <div class="plan-button">
                                        <Link to="category" class="btn btn-border">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-xs-12">
                                <div class="pricing-table">
                                    <div class="pricing-details">
                                        <span>
                                            <img src="assets/img/job3.svg" style={{width: "250px",height: "250px", margin:" 0 auto", display: "block"}} alt=""/>
                                        </span>
                                        <ul>
                                            <li style={{color: "#344863;"}}>Job Exposure on Homepage for 10 days</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                        
                                        </ul>
                                    </div>
                                    <div class="plan-button">
                                        <Link to="category" class="btn btn-border">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-xs-12">
                                <div class="pricing-table">
                                    <div class="pricing-details">
                                        <span>
                                            <img src="assets/img/job4.svg" style={{width: "250px",height: "250px", margin:" 0 auto", display: "block"}} alt=""/>
                                        </span>
                                        <ul>
                                            <li style={{color: "#344863;"}}>Job Exposure on Homepage for 15 days</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                            <li style={{color: "#344863;"}}>You'll get</li>
                                        
                                        </ul>
                                    </div>
                                    <div class="plan-button">
                                        <Link to="category" class="btn btn-border">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 text-center mt-2 mb-3">
                    <Link to="quiz" style={{background: "#55BC7E"}} class="btn btn-common">Continue & Post
                        </Link>
                </div> 

            </>
        );
    }
}

export default JobPlanes;
