import React, { Component } from 'react';

class EquipmentAdmin extends Component{
  render(){
    return (

      <div>
              <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">Equipshare</a>
                  </div>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="dropdown-toggle" data-toggle="dropdown" href="#"><span style={{marginRight: '5px'}} className="glyphicon glyphicon-user" />William Stryker</a>
                      <ul className="dropdown-menu">
                        <li><a style={{borderBottom: '1px solid grey'}} href="#">Manage Profile</a></li>
                        <li><a href="#">Log Out</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="sidenav">
                <a href="dashboard.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-info-sign" />Dashboard</a>
                <a href="location.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-map-marker" />Location</a>
                <a href="companies.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-th-list" />Companies</a>
                <a href="equipment master.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-info-sign" />Equipment Master</a>
                <a href="equipment categories.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-th-list" />Equipment Categories</a>
                <a href="#agent.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-user" />Agent</a>
                <a href="#wallet.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-piggy-bank" />Wallet</a>
                <a href="#rental request.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-list-alt" />Rental Request</a>
                <a href="reports.html"><span style={{marginRight: '3px'}} className="glyphicon glyphicon-list-alt" />Reports</a>
              </div>
              <div style={{textAlign: 'right', marginTop: '100px'}}>
                <button className="btn"><span className="glyphicon glyphicon-info-sign" /></button><br />
                <button className="btn"><span className="glyphicon glyphicon-bell" /></button><br />
                <button className="btn"><span className="glyphicon glyphicon-map-marker" /></button><br />
                <button className="btn"><span className="glyphicon glyphicon-time" /></button><br />
              </div>
            </div>
          );
        }
      }

export default EquipmentAdmin;
