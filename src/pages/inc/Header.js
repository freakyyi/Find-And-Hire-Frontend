import React, { Component } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import HomeHeader from './HomeHeader';

class header extends Component {
    render() {
        return (
            <>
                <header id="home" class="hero-area">
                    <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
                        <div class="container">
                            <div class="theme-header clearfix">

                                <div class="navbar-header">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
                                        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                        <span class="lni-menu"></span>
                                        <span class="lni-menu"></span>
                                        <span class="lni-menu"></span>
                                    </button>
                                    <h3 class="mt-2">H <b style={{color:"#55BC7E;"}}>&</b> F</h3>
                                </div>
                                <div class="collapse navbar-collapse" id="main-navbar">
                                    <ul class="navbar-nav mr-auto w-100 justify-content-end">
                                        <li class="nav-item dropdown active">
                                            <Link class="nav-link dropdown-toggle" to="/" aria-haspopup="true"
                                                aria-expanded="false">
                                                Home
                                            </Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" to="category" aria-haspopup="true"
                                                aria-expanded="false">
                                                Categories
                                            </Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" to="jobs-near-me" aria-haspopup="true"
                                                aria-expanded="false">
                                                Jobs Near Me
                                            </Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" to="about" aria-haspopup="true"
                                                aria-expanded="false">
                                                About Us
                                            </Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" to="contact" aria-haspopup="true"
                                                aria-expanded="false">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="cv-resume">
                                                Build CV
                                            </Link>
                                        </li>
                                        <li class="button-group">
                                            <Link to="register" class="button btn btn-common">SignUp</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
                    </nav>

                    <Switch>
                        <Route path="/" exact>
                            <HomeHeader/>
                        </Route>
                    </Switch>
                    
                </header>
            </>
        );
    }
}

export default header;
