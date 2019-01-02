import React, { Component } from 'react';

class Createauction extends Component{
  render(){
    return (

      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Equipshare</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user" />William Stryker</a></li>
            </ul>
          </div>
        </nav>
        <div className="sidenav">
          <a href="dashboard.html">Dashboard</a>
          <a href="#services">Location</a>
          <a href="#clients">Companies</a>
          <a href="#contact">Equipment Master</a>
          <a href="#about">Equipment Categories</a>
          <a href="#services">Agent</a>
          <a href="#clients">Wallet</a>
          <a href="#contact">Rental Request</a>
          <a href="#contact">Reports</a>
        </div>
        <div style={{textAlign: 'right', marginTop: '150px'}}>
          <button className="btn"><span className="glyphicon glyphicon-info-sign" /></button><br />
          <button className="btn"><span className="glyphicon glyphicon-bell" /></button><br />
          <button className="btn"><span className="glyphicon glyphicon-map-marker" /></button><br />
          <button className="btn"><span className="glyphicon glyphicon-time" /></button><br />
        </div>
        <div className="container-fluid">
          <div className="row" style={{marginTop: '50px', marginLeft: '180px', marginRight: '10px'}}>
            <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Create Auction</strong></h4>
            <div style={{marginTop: '10px'}} className="col-md-6">
              <form action="/action_page.php">
                Date:
                <input type="date" name style={{border: '2px solid grey', borderRadius: '3px'}} />
                to
                <input type="date" name style={{border: '2px solid grey', borderRadius: '3px'}} />
              </form>
            </div>
            <div style={{marginTop: '10px'}} className="col-md-6">
              <form>
                Physical equipment display:
                <label style={{marginLeft: '40px'}} className="radio-inline">
                  <input type="radio" name="optradio" defaultChecked />Yes
                </label>
                <label style={{marginLeft: '40px'}} className="radio-inline">
                  <input type="radio" name="optradio" defaultChecked />No
                </label>
              </form>
            </div>
          </div>
          <div className="row" style={{marginTop: '160px', marginLeft: '140px', marginRight: '10px', width: '82%', height: '0.1%'}}>
            <form style={{marginLeft: '15px'}}>
              <label style={{marginLeft: '55px'}} className="checkbox-inline">
                <input type="checkbox" defaultValue />Corporate
              </label>
              <label className="checkbox-inline">
                <input type="checkbox" defaultValue />Bank
              </label>
              <label className="checkbox-inline">
                <input type="checkbox" defaultValue />Generic
              </label><br /><br />
              Equipment Subcategory Allowed:
            </form></div>
        </div>
      </div>
    );
  }
}

export default Createauction;
