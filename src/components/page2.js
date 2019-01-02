import React, { Component } from 'react';

class Page2 extends Component{
  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-3 ">
              <img className="logo" src="C:\Users\amank\Desktop\LOGO.png" />
            </div>
            <div className="col-lg-6 col-xs-9 ">
              <div className="login">
                <h1>Forgot Password?</h1>
                <div className="textbox">
                  <input type="text" placeholder="email@address.com" name defaultValue />
                </div>
                <input className="btn" type="button" name defaultValue="Reset Password" />
                <br />
                <a className="back" href="page1.html">back to login</a>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className="row">
          <div className="footer">
            <div className="col-lg-6" style={{padding: '10px'}}>
              Equipshare 2018, All right reserved.
            </div>
            <div className="col-lg-6" style={{padding: '10px'}}>
              Disclaimer | Private Policy | Terms Of Service
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page2;
