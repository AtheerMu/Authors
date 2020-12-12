import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import { Router} from '@reach/router';
import Main from './components/Main';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
function App() {
  return (
    <div className="container mt-5 ">
      <h1  className="text-info"> Favorite Authors</h1>
      <Router>
      <Main path="/"/>
      <AddAuthor path="/AddAuthor"/>
      <EditAuthor path="/:id/edit"/>

      </Router>
   
      
    </div>
  );
}

export default App;
