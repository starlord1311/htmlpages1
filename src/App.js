import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addsubcategory from './components/addsubcategory.js'
import Addcompany from './components/addcompany.js';
import Companylist from './components/companylist.js';
import Createauction from './components/createauction.js';
import DashboardAdmin from './components/dashboardadmin.js';
import EquipmentAdmin from './components/equipmentadmin.js';
import Page1 from './components/page1.js';
import Page2 from './components/page2.js';
import Page3 from './components/page3.js';
import Viewcompany from './components/viewcompany.js';
import Viewequipment from './components/viewequipment.js';

class App extends Component {
  render() {
    return (
      <div>
      <Viewequipment />
      </div>
    );
  }
}

export default App;
