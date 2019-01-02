import React, { Component } from 'react';
import './companylist.css';

class Companylist extends Component{
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
    <div className="row" style={{marginTop: '50px', marginLeft: '180px', marginRight: '10px', width: '83%'}}>
      <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Company List:</strong></h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Projects</th>
            <th>User</th>
            <th>Role</th>
            <th>Type</th>
            <th>Equipments</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>
);
}
}
export default Companylist;
