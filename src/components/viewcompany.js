import React, { Component } from 'react';

class Viewcompany extends Component{
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
                 <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Asset Management System</strong></h4>
                 <div style={{marginTop: '10px'}} className="col-md-4">
                   <div>
                     <div style={{marginBottom: '10px'}}> <a href className="btn1">Edit</a><br /><br />
                     </div>
                   </div>
                 </div>
               </div>
             </div></div>
         );
       }
     }

export default Viewcompany;
