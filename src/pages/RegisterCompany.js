import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterCompany extends Component {
    render() {
        return (
            <>
                <section className="job-detail section pt-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <span style={{marginLeft: "90px"}}>
                                <img src="assets/img/slider/img-1.png" style={{width: "400px", height: "500px", marginTop: "60px"}}
                                    alt=""/>
                            </span>
                        </div>
                        <div className="col-lg-4">
                            <div className="page-login-form" style={{marginTop: "50px"}}>
                                <h3>
                                    Sign up to <b style={{color: "#55BC7E"}}>H&F</b>
                                </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label style={{color: "#000000"}} className="control-label">First Name</label>
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label style={{color: "#000000"}} className="control-label">Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="form-group">
                                        <label style={{color: "#000000"}} className="control-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Demo@demo.com" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label style={{color: "#000000"}} className="control-label">Password</label>
                                        <input type="password" className="form-control" placeholder="password" />
                                    </div>
                                    <button className="btn btn-common log-btn">Sign up as a company</button>

                                <ul className="form-links">
                                    <li className="text-center"><Link to="register">Join as a Job Seeker</Link></li>
                                </ul>
                                <p className="hr-text">or</p>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <button className="btn btn-common log-btn" style={{background: "#3A559F", borderRadius: "8px"}}>Facebook</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn btn-common log-btn" style={{background: "#D04336", borderRadius: "8px"}}>+ Google</button>
                                    </div>
                                </div>
                                <ul className="form-links">
                                    <li className="text-center"><Link to="login">Already have an account</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default RegisterCompany;
