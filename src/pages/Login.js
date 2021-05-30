import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
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
                            <div class="page-login-form" style={{marginTop: "90px;"}}>
                                <h3>
                                    Sign in to <b style={{color: "#55BC7E"}}>H&F</b>
                                </h3>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">E-mail</label>
                                        <input type="text" class="form-control" placeholder="John@gmail.com"/>
                                    </div>
                                    <div class="form-group">
                                        <label  style={{color: "#000000"}}  class="control-label">Password</label>
                                        <input type="password" class="form-control" placeholder="password"/>
                                    </div>
                                    <button class="btn btn-common log-btn">Login</button>
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
                                    <li class="text-center"><Link to="register">Don't have an account?</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Login;
