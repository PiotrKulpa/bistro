import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';

class App extends Component {


  render() {
    return (
      <div className="App">

      <div className="loader">
         <div className="cssload-container">
           <div className="cssload-circle"></div>
           <div className="cssload-circle"></div>
         </div>
      </div>


      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="pull-left hidden-xs">Bistro Foods and Restaurant, the Best in Town</p>
              <p className="pull-right"><i className="fa fa-phone"></i>Orer Online 111-123-6789</p>
            </div>
          </div>
        </div>
      </div>


      <header id="main-navigation">
        <div id="navigation" data-spy="affix" data-offset-top="20">
          <div className="container">
            <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#fixed-collapse-navbar" aria-expanded="false">
                  <span className="icon-bar top-bar"></span> <span className="icon-bar middle-bar"></span> <span className="icon-bar bottom-bar"></span>
                  </button>
                 <a className="navbar-brand" href="index.html"><img src="/images/logo.png" alt="logo" className="img-responsive"/></a>
               </div>

                  <div id="fixed-collapse-navbar" className="navbar-collapse collapse navbar-right">
                    <ul className="nav navbar-nav">
                      <li className="dropdown active home-btn">
                        <Link className="dropdown-toggle" to="/">Home</Link>
                        {/*
                         <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>

                         <ul className="dropdown-menu">
                          <li><a href="index.html">Home V1</a></li>
                          <li><a href="index2.html">Home V2</a></li>
                        </ul>
                        */}
                      </li>
                      <li><Link to="/menu">Menu</Link></li>

                      <li className="dropdown">
                        <Link to="/kontakt">Contact</Link>
                         {/*
                        <ul className="dropdown-menu">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="menu.html">Menu</a></li>
                          <li><a href="blog-detail.html">Blog Detail</a></li>
                          <li><a href="faq.html">FAQ</a></li>
                        </ul>
                        */}
                       </li>
                       {/*
                      <li className="dropdown">
                        <a data-toggle="dropdown" href="#" className="dropdown-toggle">gallery</a>
                        <ul className="dropdown-menu">
                          <li><a href="gallery.html">Gallery Three</a></li>
                          <li><a href="gallery4c.html">Gallery Four column</a></li>
                          <li><a href="gallery2c.html">Gallery Two column</a></li>
                        </ul>
                      </li>
                      <li><a href="blog.html">blog</a></li>
                      <li><a href="order.html">Order Now</a></li>
                      <li className="dropdown">
                        <a data-toggle="dropdown" href="#" className="dropdown-toggle">Location</a>
                        <ul className="dropdown-menu">
                          <li><a href="location.html">Location V1</a></li>
                          <li><a href="location2.html">Location V2</a></li>
                        </ul>
                      </li>
                    */}
                    </ul>
                  </div>
               </nav>
               </div>
             </div>
           </div>
        </div>
      </header>





              <div id="rev_slider_34_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="news-gallery34"
              style={{margin: '0 auto', backgroundColor:'#ffffff', padding:0, marginTop:0, marginBottom:0}}>

                <div id="rev_slider_34_1" className="rev_slider fullwidthabanner" style={{display:'none'}} data-version="5.0.7">
                  <ul>
                    <li data-index="rs-129" data-transition="fade" data-slotamount="default" data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7"  data-title="Fish &nbsp; Steak" data-description="Duis autem vel eum iriure dolor in hendrerit">

                      <img src="images/banner2.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>

                      <h1 className="tp-caption tp-resizeme"
                                data-x="left" data-hoffset="15"
                                data-y="70"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="500"
                                data-splitin="none"
                                data-splitout="none"
                                style={{zIndex: 6}}>
                                <span className="small_title">Yes We Have</span> <br/> The &nbsp; Best &nbsp; Fish &nbsp;<span className="color">Steak</span>
                             </h1>

                              <p className="tp-caption tp-resizeme"
                                data-x="left" data-hoffset="15"
                                data-y="210"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="800"
                                style={{zIndex: 9}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br/>sed diam nonummy nibh euismod.

                              </p>
                              <div className="tp-caption fade tp-resizeme"
                                 data-x="left" data-hoffset="15"
                                 data-y="280"
                                 data-width = "full"
                                 data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                 data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="1200"
                                 style={{zIndex: 12}}>
                             <a href="#order-form" className="btn-common btn-white page-scroll">Order Now</a>
                             </div>


                    </li>

                    <li className="text-center" data-index="rs-130" data-transition="slideleft" data-slotamount="default" data-rotate="0"  data-title="Bakery &nbsp; Items" data-description="Duis autem vel eum iriure dolor in hendrerit">
                      <img src="images/banner1.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
                              <h1 className="tp-caption tp-resizeme"
                                data-x="center" data-hoffset="15"
                                data-y="70"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="500"
                                data-splitin="none"
                                data-splitout="none"
                                style={{zIindex: 6}}>
                                <span className="small_title">  Delicious Bakery Items</span> <br/> Coconut &nbsp; with &nbsp; <span className="color">Lemon &nbsp; Grass</span>
                              </h1>
                              <p className="tp-caption tp-resizeme"
                                data-x="center" data-hoffset="15"
                                data-y="210"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="800"
                                style={{zIndex: 9}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br/>sed diam nonummy nibh euismod.
                              </p>


                                <div className="tp-caption fade tp-resizeme"
                                 data-x="center" data-hoffset="15"
                                 data-y="280"
                                 data-width = "full"
                                 data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                 data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="1200"
                                 style={{zIndex: 12}}>
                                <a href="#specialities" className="btn-common btn-white page-scroll">Learn &nbsp; More</a> &nbsp; <a href="#order-form" className="btn-common btn-orange page-scroll">Order &nbsp; Now</a>
                             </div>



                                  </li>

                    <li className="text-right" data-index="rs-131" data-transition="slideleft"   data-rotate="0" data-title="Fresh &nbsp; Food" data-description="Duis autem vel eum iriure dolor in hendrerit">
                      <img src="images/banner4.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
                              <h1 className="tp-caption tp-resizeme"
                                data-x="right" data-hoffset=""
                                data-y="70"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="500"
                                data-splitin="none"
                                data-splitout="none"
                                style={{zIndex: 6}}>
                                <span className="small_title">We Prepare</span> <br/> Fresh &nbsp; Food &nbsp; <span className="color">Vegies</span>
                              </h1>
                              <p className="tp-caption tp-resizeme"
                                data-x="right" data-hoffset=""
                                data-y="210"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="800"
                                style={{zIndex: 9}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br/>sed diam nonummy nibh euismod.
                              </p>

                                 <div className="tp-caption fade tp-resizeme"
                                 data-x="right" data-hoffset=""
                                 data-y="280"
                                 data-width = "full"
                                 data-transform_idle="o:1;"
                                 data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                                 data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                data-start="1200"
                                 style={{zIindex: 12}}>
                             <a href="#order-form" className="btn-common btn-white page-scroll">Order Now</a>
                             </div>
                                  </li>

                  </ul>
                </div>
              </div>






      {/* Tutaj zawartość */}

      <Route exact path="/" render={()=>(
              <Home/>
          )} />

      <Route exact path="/kontakt" render={()=>(
              <Contact/>
          )} />

      <Route exact path="/menu" render={()=>(
              <Menu/>
          )} />


      {/* Koniec  głównej zawartości */}
      <footer className="padding-top bg_black">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 footer_column">
              <h4 className="heading">Why Bistro?</h4>
              <hr className="half_space"/>
              <p className="half_space">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore dolor in hendrerit in vulputate.</p>
              <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
            </div>
            <div className="col-md-3 col-sm-6 footer_column">
              <h4 className="heading">Quick Links</h4>
              <hr className="half_space"/>
              <ul className="widget_links">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="location.html">Locations</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="faq.html">Faq's</a></li>
                <li><a href="order.html">Order Now</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="food.html">Food</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer_column">
              <h4 className="heading">Newsletter</h4>
              <hr className="half_space"/>
              <p className="icon"><i className="icon-dollar"></i>Sign up with your name and email to get updates fresh updates.</p>
              <div id="result1" className="text-center"></div>

             <form action="http://themesindustry.us13.list-manage.com/subscribe/post-json?u=4d80221ea53f3a4487ddebd93&id=494727d648&c=?" method="get" onSubmit={() => false} className="newsletter">
                <div className="form-group">
                  <input type="email" placeholder="E-mail Address" required name="EMAIL" id="EMAIL" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="submit" className="btn-submit button3" value="Subscribe" />
                </div>
              </form>
            </div>
            <div className="col-md-3 col-sm-6 footer_column">
              <h4 className="heading">Get in Touch</h4>
              <hr className="half_space"/>
              <p>Restaurant, to consequat ipsum nec sagittis sem.</p>
              <p className="address"><i className="icon-location"></i>Restaurant, Manhattan 1258,New York, USA Lahore</p>
              <p className="address"><i className="fa fa-phone"></i>(+1) 234 567 8901</p>
              <p className="address"><i className="icon-dollar"></i><a href="mailto:hello@website.com">hello@website.com</a></p>
            </div>
          </div>
          <div className="row">
           <div className="col-md-12">
              <div className="copyright clearfix">
                <p>Copyright &copy; 2016 Bistro. All Right Reserved</p>
                <ul className="social_icon">
                     <li><a href="#" className="facebook"><i className="icon-facebook5"></i></a></li>
                     <li><a href="#" className="twitter"><i className="icon-twitter4"></i></a></li>
                     <li><a href="#" className="google"><i className="icon-google"></i></a></li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" id="back-top"><i className="fa fa-angle-up fa-2x"></i></a>
      </div>
    );
  }
}

export default App;
