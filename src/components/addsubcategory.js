import React, { Component } from 'react';
import './addsubcategory.css';

class Addsubcategory extends Component{
  render(){
    return (
      <div>
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
            <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Add Subcategory</strong></h4>
            <div style={{marginTop: '10px'}} className="col-md-6">
              <div>
                <div style={{marginBottom: '10px'}}> <button className="btn1">Cancel</button><br />
                </div>
              </div>
            </div>
            <div style={{marginTop: '10px'}} className="col-md-6">
              <div>
                <div style={{textAlign: 'right', marginRight: '50px', marginBottom: '10px'}}>  <button className="btn1">Add/Done</button><br />
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: '150px', marginLeft: '180px', border: '1px solid grey', width: '82%', padding: '10px', borderRadius: '6px', backgroundColor: '#eef1f6'}} className="row">
            <h4 style={{marginTop: '-3px'}}>Basic Info:</h4>
            <div className="col-md-6">
              <form action="/action_page.php">
                Subcategory:
                <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '33px'}} />
                <br /><br />
                Select an image: <input style={{color: '#0c7cb3', marginLeft: '120px', marginTop: '-20px'}} type="file" name="myFile" />
                <input style={{backgroundColor: '#0c7cb3', color: 'white', marginTop: '10px'}} type="submit" />
              </form>
            </div>
            <div className="col-md-6">
              <form action="/action_page.php">
                Value:
                <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', marginLeft: '70px'}} />
                to
                <input type="text" name style={{border: '1px solid grey', borderRadius: '3px'}} />
                <br /><br />
                Premium Rate:
                <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '372px', marginLeft: '15px'}} />
                <br /><br />
              </form>
            </div>
          </div>
          <div style={{marginTop: '350px', marginLeft: '180px', border: '1px solid grey', width: '82%', padding: '10px', borderRadius: '6px', backgroundColor: '#eef1f6', paddingBottom: '15px'}} className="row">
            <h4 style={{marginTop: '-3px'}}>Parameters:</h4>
            <div className="col-md-3">
              <form>
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Engine power
                </label> <br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Weight
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Bucket Capacity
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />ModelSpec9
                </label><br />
              </form>
            </div>
            <div className="col-md-3">
              <form>
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Engine power
                </label> <br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Weight
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Bucket Capacity
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />ModelSpec9
                </label><br />
              </form>
            </div>
            <div className="col-md-3">
              <form>
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Delivery pressure
                </label> <br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Capacity
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Showel capacity
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Other Parameters
                </label><br />
              </form>
            </div>
            <div className="col-md-3">
              <form>
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Loader capacity
                </label> <br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Maximum horizontal
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Maximum vertical
                </label><br />
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />Other Parameters
                </label><br />
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Addsubcategory;
