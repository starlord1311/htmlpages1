import React, { Component } from 'react';

class Page1 extends Component{
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
                <h1>Login with Equipshare</h1>
                <div className="textbox">
                  <input type="text" placeholder="Username" name defaultValue />
                </div>
                <div className="textbox">
                  <input type="text" placeholder="Password" name defaultValue />
                </div>
                <input className="btn" type="button" name defaultValue="login" />
                <br />
                <a className="rem" href>remember me?</a> <a className="fog" href="page2.html">forgot password?</a>
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

export default Page1;
