
import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './containers/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>

      <div>

      <Routes>

        <Route path="/*" element={<Dashboard />} />

      </Routes>
      
      </div>



    </Router>
  )
  }

export default App
