import React from 'react';
import './App.css';
import './props.css';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import HomePage from './component/HomePage'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <HomePage /> */}
      <Route path="/" component={HomePage }></Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
