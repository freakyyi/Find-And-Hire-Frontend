import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobNearMe extends Component {
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
                                                    <input class="form-control" type="text" placeholder="Job title or keywords"/>
                                                </div>
                                            </div>
                                            <div class="col-lg-1 col-md-1 col-xs-12">
                                                <button type="submit" class="button"><i class="lni-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="job-detail section pt-5">
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8">
                            <div class="content-area mb-5" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div class="row" style={{borderBottom: "1px solid #344863"}}>
                                    <div class="ml-3">
                                        <span>
                                            <img style={{borderRadius: "100%", height: "42px", width: "42px"}}
                                                src="assets/img/blog/blog1.jpg" alt=""/>
                                        </span>
                                    </div>
                                    <div class="col-md-8">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Need a professional web designer
                                        </p>
                                        <label for="" style={{color: "#37383D"}}>Published 2 days ago</label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Rs 30,00</p>
                                    </div>
                                </div>

                                <p style={{color: "#37383D", fontSize: "12px"}} class="pt-3">Proin gravida nibh vel velit auctor
                                    aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor,
                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                                    vulputate cursus a sit amet mauris. Morbi umsan ipsum velit. Nam nec tellus a odio
                                    tincidunt
                                    auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class
                                    aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
                                    erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                                    elit
                                </p>

                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Skill: </p>
                                    </div>
                                    <div>
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2">Ui
                                            Design</Link>
                                    </div>
                                    <div class="col-md-3 ml-0">
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2"
                                            to="/about" class="ml-0">Web Development</Link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Requirement: </p>
                                    </div>
                                    <div>
                                        <p style={{color: "#37383D", fontSize: "12px"}}>Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum
                                            auctor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="content-area mb-5" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div class="row" style={{borderBottom: "1px solid #344863"}}>
                                    <div class="ml-3">
                                        <span>
                                            <img style={{borderRadius: "100%", height: "42px", width: "42px"}}
                                                src="assets/img/blog/blog1.jpg" alt=""/>
                                        </span>
                                    </div>
                                    <div class="col-md-8">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Need a professional web designer
                                        </p>
                                        <label for="" style={{color: "#37383D"}}>Published 2 days ago</label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Rs 30,00</p>
                                    </div>
                                </div>

                                <p style={{color: "#37383D", fontSize: "12px"}} class="pt-3">Proin gravida nibh vel velit auctor
                                    aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor,
                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                                    vulputate cursus a sit amet mauris. Morbi umsan ipsum velit. Nam nec tellus a odio
                                    tincidunt
                                    auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class
                                    aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
                                    erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                                    elit
                                </p>

                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Skill: </p>
                                    </div>
                                    <div>
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2">Ui
                                            Design</Link>
                                    </div>
                                    <div class="col-md-3 ml-0">
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2"
                                            to="/about" class="ml-0">Web Development</Link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Requirement: </p>
                                    </div>
                                    <div>
                                        <p style={{color: "#37383D", fontSize: "12px"}}>Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum
                                            auctor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="content-area mb-5" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div class="row" style={{borderBottom: "1px solid #344863"}}>
                                    <div class="ml-3">
                                        <span>
                                            <img style={{borderRadius: "100%", height: "42px", width: "42px"}}
                                                src="assets/img/blog/blog1.jpg" alt=""/>
                                        </span>
                                    </div>
                                    <div class="col-md-8">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Need a professional web designer
                                        </p>
                                        <label for="" style={{color: "#37383D"}}>Published 2 days ago</label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Rs 30,00</p>
                                    </div>
                                </div>

                                <p style={{color: "#37383D", fontSize: "12px"}} class="pt-3">Proin gravida nibh vel velit auctor
                                    aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor,
                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                                    vulputate cursus a sit amet mauris. Morbi umsan ipsum velit. Nam nec tellus a odio
                                    tincidunt
                                    auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class
                                    aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
                                    erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                                    elit
                                </p>

                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Skill: </p>
                                    </div>
                                    <div>
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2">Ui
                                            Design</Link>
                                    </div>
                                    <div class="col-md-3 ml-0">
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2"
                                            to="/about" class="ml-0">Web Development</Link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Requirement: </p>
                                    </div>
                                    <div>
                                        <p style={{color: "#37383D", fontSize: "12px"}}>Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum
                                            auctor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="content-area mb-5" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div class="row" style={{borderBottom: "1px solid #344863"}}>
                                    <div class="ml-3">
                                        <span>
                                            <img style={{borderRadius: "100%", height: "42px", width: "42px"}}
                                                src="assets/img/blog/blog1.jpg" alt=""/>
                                        </span>
                                    </div>
                                    <div class="col-md-8">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Need a professional web designer
                                        </p>
                                        <label for="" style={{color: "#37383D"}}>Published 2 days ago</label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Rs 30,00</p>
                                    </div>
                                </div>

                                <p style={{color: "#37383D", fontSize: "12px"}} class="pt-3">Proin gravida nibh vel velit auctor
                                    aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor,
                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                                    vulputate cursus a sit amet mauris. Morbi umsan ipsum velit. Nam nec tellus a odio
                                    tincidunt
                                    auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class
                                    aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
                                    erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                                    elit
                                </p>

                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Skill: </p>
                                    </div>
                                    <div>
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2">Ui
                                            Design</Link>
                                    </div>
                                    <div class="col-md-3 ml-0">
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2"
                                            to="/about" class="ml-0">Web Development</Link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Requirement: </p>
                                    </div>
                                    <div>
                                        <p style={{color: "#37383D", fontSize: "12px"}}>Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum
                                            auctor
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="content-area mb-5" style={{boxShadow: "0px 10px 22px #00000029"}}>
                                <div class="row" style={{borderBottom: "1px solid #344863"}}>
                                    <div class="ml-3">
                                        <span>
                                            <img style={{borderRadius: "100%", height: "42px", width: "42px"}}
                                                src="assets/img/blog/blog1.jpg" alt=""/>
                                        </span>
                                    </div>
                                    <div class="col-md-8">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Need a professional web designer
                                        </p>
                                        <label for="" style={{color: "#37383D"}}>Published 2 days ago</label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <p class="mb-0" style={{color: "#37383D",fontSize: "16px"}}>Rs 30,00</p>
                                    </div>
                                </div>

                                <p style={{color: "#37383D", fontSize: "12px"}} class="pt-3">Proin gravida nibh vel velit auctor
                                    aliquet. Aenean sollicitudin, lorem quis bibendum
                                    auctor,
                                    nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
                                    vulputate cursus a sit amet mauris. Morbi umsan ipsum velit. Nam nec tellus a odio
                                    tincidunt
                                    auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class
                                    aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
                                    erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                                    elit
                                </p>

                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Skill: </p>
                                    </div>
                                    <div>
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2">Ui
                                            Design</Link>
                                    </div>
                                    <div class="col-md-3 ml-0">
                                        <Link style={{background: "#55BC7E",color: "white", borderRadius: "5px"}} to="/about" class="p-2"
                                            to="/about" class="ml-0">Web Development</Link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="pl-3 pr-5">
                                        <p style={{color: "#37383D",fontSize: "16px"}}>Requirement: </p>
                                    </div>
                                    <div>
                                        <p style={{color: "#37383D", fontSize: "12px"}}>Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum
                                            auctor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </section>
            </>
        );
    }
}

export default JobNearMe;
