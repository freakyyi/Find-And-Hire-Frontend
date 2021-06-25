import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {
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
                                                    <input className="form-control" type="text" placeholder="Job title or keywords"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-xs-12">
                                                <div className="form-group">
                                                    <div className="search-category-container">
                                                        <label className="styled-select">
                                                            <select>
                                                                <option value="none">City or Zip Code</option>
                                                                <option value="none">New York</option>
                                                                <option value="none">California</option>
                                                                <option value="none">Washington</option>
                                                                <option value="none">Birmingham</option>
                                                                <option value="none">Chicago</option>
                                                                <option value="none">Phoenix</option>
                                                            </select>
                                                        </label>
                                                    </div>
                                                    <i className="lni-map-marker"></i>
                                                </div>
                                            </div>
                                            <div className="col-lg-1 col-md-1 col-xs-12">
                                                <button type="submit" className="button"><i className="lni-search"></i></button>
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
                            <div className="sideber ml-5" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div className="widghet">
                                    <h6 style={{color: "black"}}>Search by job type</h6>
                                </div>
                                <div className="form-group" style={{borderBottom:" 1px solid #344863", paddingBottom: "30px"}}>
                                    <div className="search-category-container">
                                        <label className="styled-select">
                                            <select>
                                                <option value="none">Full time job</option>
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
                                <div className="widghet">
                                    <h6 style={{color: "black"}}>Select Job Category</h6>
                                </div>
                                <div className="form-check" style={{borderBottom:" 1px solid #344863", paddingBottom: "30px"}}>
                                    <div className="row py-2">
                                        <div className="col-lg-8 col-md-4 col-xs-2">
                                            <label className="form-check-label" for="flexCheckDefault">
                                            Job By Category
                                            </label>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-xs-4">
                                            <input className="form-check-input text-right" type="checkbox" value=""
                                                id="flexCheckDefault" />

                                        </div>
                                    </div>
                                   

                                </div>
                                <div className="widghet mt-3">
                                    <h6 style={{color: "black"}}>Experience</h6>
                                </div>
                                <div className="form-check" style={{borderBottom:" 1px solid #344863", paddingBottom: "30px"}}>
                                    <div className="row py-2">
                                        <div className="col-lg-8 col-md-4 col-xs-2">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Less then 1 Years
                                            </label>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-xs-4">
                                            <input className="form-check-input text-right" type="checkbox" value=""
                                                id="flexCheckDefault"/>

                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-8 col-md-4 col-xs-2">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                1-2 Years
                                            </label>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-xs-4">
                                            <input className="form-check-input text-right" type="checkbox" value=""
                                                id="flexCheckDefault"/>

                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-8 col-md-4 col-xs-2">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                2-3 Years
                                            </label>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-xs-4">
                                            <input className="form-check-input text-right" type="checkbox" value=""
                                                id="flexCheckDefault"/>

                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-8 col-md-4 col-xs-2">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                3-4 Years
                                            </label>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-xs-4">
                                            <input className="form-check-input text-right" type="checkbox" value=""
                                                id="flexCheckDefault"/>

                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-8 col-md-4 col-xs-2">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                4-5 Years
                                            </label>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-xs-4">
                                            <input className="form-check-input text-right" type="checkbox" value=""
                                                id="flexCheckDefault"/>

                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-lg-8 col-md-4 col-xs-2">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                More then 5 Years
                                            </label>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-xs-4">
                                            <input className="form-check-input text-right" type="checkbox" value=""
                                                id="flexCheckDefault"/>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="content-area mb-5" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div className="row" style={{borderBottom: "1px solid #344863"}}>
                                    <div className="ml-3">
                                        <span>
                                            <img style={{borderRadius: "100%", height: "42px", width: "42px"}}
                                                src="assets/img/blog/blog1.jpg" alt=""/>
                                        </span>
                                    </div>
                                    <div className="col-md-8">
                                        <p className="mb-0" style={{color: "#37383D", fontSize: "16px"}}>Need a professional web designer</p>
                                        <label for="" style={{color: "#37383D"}}>Published 2 days ago</label>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <p className="mb-0" style={{color: "#37383D", fontSize: "16px"}}>Rs 30,00</p>
                                    </div>
                                </div>

                                <p style={{color: "#37383D", fontSize: "12px"}} className="pt-3">Job Summary
                                </p>

                                <div className="row">
                                    <div className="pl-3 pr-5">
                                        <p style={{color: "#37383D", fontSize: "16px"}}>Skill: </p>
                                    </div>
                                    <div>
                                        <Link style={{background: "#55BC7E", color: "white", borderRadius: "5px;"}} to="/" className="p-2">Ui Design</Link>
                                    </div>
                                    <div className="col-md-3 ml-0">
                                        <Link style={{background: "#55BC7E", color: "white", borderRadius: "5px;"}} to="/" className="p-2" to="/" className="ml-0">Web Development</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="pl-3 pr-5">
                                        <p style={{color: "#37383D", fontSize: "16px"}}>Requirement: </p>
                                    </div>
                                    <div>
                                        <p style={{color: "#37383D", fontSize: "12px"}}>Job Requirement
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Category;
