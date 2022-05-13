import { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import smsPanel from './components/smsPanel';
import PageHeader from './components/pageHeader';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <PageHeader />
    </>
  );
}

export default App;

