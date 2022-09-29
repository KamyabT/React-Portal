import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import './App.css';
import Smspanel from './components/smspanel';
import InvoiceArchive from './components/invoiceArchive';
import UsersList from './components/usersList';
import NewInvoice from './components/newInvoice';
import CreateUser from './components/createUser';
import EditUsers from './components/editUsers';
import LoginForm from './components/loginForm';
import Kamyab from './components/kamyabtst';




function App() {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<LoginForm/>}/>
          <Route exact path='/Smspanel' element={<Smspanel/>} />
          <Route exact path='/invoiceArchives' element={<InvoiceArchive/>} />
          <Route exact path='/usersList' element={<UsersList/>} />
          <Route exact path='/newInvoice' element={<NewInvoice/>} />
          <Route exact path='/createUser' element={<CreateUser/>} />
          <Route exact path='/kamyabtst' element={<Kamyab/>} />
          {/* <Route path='/editUsers' element={<EditUsers/>}/> */}
          <Route path="/user/:id" element={<EditUsers />} />
        </Routes>
    </div>
  );
}

export default App;
