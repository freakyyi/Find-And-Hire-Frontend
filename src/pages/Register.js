import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <>
                <section class="job-detail section pt-5">
                    <div class="row">
                        <div class="col-lg-6">
                            <span style={{marginLeft: "90px"}}>
                                <img src="assets/img/slider/img-1.png" style={{width: "400px", height: "500px", marginTop: "60px"}}
                                    alt=""/>
                            </span>
                        </div>
                        <div class="col-lg-4">
                            <div class="page-login-form" style={{marginTop: "50px"}}>
                                <h3>
                                    Sign up to <b style={{color: "#55BC7E"}}>H&F</b>
                                </h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">First Name</label>
                                                <input type="text" class="form-control" placeholder="First Name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Last Name</label>
                                                <input type="text" class="form-control" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">Email</label>
                                        <input type="email" class="form-control" placeholder="Demo@demo.com"/>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">Password</label>
                                        <input type="password" class="form-control" placeholder="password"/>
                                    </div>
                                    <button class="btn btn-common log-btn">Join as Job Seeker</button>
                               
                                <ul class="form-links">
                                    <li class="text-center"><Link to="company_register">Join as a Company</Link></li>
                                </ul>
                                <p class="hr-text">or</p>
                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <button class="btn btn-common log-btn" style={{background: "#3A559F", borderRadius: "8px"}}>Facebook</button>
                                    </div>
                                    <div class="col-md-6">
                                        <button class="btn btn-common log-btn" style={{background: "#D04336", borderRadius: "8px"}}>+ Google</button>
                                    </div>
                                </div>
                                <ul class="form-links">
                                    <li class="text-center"><Link to="login">Already have an account</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Register;
