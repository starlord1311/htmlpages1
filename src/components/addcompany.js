import React, { Component } from 'react';
import './addcompany.css';

class Addcompany extends Component{
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
  <div style={{textAlign: 'right', marginTop: '100px'}}>
    <button className="btn"><span className="glyphicon glyphicon-info-sign" /></button><br />
    <button className="btn"><span className="glyphicon glyphicon-bell" /></button><br />
    <button className="btn"><span className="glyphicon glyphicon-map-marker" /></button><br />
    <button className="btn"><span className="glyphicon glyphicon-time" /></button><br />
  </div>
  <div className="container-fluid">
    <div className="row" style={{marginTop: '50px', marginLeft: '180px', marginRight: '10px'}}>
      <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Add Company</strong></h4>
      <div style={{marginTop: '5px'}} className="col-md-6">
        <div>
          <div style={{marginBottom: '10px', marginLeft: '-10px'}}> <button className="btn1">Cancel</button><br />
          </div>
        </div>
      </div>
      <div style={{marginTop: '5px'}} className="col-md-6">
        <div>
          <div style={{textAlign: 'right', marginRight: '50px', marginBottom: '10px'}}>  <button className="btn1">Add/Done</button><br />
          </div>
        </div>
      </div>
    </div>
    <div style={{marginTop: '140px', marginLeft: '180px', border: '1px solid grey', width: '83.5%', padding: '10px', borderRadius: '6px', backgroundColor: '#eef1f6'}} className="row">
      <h4 style={{marginTop: '-3px'}}>Basic Info:</h4>
      <div className="col-md-6">
        <form action="/action_page.php">
          Company Name:
          <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '33px'}} />
          <br /><br />
          Company Type:
          <label style={{marginLeft: '40px'}} className="radio-inline">
            <input type="radio" name="optradio" defaultChecked />Pvt. Ltd.
          </label>
          <label className="radio-inline">
            <input type="radio" name="optradio" />Public
          </label>
          <label className="radio-inline">
            <input type="radio" name="optradio" />Proprietorship
          </label>
          <label className="radio-inline">
            <input type="radio" name="optradio" />Partnership
          </label>
        </form>
        <br /><br />
      </div>
      <div className="col-md-6">
        <form action="/action_page.php">
          Company Number:
          <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', marginLeft: '70px'}} /> <br /><br />
          Company Logo: <input style={{color: '#0c7cb3', marginLeft: '120px', marginTop: '-20px'}} type="file" name="myFile" />
          <input style={{backgroundColor: '#0c7cb3', color: 'white', marginTop: '10px'}} type="submit" />
          <br /><br />
        </form>
      </div>
      <form style={{marginLeft: '15px'}}>
        Company role:
        <label style={{marginLeft: '55px'}} className="checkbox-inline">
          <input type="checkbox" defaultValue />Contractor
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" defaultValue />Rental
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" defaultValue />Bank
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" defaultValue />OEM
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" defaultValue />Service
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" defaultValue />Spare Parts
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" defaultValue />Accessories
        </label>
        <label className="checkbox-inline">
          <input type="checkbox" defaultValue />Auxillories
        </label>
      </form>
    </div>
    <div style={{marginTop: '360px', marginLeft: '180px', border: '1px solid grey', width: '83.5%', padding: '10px', borderRadius: '6px', backgroundColor: '#eef1f6', paddingBottom: '15px'}} className="row">
      <h4 style={{marginTop: '-3px'}}>Company Address:</h4>
      <div className="col-md-12">
        <form action="/action_page.php">
          Address:
          <input type="text" placeholder name style={{border: '1px solid grey', borderRadius: '3px', marginLeft: '70px', width: '80%'}} /> <br /><br />
          <input type="text" placeholder="City" name style={{border: '1px solid grey', borderRadius: '3px', marginLeft: '130px'}} />
          <input type="text" placeholder="State" name style={{border: '1px solid grey', borderRadius: '3px', marginLeft: '70px'}} />
          <input type="text" placeholder="Pin" name style={{border: '1px solid grey', borderRadius: '3px', marginLeft: '70px'}} />
        </form>
      </div>
    </div>
    <div style={{marginTop: '490px', marginLeft: '180px', border: '1px solid grey', width: '83.5%', padding: '10px', borderRadius: '6px', backgroundColor: '#eef1f6', paddingBottom: '5px'}} className="row">
      <h4 style={{marginTop: '-3px'}}>SuperUser Information:</h4>
      <div className="col-md-6">
        <form action="/action_page.php">
          Name:
          <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '97px'}} />
          <br /><br />
          Contact Number:
          <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '33px'}} />
          <br /><br />
        </form>
      </div>
      <div className="col-md-6">
        <form action="/action_page.php">
          Email Id.
          <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '55px'}} />
          <br /><br />
          Designation:
          <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '33px'}} />
          <br /><br />
        </form>
      </div>
      <div style={{marginTop: '630px', marginLeft: '180px', border: '1px solid grey', width: '83.5%', padding: '10px', borderRadius: '6px', backgroundColor: '#eef1f6', paddingBottom: '15px'}} className="row">
        <h4 style={{marginTop: '-3px'}}>Commercial Details:</h4>
        <div className="col-md-4">
          <form action="/action_page.php">
            GST No. :
            <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '275px', marginLeft: '27px'}} />
            <br /><br />
            TIN No. :
            <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '275px', marginLeft: '33px'}} />
            <br /><br />
          </form>
        </div>
        <div className="col-md-4">
          <form action="/action_page.php">
            Contract Details: <input style={{color: '#0c7cb3', marginLeft: '120px', marginTop: '-20px'}} type="file" name="myFile" />
            <input style={{backgroundColor: '#0c7cb3', color: 'white', marginTop: '10px'}} type="submit" />
          </form>
        </div>
        <div className="col-md-4">
          <form action="/action_page.php">
            Contract Details: <input style={{color: '#0c7cb3', marginLeft: '120px', marginTop: '-20px'}} type="file" name="myFile" />
            <input style={{backgroundColor: '#0c7cb3', color: 'white', marginTop: '10px'}} type="submit" />
          </form>
        </div>
      </div>
    </div>
  </div></div>
);
}
}

export default Addcompany;
