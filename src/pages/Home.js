import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <>
                <section class="category section bg-gray">
                    <div class="container">
                        <div class="section-header">
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-1">
                                        <i class="lni-home"></i>
                                    </div>
                                    <h3>Account</h3>
                                    <p>First you've to create an
                                        Account in here</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-2">
                                        <i class="lni-world"></i>
                                    </div>
                                    <h3>CV/Resume</h3>
                                    <p>For a job you have to make
                                        your CV or resume</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-3">
                                        <i class="lni-book"></i>
                                    </div>
                                    <h3>Quick Jobs </h3>
                                    <p>Find your best job by our detailed
                                        job search feature.</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-5">
                                        <i class="lni-brush"></i>
                                    </div>
                                    <h3>Apply them</h3>
                                    <p>Finally your apply to the job of your
                                        findings and enjoy.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="featured" class="section">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title"><u>LATEST</u> HOT JOBS HERE</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img1.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Software Engineer</Link></h3>
                                        <p class="brand">MizTech</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img2.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Graphic Designer</Link></h3>
                                        <p class="brand">Hunter Inc.</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="part-time">Part Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img3.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Managing Director</Link></h3>
                                        <p class="brand">MagNews</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img4.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Software Engineer</Link></h3>
                                        <p class="brand">AmazeSoft</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img5.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Graphic Designer</Link></h3>
                                        <p class="brand">Bingo</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="part-time">Part Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img6.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Managing Director</Link></h3>
                                        <p class="brand">MagNews</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 text-center mt-4">
                                <Link to="category" class="btn btn-common">Browse All Jobs</Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="featured" class="section">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title"><u>LATEST</u> JOBS HERE</h2>
                            
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img1.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Software Engineer</Link></h3>
                                        <p class="brand">MizTech</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img2.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Graphic Designer</Link></h3>
                                        <p class="brand">Hunter Inc.</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="part-time">Part Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img3.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Managing Director</Link></h3>
                                        <p class="brand">MagNews</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img4.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Software Engineer</Link></h3>
                                        <p class="brand">AmazeSoft</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img5.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Graphic Designer</Link></h3>
                                        <p class="brand">Bingo</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="part-time">Part Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-xs-12">
                                <div class="job-featured">
                                    <div class="icon">
                                        <img src="assets/img/features/img6.png" alt=""/>
                                    </div>
                                    <div class="content">
                                        <h3><Link to="jobs-near-me">Managing Director</Link></h3>
                                        <p class="brand">MagNews</p>
                                        <div class="tags">
                                            <span><i class="lni-map-marker"></i> New York</span>
                                            <span><i class="lni-user"></i>John Smith</span>
                                        </div>
                                        <span class="full-time">Full Time</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 text-center mt-4">
                                <Link to="category" class="btn btn-common">Browse All Jobs</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="category section bg-gray">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title text-center"><u>Browse</u> Job Category</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-1">
                                        <i class="lni-home"></i>
                                    </div>
                                    <h3>Video Editing</h3>
                                    <p>First you've to create an
                                        Account in here</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-2">
                                        <i class="lni-world"></i>
                                    </div>
                                    <h3>Video Editing</h3>
                                    <p>For a job you have to make
                                        your CV or resume</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-3">
                                        <i class="lni-book"></i>
                                    </div>
                                    <h3>Video Editing </h3>
                                    <p>Find your best job by our detailed
                                        job search feature.</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-5">
                                        <i class="lni-brush"></i>
                                    </div>
                                    <h3>Video Editing</h3>
                                    <p>Finally your apply to the job of your
                                        findings and enjoy.</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-5">
                                        <i class="lni-brush"></i>
                                    </div>
                                    <h3>Video Editing</h3>
                                    <p>Finally your apply to the job of your
                                        findings and enjoy.</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-5">
                                        <i class="lni-brush"></i>
                                    </div>
                                    <h3>Video Editing</h3>
                                    <p>Finally your apply to the job of your
                                        findings and enjoy.</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-5">
                                        <i class="lni-brush"></i>
                                    </div>
                                    <h3>Video Editing</h3>
                                    <p>Finally your apply to the job of your
                                        findings and enjoy.</p>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-md-6 col-xs-12 f-category">
                                <Link to="category">
                                    <div class="icon bg-color-5">
                                        <i class="lni-brush"></i>
                                    </div>
                                    <h3>Video Editing</h3>
                                    <p>Finally your apply to the job of your
                                        findings and enjoy.</p>
                                </Link>
                            </div>
                            <div class="col-12 text-center mt-4">
                                <Link to="category" class="btn btn-common">View All</Link>
                            </div>
                        </div>
                    </div>
                </section>


                <div id="browse-jobs" class="section bg-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="text-wrapper">
                                    <div>
                                        <h3>1000+ Pakistan top company
                                            post there job in here.</h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tak</p>
                                        <Link class="btn btn-common" to="/register">Create Account</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12">
                                <div class="img-thumb">
                                    <img class="img-fluid" src="assets/img/search.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
