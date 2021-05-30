import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Quiz extends Component {
    render() {
        return (
            <>
                
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner-header">
                                    <h3>Quiz it to get it</h3>
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
                                <form class="login-form">
                                    <div class="form-group">
                                        <label style={{color: "#000000"}} class="control-label">Enter Your Question</label>
                                        <input type="text" class="form-control" style={{border: "1px solid #55BC7E",background:"none"}}
                                            placeholder=""/>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Enter option : 1</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E",background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Enter option : 2</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E",background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Enter option : 3</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E",background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label style={{color: "#000000"}} class="control-label">Enter option : 4</label>
                                                <input type="text" class="form-control"
                                                    style={{border: "1px solid #55BC7E",background:"none"}} placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-10"></div>
                                        <div class="col-md-2 mt-3">
                                            <Link to="/" class="mt-3"
                                                style={{background: "#55BC7E", width: "30px", height: "28px", padding: "15px", borderRadius: "100%;"}}>
                                                <i class="lni-plus" style={{color: "white"}}></i>
                                            </Link>
                                        </div>
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

export default Quiz;
