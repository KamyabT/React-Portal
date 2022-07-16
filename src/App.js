import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import PageHeader from './components/pageHeader';
import MainContent from './components/mainContent';
import SmsPanel from './components/Smspanel';
import CreateUser from './components/createUser';
import Home from './components/home';
import './App.css';
import Smspanel from './components/Smspanel';

function App() {
  return (
    <div>
      <Router>
        {/* <Switch>
          <Route exact path="/Smspanel">
            <Smspanel />
          </Route>
        </Switch> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Switch>
          <Route exact path="/Smspanel">
            <Smspanel/>
          </Route>
        </Switch> */}
        {/*<Switch>
          <Route exact path="/usersList">
            <Userslist />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/invoiceArchives">
            <Invoicearchives />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/newInvoice">
            <Uploadinvoice />
          </Route>
        </Switch>
        <Switch>
        <Route exact path="/createUser">
          <Newuser />
        </Route>
  </Switch> */}


      </Router>

      {/* <Navbar />
      <Sidebar />
      <PageHeader />
      <MainContent />
      <CreateUser /> */}
    </div>
  );
}

export default App;




{/* <div className='content'>
<Route path='/smsdashboard' Component={SmsPanel} />
<Route path='/createuser' Component={CreateUser} />
<Route path='/' Component={Sidebar} />
</div> */}