import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Resume extends Component {
    render() {
        return (
            <>
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner-header">
                                    <h3>Build your resume with our <br/> industry-specific bullet points</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="job-detail section pt-5">
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8">
                            <div class="page-login-form box" style={{boxShadow:" 0px 10px 22px #00000029"}}>
                                <div class="inner-header">
                                    <h3 class="text-center" style={{textTransform:"capitalize"}}>How long have you been working?</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <button class="btn btn-common"
                                            style={{background: "white", borderRadius:" 10px", border: "2px solid #55BC7E", color: "#344863"}}>0-3
                                            Years</button>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-common"
                                            style={{background: "white", borderRadius:" 10px", border: "2px solid #55BC7E", color: "#344863"}}>3-5
                                            Years</button>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-common"
                                            style={{background: "white", borderRadius:" 10px", border: "2px solid #55BC7E", color: "#344863"}}>5-10
                                            Years</button>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-common"
                                            style={{background: "white", borderRadius:" 10px", border: "2px solid #55BC7E", color: "#344863"}}>10+
                                            Years</button>
                                    </div>

                                </div>
                                <div class="inner-header pt-5">
                                    <h3 class="text-center" style={{textTransform:"capitalize"}}>What’s the best way for employers to
                                        contact you?</h3>
                                </div>
                                <form class="login-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">First Name</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Last Name</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">Profession</label>
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
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Phone</label>
                                                <input type="number" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Email Address</label>
                                                <input type="email" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="inner-header pt-3">
                                        <h3 class="text-center" style={{textTransform:"capitalize"}}>Now, let’s fill out your work
                                            history</h3>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Job Title</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Employer</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">City</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">State</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Start Date</label>
                                                <input type="date" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">End Date</label>
                                                <input type="date" class="form-control"
                                                    style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-10"></div>
                                        <div class="col-md-2 mt-3">
                                            <Link to="/" class="mt-3"
                                                style={{background: "#55BC7E", width: "30px", height: "28px", padding: "15px",borderRadius: "100%"}}>
                                                <i class="lni-plus" style={{color: "white"}}></i>
                                            </Link>
                                        </div>
                                    </div>

                                    <div class="inner-header pt-3">
                                        <h3 class="text-center" style={{textTransform:"capitalize"}}>Great, let’s work on your
                                            education
                                        </h3>
                                    </div>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">Skill Name</label>
                                        <input type="text" class="form-control"
                                            style={{border: "1px solid #55BC7E", background:"none"}} placeholder=""/>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-10"></div>
                                        <div class="col-md-2 mt-3">
                                            <Link to="/" class="mt-3"
                                                style={{background: "#55BC7E", width: "30px", height: "28px", padding: "15px",borderRadius: "100%"}}>
                                                <i class="lni-plus" style={{color: "white"}}></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div class="inner-header pt-3">
                                        <h3 class="text-center" style={{textTransform:"capitalize"}}>Finally, let’s work on your summary
                                        </h3>
                                    </div>
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label"></label>
                                        <textarea type="text" rows="8" class="form-control"
                                            style={{border: "1px solid #55BC7E", background:"none"}} placeholder="Write your summary here....."></textarea>
                                    </div>
                                    <div class="col-12 text-center mt-4">
                                        <Link to="post-job-form" style={{background: "#55BC7E"}} class="btn btn-common">Save and View your CV</Link>
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

export default Resume;
