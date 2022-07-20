import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import PageHeader from './components/pageHeader';
import MainContent from './components/mainContent';
import CreateUser from './components/createUser';
import Home from './components/home';
import './App.css';
import Smspanel from './components/smspanel';
import InvoiceArchive from './components/invoiceArchive';
import UsersList from './components/usersList';
import NewInvoice from './components/newInvoice';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Smspanel' component={Smspanel} />
          <Route exact path='/invoiceArchives' component={InvoiceArchive} />
          <Route exact path='/usersList' component={UsersList} />
          <Route exact path='/newInvoice' component={NewInvoice} />
          <Route exact path='/createUser' component={CreateUser} />

        </Switch>
        {/* <Route path='/aa' component={Home} /> */}
        {/* <Switch>
          <Route exact path="/Smspanel">
            <Smspanel />
          </Route>
        </Switch> */}
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch> */}
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