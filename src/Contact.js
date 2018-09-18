import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className="padding">
        <div className="container order-page">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <h2 className="heading">Get in Touch</h2>
              <hr className="heading_space"/>
              <form className="callus" onSubmit={() => false} id="contact_form">
                <div className="row">
                 <div className="col-md-12">
                    <div id="result" className="text-center form-group"></div>
                 </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" name="f_name" id="f_name" placeholder="First Name" required=""/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" name="l_name" id="l_name" placeholder="Last Name" required=""/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="email" name="email" id="email" placeholder="Email Address" required=""/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" type="text" name="phone" id="phone" required="" placeholder="Phone No"/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea placeholder="Message" name="message" id="message"></textarea>
                    </div>
                    <div className="form-group">
                       <div className="btn-submit button3">
                      <input type="submit" value="Submit Request" id="btn_contact_submit"/>

                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4 col-sm-4 bistro">
              <h2 className="heading">bistro</h2>
              <hr className="heading_space"/>
              <p><strong>Phone:</strong> 1.800.555.6789</p>
              <p><strong>Email:</strong> <a href="mailto:support@bistro.com">support@bistro.com</a></p>
              <p><a href="#.">Web: www.bistro.com</a></p>
              <p><strong>Address:</strong> 12345 North Main Street, New York</p>
               <ul className="social_icon">
                  <li className="black"><a href="#." className="facebook"><i className="icon-facebook5"></i></a></li>
                  <li className="black"><a href="#." className="twitter"><i className="icon-twitter4"></i></a></li>
                  <li className="black"><a href="#." className="google"><i className="icon-google"></i></a></li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
